import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className={`font-serif-kr font-bold text-2xl tracking-tighter transition-colors ${scrolled ? 'text-[#006D77]' : 'text-[#006D77] lg:text-slate-800'}`}>
              황일웅 <span className="text-sm font-sans font-normal ml-1 opacity-70">Dr. Hwang, Il-Ung</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#006D77] font-bold border-b-2 border-[#006D77]' 
                      : `text-[#4A5568] hover:text-[#006D77]`
                  }`
                }
              >
                {/* @ts-ignore */}
                {t.nav[item.label]}
              </NavLink>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-[#4A5568] hover:text-[#006D77] transition-colors border border-gray-300 rounded-full px-3 py-1"
            >
              <Globe size={14} />
              <span>{language === 'ko' ? 'EN' : 'KO'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-[#4A5568]"
            >
              <Globe size={16} />
              <span>{language === 'ko' ? 'EN' : 'KO'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4A5568] hover:text-[#006D77] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-[#006D77] bg-teal-50'
                    : 'text-[#4A5568] hover:text-[#006D77] hover:bg-gray-50'
                }`
              }
            >
              {/* @ts-ignore */}
              {t.nav[item.label]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
