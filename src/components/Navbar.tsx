import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS, ASSETS } from '../data/content';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#170820]/90 backdrop-blur-md border-b border-[#F8D299]/20 shadow-[0_4px_30px_rgba(58,3,83,0.4)] py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#F8D299]/50 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A0353] via-[#804A8A] to-[#F59E51] p-[1.5px] shadow-[0_0_15px_rgba(248,210,153,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#170820] rounded-[10px] flex items-center justify-center font-bold text-base text-[#F8D299]">
                <span>AK</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-[#F8D299] transition-colors">
                ABDUL KAIYUM
              </span>
              <span className="font-bn text-xs text-[#F8D299]/90 font-medium">
                আব্দুল কাইয়ুম
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#3A0353]/30 px-3 py-1.5 rounded-full border border-[#804A8A]/30 backdrop-blur-sm">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#F8D299] font-semibold bg-[#804A8A]/35 shadow-[0_0_12px_rgba(248,210,153,0.2)]'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={currentLang === 'bn' ? 'font-bn text-sm' : 'text-sm'}>
                    {item.label[currentLang]}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-[#F8D299] to-[#F59E51] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Language Switch & Facebook button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F8D299]/30 bg-[#3A0353]/40 text-xs sm:text-sm font-medium text-[#F8D299] hover:bg-[#804A8A]/40 hover:border-[#F8D299]/60 transition-all shadow-[0_0_15px_rgba(248,210,153,0.15)] focus:outline-none focus:ring-2 focus:ring-[#F8D299]/50"
              title={currentLang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <Globe className="w-3.5 h-3.5 text-[#F8D299] group-hover:rotate-45 transition-transform duration-300" />
              <span>{currentLang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* bartaGraphy News Shortcut */}
            <a
              href={ASSETS.facebookBartaGraphy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#804A8A] to-[#3A0353] border border-[#F8D299]/40 text-white text-xs font-semibold hover:border-[#F8D299] transition-all shadow-[0_0_15px_rgba(128,74,138,0.4)] group"
            >
              <Sparkles className="w-3 h-3 text-[#F8D299]" />
              <span className="font-bn text-xs">বার্তাগ্রাফি</span>
              <ArrowUpRight className="w-3 h-3 text-[#F8D299] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: Language toggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#F8D299]/40 bg-[#3A0353]/60 text-xs font-medium text-[#F8D299] focus:outline-none"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLang === 'bn' ? 'EN' : 'বাং'}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#3A0353]/70 border border-[#804A8A]/40 text-[#F8D299] focus:outline-none focus:ring-2 focus:ring-[#F8D299]/50"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#170820]/95 border border-[#F8D299]/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(58,3,83,0.8)] transition-all animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#3A0353] to-[#804A8A] text-[#F8D299] font-semibold border border-[#F8D299]/30'
                      : 'text-white/85 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className={currentLang === 'bn' ? 'font-bn text-base' : 'text-sm'}>
                    {item.label[currentLang]}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#F8D299] shadow-[0_0_8px_#F8D299]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#804A8A]/30 flex flex-col gap-2">
            <a
              href={ASSETS.facebookPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#3A0353] border border-[#F8D299]/30 text-white text-sm font-medium hover:border-[#F8D299]"
            >
              <span>{currentLang === 'bn' ? 'ব্যক্তিগত ফেসবুক' : 'Personal Facebook'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F8D299]" />
            </a>
            <a
              href={ASSETS.facebookBartaGraphy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#804A8A] to-[#3A0353] border border-[#F8D299]/40 text-[#F8D299] text-sm font-semibold"
            >
              <span>{currentLang === 'bn' ? 'বার্তাগ্রাফি নিউজ পেজ' : 'bartaGraphy News Page'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
