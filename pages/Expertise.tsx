import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="font-serif-kr text-4xl font-bold text-[#4A5568] mb-4">
            {t.expertise.headerTitle}
          </h1>
          <p className="text-xl text-[#006D77] font-medium mb-6">{t.expertise.headerSubtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t.expertise.headerDesc}
          </p>
        </div>
      </div>

      {/* Detail Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section 1: Clinical */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
          <div className="md:w-1/3 bg-teal-50 p-10 flex flex-col items-center justify-center text-center">
            <Activity className="w-16 h-16 text-[#006D77] mb-4" />
            <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568]">{t.expertise.sec1Title}</h3>
            <span className="text-sm text-gray-500 mt-2">{t.expertise.sec1Sub}</span>
          </div>
          <div className="md:w-2/3 p-10">
            <h4 className="text-xl font-bold text-gray-800 mb-4">{t.expertise.sec1Head}</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec1List1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec1List2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec1List3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Military Medicine */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
          <div className="md:w-1/3 bg-slate-50 p-10 flex flex-col items-center justify-center text-center">
            <Shield className="w-16 h-16 text-[#4A5568] mb-4" />
            <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568]">{t.expertise.sec2Title}</h3>
            <span className="text-sm text-gray-500 mt-2">{t.expertise.sec2Sub}</span>
          </div>
          <div className="md:w-2/3 p-10">
            <h4 className="text-xl font-bold text-gray-800 mb-4">{t.expertise.sec2Head}</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec2List1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec2List2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec2List3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Public Health */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
          <div className="md:w-1/3 bg-orange-50 p-10 flex flex-col items-center justify-center text-center">
            <Globe className="w-16 h-16 text-orange-700 mb-4" />
            <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568]">{t.expertise.sec3Title}</h3>
            <span className="text-sm text-gray-500 mt-2">{t.expertise.sec3Sub}</span>
          </div>
          <div className="md:w-2/3 p-10">
            <h4 className="text-xl font-bold text-gray-800 mb-4">{t.expertise.sec3Head}</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec3List1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec3List2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006D77] mr-2">•</span>
                <span>{t.expertise.sec3List3}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 text-center">
        <Link to="/contact" className="inline-block px-8 py-3 bg-[#4A5568] text-white rounded-md hover:bg-[#2D3748] transition-colors shadow-lg font-medium">
          {t.expertise.cta}
        </Link>
      </div>
    </div>
  );
};

export default Expertise;
