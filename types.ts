
export type Language = 'ko' | 'en';

export interface NavItem {
  label: string; // Key for translation
  path: string;
}

export interface BilingualText {
  ko: string;
  en: string;
}

export interface CareerItem {
  period: BilingualText | string;
  title: BilingualText;
  description: BilingualText;
}

export interface InsightItem {
  type: 'Media' | 'Column' | 'Paper';
  title: string; // Titles remain in original language usually
  source: string;
  date: string;
  link?: string;
}

export interface GalleryItem {
  image: string;
  title: BilingualText;
  category: string;
}

export enum ContactType {
  PATIENT = 'PATIENT',
  BUSINESS = 'BUSINESS',
}
