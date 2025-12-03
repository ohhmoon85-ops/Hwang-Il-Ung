import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600" 
            alt="Medical Leadership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full pt-16">
          <h1 className="font-serif-kr text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {t.hero.title} <br className="hidden md:block" />
            <span className="text-[#4FD1C5]">{t.hero.titleHighlight}</span>{t.hero.titleSuffix}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-[#006D77] hover:bg-[#005860] text-white font-bold rounded-sm transition-all shadow-lg flex items-center justify-center"
            >
              {t.hero.btnPrimary}
            </Link>
            <Link 
              to="/expertise" 
              className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-sm transition-all flex items-center justify-center"
            >
              {t.hero.btnSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Identity Statement (Problem & Solution) */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif-kr text-3xl md:text-4xl font-bold text-[#4A5568] mb-8">
            {t.identity.title}
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              {t.identity.p1}
            </p>
            <p className="font-medium text-[#006D77]">
              {t.identity.p2Prefix} <strong>{t.identity.p2Strong}</strong>{t.identity.p2Suffix}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#006D77] transition-colors">
                <Shield className="w-8 h-8 text-[#006D77] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568] mb-4">{t.features.f1Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.f1Desc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#006D77] transition-colors">
                <Activity className="w-8 h-8 text-[#006D77] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568] mb-4">{t.features.f2Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.f2Desc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#006D77] transition-colors">
                <FileText className="w-8 h-8 text-[#006D77] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif-kr text-2xl font-bold text-[#4A5568] mb-4">{t.features.f3Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.f3Desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#4A5568] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="font-serif-kr text-3xl font-bold mb-6">{t.socialProof.title}</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#006D77] rounded-full mt-2.5"></div>
                  <span className="text-lg">{t.socialProof.role1}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#006D77] rounded-full mt-2.5"></div>
                  <span className="text-lg">{t.socialProof.role2}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#006D77] rounded-full mt-2.5"></div>
                  <span className="text-lg">{t.socialProof.role3}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#006D77] rounded-full mt-2.5"></div>
                  <span className="text-lg">{t.socialProof.role4}</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 border-l-4 border-[#006D77] pl-6 md:pl-10">
              <blockquote className="text-xl md:text-2xl font-serif-kr italic text-gray-300 mb-4 whitespace-pre-wrap">
                {t.socialProof.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;