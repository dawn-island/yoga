# 🎬 YouTube Downloader (Node.js)

Node.js로 작성된 YouTube 동영상 다운로더입니다.
내부적으로 **yt-dlp**를 래핑하여 고품질 다운로드를 지원합니다.

## 📦 사전 요구사항

| 도구 | 설치 방법 |
|------|-----------|
| Node.js ≥ 14 | https://nodejs.org |
| yt-dlp | `brew install yt-dlp` (macOS) / `sudo apt install yt-dlp` (Linux) |
| ffmpeg *(선택)* | `brew install ffmpeg` — 최고 화질 병합에 필요 |

## 🚀 사용법

```bash
# 기본 (최고 화질)
node index.js https://www.youtube.com/watch?v=VIDEO_ID

# 720p 다운로드
node index.js https://youtu.be/VIDEO_ID -q 720


node index.js https://www.youtube.com/watch?v=8YRwNqRYfR4 -q 720
node index.js https://youtu.be/stFZFoS_3IY -q 720
node index.js https://youtu.be/hmi5ZmYO20w -q 720

# 오디오만 (MP3)
node index.js https://youtu.be/VIDEO_ID -a

# 저장 폴더 지정
node index.js https://youtu.be/VIDEO_ID -o ~/Downloads

# 사용 가능한 포맷 목록 확인
node index.js https://youtu.be/VIDEO_ID -l
```

## ⚙️ 옵션

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `-q, --quality` | 화질 지정 (`best` / `1080` / `720` / `480` / `360`) | `best` |
| `-a, --audio` | 오디오만 다운로드 (MP3 변환) | - |
| `-o, --output` | 저장 디렉토리 | 현재 폴더 |
| `-l, --list` | 사용 가능한 포맷 목록 출력 | - |
| `-h, --help` | 도움말 출력 | - |

## 📂 출력 파일명

- 동영상: `영상제목 [720p].mp4`
- 오디오: `영상제목.mp3`
