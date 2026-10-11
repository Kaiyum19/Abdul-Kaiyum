import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { CONTENT, NAVIGATION_ITEMS, ASSETS } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const content = CONTENT.footer;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-[#170820] border-t border-[#804A8A]/30 pt-16 pb-12 z-10 overflow-hidden">
      {/* Decorative top gold gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F8D299]/50 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#3A0353]/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateOnScroll direction="up" duration={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#804A8A]/25">
            {/* Col 1: Identity & Brand (6 cols) */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A0353] via-[#804A8A] to-[#F8D299] p-[1.5px] shadow-[0_0_15px_rgba(248,210,153,0.3)]">
                  <div className="w-full h-full bg-[#170820] rounded-[10px] flex items-center justify-center font-bold text-sm text-[#F8D299]">
                    AK
                  </div>
                </div>
                <div>
                  <span className="font-extrabold text-lg text-white tracking-wide block">
                    {content.nameEn}
                  </span>
                  <span className="font-bn text-sm text-[#F8D299] block font-semibold">
                    {content.nameBn}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 font-bn">
                {currentLang === 'bn' ? content.roleBn : content.roleEn}
              </p>

              <p className="text-xs sm:text-sm text-white/60 italic font-bn">
                {content.quote[currentLang]}
              </p>
            </div>

            {/* Col 2: Quick Links (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8D299]">
                {currentLang === 'bn' ? 'নেভিগেশন' : 'Quick Navigation'}
              </h4>
              <ul className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="cursor-pointer text-sm text-white/75 hover:text-[#F8D299] transition-colors font-bn"
                    >
                      {item.label[currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Official Social Channels (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8D299]">
                {currentLang === 'bn' ? 'অফিসিয়াল লিংক' : 'Official Channels'}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={ASSETS.facebookPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-[#F8D299] transition-colors"
                  >
                    <span className="font-bn">
                      {currentLang === 'bn' ? 'ব্যক্তিগত ফেসবুক প্রোফাইল' : 'Personal Facebook'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F8D299]" />
                  </a>
                </li>
                <li>
                  <a
                    href={ASSETS.facebookBartaGraphy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-[#F8D299] transition-colors"
                  >
                    <span className="font-bn">
                      {currentLang === 'bn' ? 'বার্তাগ্রাফি নিউজ অফিসিয়াল' : 'bartaGraphy News Page'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F8D299]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bottom Bar: Copyright & Back to Top */}
        <AnimateOnScroll direction="up" delay={0.15} duration={0.6}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
              © {currentYear} Abdul Kaiyum (আব্দুল কাইয়ুম). {content.rights[currentLang]}
            </p>

            <button
              onClick={scrollToTop}
              className="cursor-pointer group flex items-center gap-2 px-4 py-2 rounded-full bg-[#3A0353]/60 hover:bg-[#804A8A]/50 border border-[#F8D299]/30 hover:border-[#F8D299] text-xs font-semibold text-[#F8D299] transition-all shadow-md focus:outline-none"
              aria-label="Back to top"
            >
              <span>{content.backToTop[currentLang]}</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};
