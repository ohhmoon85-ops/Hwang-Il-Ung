
import { NavItem, CareerItem, InsightItem, GalleryItem } from './types';

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

// Gallery Images Data
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/assets/media_saudi.jpg",
    title: { 
      ko: "제41대 국군의무사령관 취임 및 부대 지휘", 
      en: "Inauguration & Command as 41st Surgeon General" 
    },
    category: "PHOTO"
  },
  {
    id: 2,
    imageUrl: "/assets/media_saudi.jpg",
    title: { 
      ko: "UAE 서울대병원(SKSH) 의료진 격려 및 운영 회의", 
      en: "Leading Operations & Encouraging Staff at UAE SKSH" 
    },
    category: "PHOTO"
  },
  {
    id: 3,
    imageUrl: "/assets/media_saudi.jpg",
    title: { 
      ko: "국가 위기 관리 전략 자문 및 정책 수립", 
      en: "Advising on National Crisis Management Strategy" 
    },
    category: "PHOTO"
  },
  {
    id: 4,
    imageUrl: "/assets/media_saudi.jpg",
    title: { 
      ko: "서울대학교병원 척추 센터 진료 및 연구", 
      en: "Clinical Practice & Research at SNUH Spine Center" 
    },
    category: "PHOTO"
  }
];

// Insights Data (Titles are kept in original language as they refer to specific sources)
export const INSIGHTS_DATA: InsightItem[] = [
  {
    type: 'Media',
    title: "[이엠디] 국군의무사령부 황일웅 사령관, 대한병원협회 특별공로상 수상",
    source: "eMD Medical News",
    date: "2016.03.17",
    link: "https://mdon.co.kr/mobile/article.html?no=8150"
  },
  {
    type: 'Media',
    title: "신임 국군의무사령관에 황일웅 준장",
    source: "의협신문",
    date: "2014.12.24",
    link: "https://doctorsnews.co.kr/news/articleView.html?idxno=101017"
  },
  {
    type: 'Media',
    title: "靑 의무실장에 황일웅 전 의무사령관...DJ·盧 이어 세 번째",
    source: "뉴시스",
    date: "2017.07.27",
    link: "https://www.newsis.com/view/NISX20170727_0000052417"
  },
  {
    type: 'Column',
    title: "[기고/황일웅]인도네시아에 민군합동구호팀 보내야",
    source: "동아일보",
    date: "2018.10.11",
    link: "https://www.donga.com/news/Opinion/article/all/20181011/92343564/1"
  },
  {
    type: 'Media',
    title: "[의료바이오]황일웅 국군의무사령관 \"군이 편한 의료체계 구현 역점\"",
    source: "PRESS9",
    date: "2016.05.11",
    link: "https://www.press9.kr/news/articleView.html?idxno=20341"
  },
  {
    type: 'Media',
    title: "병원협회, 국군의무사령부에 메르스 극복 지원 격려금",
    source: "메디포뉴스",
    date: "2015.7.17",
    link: "https://www.medifonews.com/news/article.html?no=109446"
  }
  {
    type: 'Media',
    title: "메르스 전사'는 그냥 이뤄진게 아닙니다",
    source: "의협신문",
    date: "2016.1.11",
    link: "https://www.doctorsnews.co.kr/news/articleView.html?idxno=108031"
  }
  {
    type: 'Media',
    title: "국군사령부-NMC 업무협약 체결",
    source: "의협신문",
    date: "2015.12.17",
    link: "https://doctorsnews.co.kr/news/articleView.html?idxno=107608"
  }
  {
    type: 'Media',
    title: "군인 건강 챙기고 관리 의무 부사관 지원하세요",
    source: "영남일보",
    date: "2014.5.22",
    link: "https://www.yeongnam.com/web/view.php?key=20140522.010240802070001"
  }
];
