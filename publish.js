#!/usr/bin/env node

/**
 * YouTube → Google Drive → videos.js → git push
 * 사용법: node publish.js <YouTube URL> [--title "제목"] [--date 2026.08.01] [-q 720]
 */

const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

// ─── 설정 ─────────────────────────────────────────────────────────────────────
const DRIVE_DEST = process.env.DRIVE_DEST || "gdrive:yoga"; // rclone 원격:폴더
const VIDEOS_JS = path.join(__dirname, "videos.js");

// ─── 인수 ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = (...names) => {
  const i = args.findIndex((a) => names.includes(a));
  return i >= 0 ? args[i + 1] : null;
};
const url = args.find((a) => /^https?:\/\//.test(a));
const quality = opt("-q", "--quality") || "720";

if (!url) {
  console.error("사용법: node publish.js <YouTube URL> [--title 제목] [--date 2026.08.01] [-q 720]");
  process.exit(1);
}

// ponytail: 모든 외부 호출은 execFileSync 배열 인수 — 셸 미경유라 따옴표/이스케이프 불필요
const run = (cmd, argv) => execFileSync(cmd, argv, { encoding: "utf8" }).trim();
const runLive = (cmd, argv) => execFileSync(cmd, argv, { stdio: "inherit" });
const git = (...argv) => runLive("git", ["-C", __dirname, ...argv]);

// ─── 1. 메타데이터 ────────────────────────────────────────────────────────────
console.log("ℹ  영상 정보 조회 중...");
const [ytTitle, uploadDate] = run("yt-dlp", [
  "--no-playlist",
  "--print",
  "%(title)s|||%(upload_date)s",
  url,
]).split("|||");

const title = opt("--title") || ytTitle;
const date =
  opt("--date") ||
  `${uploadDate.slice(0, 4)}.${uploadDate.slice(4, 6)}.${uploadDate.slice(6, 8)}`;
console.log(`   제목: ${title}\n   날짜: ${date}`);

// ─── 2. 다운로드 ──────────────────────────────────────────────────────────────
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "publish-"));
console.log(`\nℹ  다운로드 중 (${quality}p)...`);
runLive("yt-dlp", [
  url,
  "--no-playlist",
  "-f",
  `bestvideo[height<=${quality}][ext=mp4]+bestaudio[ext=m4a]/best[height<=${quality}]`,
  "-o",
  path.join(tmp, "%(title)s [%(height)sp].%(ext)s"),
]);
const file = fs.readdirSync(tmp)[0];
if (!file) throw new Error("다운로드된 파일이 없습니다");

// ─── 3. Drive 업로드 + 공유링크 ───────────────────────────────────────────────
console.log(`\nℹ  Drive 업로드 중: ${DRIVE_DEST}/${file}`);
runLive("rclone", ["copy", path.join(tmp, file), DRIVE_DEST, "--progress"]);

// rclone link 는 "링크가 있는 모든 사용자" 권한을 부여하고 URL 을 돌려준다
const link = run("rclone", ["link", `${DRIVE_DEST}/${file}`]);
const id = link.match(/[-\w]{25,}/)?.[0];
if (!id) throw new Error(`공유링크에서 파일 ID를 못 찾았습니다: ${link}`);
console.log(`✔  파일 ID: ${id}`);

fs.rmSync(tmp, { recursive: true, force: true });

// ─── 4. videos.js 추가 ────────────────────────────────────────────────────────
const src = fs.readFileSync(VIDEOS_JS, "utf8");
if (src.includes(id)) {
  console.log("⚠  이미 videos.js 에 있는 ID 입니다. 종료합니다.");
  process.exit(0);
}
const entry =
  `  {\n` +
  `    id: ${JSON.stringify(id)},\n` +
  `    title: ${JSON.stringify(title)},\n` +
  `    date: ${JSON.stringify(date)},\n` +
  `  },\n`;
fs.writeFileSync(VIDEOS_JS, src.replace("\n];", `\n${entry}];`));
console.log("✔  videos.js 갱신");

// ─── 5. commit + push ─────────────────────────────────────────────────────────
git("add", "videos.js");
git("commit", "-m", `${date} ${title}`);
git("push");
console.log("\n✔  완료");
