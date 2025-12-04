
import React from 'react';
import { INSIGHTS_DATA, GALLERY_ITEMS } from '../constants';
import { FileText, Mic, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Insights: React.FC = () => {
  const { t, language } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'Media': return <Mic className="w-5 h-5 text-purple-600" />;
      case 'Column': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Paper': return <BookOpen className="w-5 h-5 text-[#006D77]" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Media': return 'bg-purple-100 text-purple-800';
      case 'Column': return 'bg-blue-100 text-blue-800';
      case 'Paper': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="font-serif-kr text-4xl md:text-5xl font-bold text-[#4A5568] mb-4">
            {t.insights.headerTitle}
          </h1>
          <p className="text-xl text-[#006D77] font-medium mb-6">{t.insights.headerSubtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            {t.insights.headerDesc}
          </p>
        </div>
      </div>

      {/* Gallery Section - Updated to Choi Byung-Hyuk Style (Photo Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[16/10]">
                    <img 
                        src={item.image} 
                        alt={language === 'ko' ? item.title.ko : item.title.en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                         {/* Gold Badge */}
                        <span className="inline-block px-2 py-1 mb-3 text-xs font-bold text-white bg-[#D4AF37] rounded-sm tracking-wider uppercase">
                            {item.category}
                        </span>
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {language === 'ko' ? item.title.ko : item.title.en}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-center">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-6 text-2xl font-serif-kr font-bold text-[#4A5568]">{t.insights.divider}</span>
          <div className="flex-grow h-px bg-gray-200"></div>
      </div>

      {/* Filter Tabs (Visual Only) */}
      <div className="max-w-4xl mx-auto px-4 mb-10 flex justify-center space-x-2">
        <button className="px-4 py-2 bg-[#4A5568] text-white rounded-full text-sm font-medium">All</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">Media</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">Column</button>
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {INSIGHTS_DATA.map((item, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center justify-between group">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-1 ${getBadgeColor(item.type)}`}>
                  {getIcon(item.type)}
                  {item.type}
                </span>
                <span className="text-gray-400 text-sm">{item.date}</span>
              </div>
              <a 
                href={item.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#006D77] transition-colors flex items-center gap-2">
                  {item.title}
                  {item.link && <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />}
                </h3>
              </a>
              <p className="text-gray-500 font-medium">
                {item.source}
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
               <a 
                 href={item.link || '#'} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-[#006D77] font-medium text-sm hover:underline flex items-center"
               >
                 {t.insights.readMore} &rarr;
               </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
