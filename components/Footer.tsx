import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#4A5568] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif-kr text-2xl font-bold">황일웅</h3>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {t.footer.role}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-200">{t.footer.menu}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><NavLink to="/about" className="hover:text-white transition-colors">{t.nav.about}</NavLink></li>
              <li><NavLink to="/expertise" className="hover:text-white transition-colors">{t.nav.expertise}</NavLink></li>
              <li><NavLink to="/insights" className="hover:text-white transition-colors">{t.nav.insights}</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</NavLink></li>
            </ul>
          </div>

          {/* Contact Short */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-200">{t.footer.location}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.contact.address}
            </p>
            <div className="mt-4">
               <NavLink to="/contact" className="inline-block border border-white/30 rounded-full px-4 py-2 text-xs hover:bg-white hover:text-[#4A5568] transition-colors">
                  {t.footer.btnContact}
               </NavLink>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hwang Il-Ung. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
