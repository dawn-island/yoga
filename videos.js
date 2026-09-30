const VIDEOS = [
  {
    id: "1QxqbFlBk-nfz9ihGfj8SAAIrTvlDyUdT",
    title: "[18기]횡격막과골반저근협응-호흡기초해부학과산스크리트용어",
    date: "2026.04.05",
  },
  {
    id: "1hNrja7-KVaMKX5hCjtwkY5fZxYdcViNq",
    title:
      "[18기]횡격막병치구역(ZOA)-전신 정렬과 코어 안정성을 결정하는 기하학적 핵심 요소",
    date: "2026.04.05",
  },
  {
    id: "1l7D22OCztllmuRSlWaMdxAYcazZJA7Qk",
    title:
      "[18기]어깨허리햄스트링발목통증해결-횡격막360도활성화마사지-하부늑골⧸늑골거근의중요성",
    date: "2026.04.05",
  },
  {
    id: "17EocUG5oIw0DokCzVYQ4-sf6LSm3sc9y",
    title:
      "[18기]내늑간근압축⧸늑골거근과횡격막⧸횡격막사방으로열고우디아나반다연습with벽",
    date: "2026.04.23",
  },
  {
    id: "1P6GBjujgDzKucnMqYittC-GcjpzVWSw7",
    title: "[18기]인도의대논문에제시된물라반다실체⧸좌골정확한위치촉진",
    date: "2026.04.23",
  },
  {
    id: "1Wva9_4iaRk50uYTr72anYc2tVgEigPc5",
    title:
      "[18기]마실때골반저근이완 현대재활의학vs하타요가프라디피카⧸아쉬탕가요가",
    date: "2026.04.23",
  },
  {
    id: "1dHV6PcNN7zXGibQOoVi2MDe8EtrQSX4y",
    title: "[18기]전굴자세⧸시르사A~B전환시오는천골통증해결법",
    date: "2026.04.05",
  },
  {
    id: "1QSjAXTN7MANiBWxB3ufKviCSROgc_cw5",
    title: "[18기]골격편-척추측만증=측굴+회전구조⧸척추뒤로보내폐와흉강넓히기",
    date: "2026.05.21",
  },
  {
    id: "1DybVfRdXboosJVM4iuvcnogKO6qsitQQ",
    title:
      "[18기]움직임편-신체에너지효율성극대화⧸사마스티히-외측복사뼈로맞추기",
    date: "2026.05.21",
  },
  {
    id: "1TaDQVu-FN55xf74hQI-aWWLmv924ZIZz",
    title:
      "[18기]다운독-한팔만길고힘이없다？정답：척추측만교정+견갑골상방회전을다운독에대입하기",
    date: "2026.05.21",
  },
  {
    id: "1YELg0GoGU_05bxT3JyiGmIX8BCgvpUaR",
    title:
      "견갑골전방경사와익상견갑은다르다⧸후방경사⧸측굴관련모든근육",
    date: "2026.06.03",
  },
  {
    id: "12uCLLat0sD_hdcijVXCziLmKuQrgMCPF",
    title: "부비강의중요성-브라마리호흡+호흡과신경계",
    date: "2026.06.03",
  },
  {
    id: "1kwhkkvAqR6UTVF3PZjvEe2L2pPdayjDp",
    title:
      "장골반다의힘-골반반다실전(좌골반다⧸장골반다⧸치골반다⧸천골반다)",
    date: "2026.06.03",
  },
  {
    id: "1fAMYUVklIiNyrfU6KMmtif_6IxddVtyS",
    title:
      "골반반다원리(좌골반다⧸장골반다⧸치골반다⧸천골반다)",
    date: "2026.06.03",
  },
  {
    id: "10MWmXbHkO7D0ts_60wFnk6A7dwQ8scIC",
    title:
      "흉쇄유돌근⧸측두근⧸후두하근⧸견갑거근-개별근육운동법⧸마사지⧸아사나",
    date: "2026.06.22",
  },
  {
    id: "1KCc9-SRzCQz-ZFEv0eyiCINkyeKjh33h",
    title:
      "턱당기는잘란다라반다가오히려일자목유발하는이유와올바른목과척후사용법+코브라자세팔힘빼는법",
    date: "2026.06.22",
  },
  {
    id: "1YGx59BxGtGeI8xYjmtyueW2bIQGo8oC2",
    title:
      "상승모근⧸중부승모근⧸하부승모근-개별근육마사지운동법아사나연결",
    date: "2026.06.22",
  },
  {
    id: "1R5c_VyDsjRR1UlDzFFrYWcay6wqz5r8i",
    title:
      "리프트업저절로되는복횡근활용법⧸전거근안느껴지는사람위한정확힌큐잉",
    date: "2026.07.06",
  },
  {
    id: "1IUwScdGbQmKRF7OPZp5Cd8S-3ujn_NOi",
    title:
      "우디아나반다+꼬리뼈말기로전거근⧸복횡근⧸사각근올바른정렬",
    date: "2026.07.06",
  },
  {
    id: "1xD2oN_sf47DA6KLxO8N019eAKgUiSWIi",
    title:
      "요가강사결국부자되는이유-감각기관으로시간보내는체질부자될가망이없다",
    date: "2026.07.06",
  },
  {
    id: "1ttsPENDIiY1xjtmiv_ZHNQdHD_tlFajs",
    title:
      "소둔근따로꼭관리해야하는이유-대퇴골두소켓에넣는방법",
    date: "2026.07.18",
  },
  {
    id: "1zALrxCKWHxdn2cb-GPDBS3cKxeleS7t3",
    title:
      "무릎안쪽통증-봉공근⧸중간통증-대퇴직근⧸바깥쪽통증-태퇴근막장근⧸봉공근-거위발건염",
    date: "2026.07.18",
  },
  {
    id: "1nVGQ1Z0PFQs7ejzpRp866UAqx7n_aYYb",
    title: "[내몸의리모델링,젠링]저자직강",
    date: "2026.08.16",
  },
  {
    id: "1jaGQ2DGRRmFlxxbO5_MzQZjre1u_hX3W",
    title:
      "치료해도그때뿐통증이계속된다면？-근막,요가,텐세그리티",
    date: "2026.08.16",
  },
  {
    id: "1iphSTLly7hHJAmMm5PI1zAcxRxxFTf25",
    title: "[18기근막]물리적신체를경험하는의식-요가철학적사유",
    date: "2026.08.24",
  },
  {
    id: "1mQs-WJQ-3c81atPgJRU2--1HJaBF-gDQ",
    title: "[18기근막]표면후방선-전굴자세에서가장중요한좌골결절의위치와방향성",
    date: "2026.08.24",
  },
  {
    id: "1kMl9SKrc8i8ILcjPQx-Pd51RcxPw0HAr",
    title: "[18기근막]표면전방선-ASIS와치골결절",
    date: "2026.08.24",
  },
  {
    id: "1WppPJ052f8RXqQ_K2yVIZyzV6o_rUhI7",
    title: "[18기근막]치골결합 마사지와위치의 중요성",
    date: "2026.09.17",
  },
  {
    id: "1FEvSf6zuPXgrtKAPxtUjPWScnEGnSaGb",
    title: "[18기근막]상지선-이두근/삼두근의중요성-어깨뿐아니라허리햄스트링까지",
    date: "2026.09.17",
  },
  {
    id: "1LFCSiO1S18adtuD2V_W8FtLg4iWEUCK3",
    title: "[18기근막]숨만잘못쉬어도굳어버리는외측선",
    date: "2026.09.17",
  },
];

// ponytail: "YYYY.MM.DD" 는 사전순 = 날짜순이라 파싱 불필요
https: VIDEOS.sort((a, b) => b.date.localeCompare(a.date));
