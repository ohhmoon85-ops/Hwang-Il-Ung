import React from 'react';
import { CAREER_HISTORY } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { BilingualText } from '../types';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const getBilingualText = (text: string | BilingualText) => {
    if (typeof text === 'string') return text;
    return text[language];
  };

  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="font-serif-kr text-4xl md:text-5xl font-bold text-[#4A5568] mb-4">
            {t.about.headerTitle}
          </h1>
          <p className="text-xl text-[#006D77] font-medium mb-6">{t.about.headerSubtitle}</p>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            {t.about.headerDesc}
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-[#FDFBF7] py-20 mb-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif-kr text-3xl font-bold text-[#4A5568] mb-10">{t.about.philosophyTitle}</h2>
          <div className="relative">
             <span className="absolute top-0 left-0 text-6xl text-[#006D77] opacity-20 transform -translate-x-4 -translate-y-4">“</span>
             <p className="text-2xl md:text-3xl font-serif-kr text-gray-700 leading-loose italic whitespace-pre-line">
              {t.about.philosophyQuote}
             </p>
             <span className="absolute bottom-0 right-0 text-6xl text-[#006D77] opacity-20 transform translate-x-4 translate-y-4">”</span>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif-kr text-3xl font-bold text-[#4A5568] mb-12 border-l-4 border-[#006D77] pl-4">
          {t.about.journeyTitle}
        </h2>
        
        <div className="space-y-12">
          {CAREER_HISTORY.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 relative">
              {/* Line connector */}
              {index !== CAREER_HISTORY.length - 1 && (
                <div className="absolute left-[13px] top-8 bottom-[-48px] w-0.5 bg-gray-200 md:left-[140px] hidden md:block"></div>
              )}
              
              <div className="md:w-32 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-gray-100 text-[#006D77] font-bold text-sm rounded-full">
                  {getBilingualText(item.period)}
                </span>
              </div>
              
              <div className="flex-grow pl-8 md:pl-0 border-l md:border-l-0 border-gray-200 relative">
                {/* Mobile Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#006D77] md:hidden"></div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{getBilingualText(item.title)}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {getBilingualText(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg">
          <h3 className="font-serif-kr text-2xl font-bold text-[#006D77] mb-4">{t.about.section1Title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t.about.section1Desc}
          </p>
        </div>
        <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg">
          <h3 className="font-serif-kr text-2xl font-bold text-[#006D77] mb-4">{t.about.section2Title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {t.about.section2Desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
