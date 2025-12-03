import { NavItem, CareerItem, InsightItem } from './types';

// Colors
export const COLORS = {
  primary: '#006D77', // Medical Teal
  secondary: '#4A5568', // Steel Grey
  ivory: '#FDFBF7',
};

// Navigation (Keys used for translation lookups)
export const NAV_ITEMS: NavItem[] = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'expertise', path: '/expertise' },
  { label: 'insights', path: '/insights' },
  { label: 'contact', path: '/contact' },
];

// About Data with Bilingual Support
export const CAREER_HISTORY: CareerItem[] = [
  {
    period: { ko: "현재", en: "Current" },
    title: { ko: "서울대학교병원 임상교수", en: "Professor, Seoul National University Hospital" },
    description: {
      ko: "정형외과 척추 전문의로서 환자 진료 및 후학 양성. 공공 보건 의료 정책 자문 수행.",
      en: "Specializing in orthopedic spine surgery, patient care, and education. Advising on public health policy."
    }
  },
  {
    period: { ko: "역임", en: "Previous" },
    title: { ko: "UAE 서울대학교병원(SKSH) 부원장", en: "Deputy Director, UAE Sheikh Khalifa Specialty Hospital (SKSH)" },
    description: {
      ko: "한국 의료 시스템의 글로벌 진출을 선도하며, 중동 현지 병원 운영 및 진료 체계 안정화 주도.",
      en: "Led the global expansion of Korean medical systems and stabilized hospital operations in the Middle East."
    }
  },
  {
    period: "2014 - 2016",
    title: { ko: "제41대 국군의무사령관 (육군 준장)", en: "41st Surgeon General, ROK Armed Forces (Brigadier General)" },
    description: {
      ko: "국가 방역 체계 구축 및 메르스(MERS) 사태 당시 군 의료 인력 지원 총괄 지휘. 군 의료 체계 혁신 주도.",
      en: "Directed national quarantine systems and military medical support during the MERS crisis. Led innovation in military medicine."
    }
  },
  {
    period: "2012 - 2014",
    title: { ko: "국군수도병원장", en: "Director, Armed Forces Capital Hospital" },
    description: {
      ko: "군 중증 외상 센터 건립 추진 및 선진 의료 시스템 도입. 장병 진료 환경 대폭 개선.",
      en: "Promoted the establishment of a military severe trauma center and introduced advanced medical systems."
    }
  },
  {
    period: { ko: "현재", en: "Current" },
    title: { ko: "국가위기관리센터 정책 자문위원", en: "Policy Advisor, National Crisis Management Center" },
    description: {
      ko: "국가적 재난 및 감염병 위기 상황에 대한 의료 안보 전략 수립 자문.",
      en: "Advising on medical security strategies for national disasters and infectious disease crises."
    }
  }
];

// Insights Data (Titles are kept in original language as they refer to specific sources)
export const INSIGHTS_DATA: InsightItem[] = [
  {
    type: 'Media',
    title: "환자중심 軍 의료시스템 개편 시급..\"응급시 정부·민간 협력\"",
    source: "메디파나뉴스",
    date: "2019.07.18",
    link: "https://www.medipana.com/article/view.php?news_idx=242250"
  },
  {
    type: 'Media',
    title: "대한정형외과학회·국군의무사령부 '악수' (MOU 체결)",
    source: "의협신문",
    date: "2019.08.05",
    link: "https://www.doctorsnews.co.kr/news/articleView.html?idxno=130282"
  },
  {
    type: 'Media',
    title: "안규백 국방위원장, 환자 중심 군 의료시스템 개편 토론회 개최",
    source: "시사매거진",
    date: "2019.07.18",
    link: "http://www.sisamagazine.co.kr/news/articleView.html?idxno=209730"
  },
  {
    type: 'Column',
    title: "[기고/황일웅]인도네시아에 민군합동구호팀 보내야",
    source: "동아일보",
    date: "2018.10.11",
    link: "https://www.donga.com/news/Opinion/article/all/20181011/92348632/1"
  },
  {
    type: 'Media',
    title: "청와대 의무실장에 황일웅 前 국군의무사령관...DJ·盧 이어 세 번째",
    source: "뉴시스",
    date: "2017.07.27",
    link: "https://www.newsis.com/view/?id=NISX20170727_0000052062"
  },
  {
    type: 'Media',
    title: "청와대 황일웅 의무실장 임명, 세 정부 연속 의무실장 기록",
    source: "경향신문",
    date: "2017.07.26",
    link: "https://www.khan.co.kr/politics/president/article/201707261739001"
  },
  {
    type: 'Media',
    title: "청와대 의무실장에 황일웅 前 국군의무사령관",
    source: "연합뉴스",
    date: "2017.07.26",
    link: "https://www.yna.co.kr/view/AKR20170726162300001"
  },
  {
    type: 'Media',
    title: "UAE 셰이크 칼리파 전문병원, 한국 의료 우수성 입증하며 흑자 전환 주도",
    source: "연합뉴스",
    date: "2017.02.14",
    link: "https://www.yna.co.kr/view/AKR20170214154400039"
  },
  {
    type: 'Media',
    title: "황일웅 신임 의무사령관 취임식 개최",
    source: "의협신문",
    date: "2014.12.26",
    link: "https://www.doctorsnews.co.kr/news/articleView.html?idxno=100995"
  },
  {
    type: 'Media',
    title: "신임 국군의무사령관에 황일웅 준장",
    source: "의협신문",
    date: "2014.12.24",
    link: "https://www.doctorsnews.co.kr/news/articleView.html?idxno=100958"
  },
  {
    type: 'Media',
    title: "황일웅 전 사령관, '군 의료, 이제는 대학병원 수준으로 도약해야'",
    source: "국방일보 인터뷰",
    date: "2023.10.15",
    link: "https://kookbang.dema.mil.kr/"
  }
];
