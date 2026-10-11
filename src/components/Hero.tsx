import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, User, Compass } from 'lucide-react';
import { CONTENT, ASSETS } from '../data/content';
import { Language } from '../types';
import { RotatingProfileAvatar } from './RotatingProfileAvatar';
import { AnimateOnScroll } from './AnimateOnScroll';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const content = CONTENT.hero;

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
    <section
      id="home"
      className="relative pt-20 sm:pt-22 md:pt-26 pb-8 sm:pb-10 md:pb-12 flex items-center justify-center overflow-hidden z-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Single Centered Column Layout: Profile Image on Top, Text Below */}
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 -mt-2 sm:-mt-4">
          
          {/* 1. TOP: Primary Profile Image (Profile 1) with Dual Rotating Purple-and-Gold Rings */}
          <AnimateOnScroll direction="down" duration={0.8} distance={20} className="relative z-20">
            <div className="relative inline-block">
              <RotatingProfileAvatar
                imageUrl={ASSETS.profile1}
                alt="Abdul Kaiyum — Primary Profile"
                variant="hero"
                timingOffset={false}
              />

              {/* Integrated Miniature Profile 2 Preview Badge (Bottom Left of Profile) */}
              <button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer absolute -bottom-3 -left-3 sm:-bottom-2 sm:-left-6 z-30 flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 pr-3.5 sm:pr-4 rounded-2xl bg-[#170820]/95 border border-[#F8D299]/50 backdrop-blur-md shadow-[0_8px_30px_rgba(58,3,83,0.8)] hover:border-[#F8D299] hover:scale-105 transition-all group"
                title={currentLang === 'bn' ? 'পরিচিতিতে আরও দেখুন' : 'Explore About section'}
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#F8D299]/60 bg-[#3A0353] flex-shrink-0">
                  <img
                    src={ASSETS.profile2}
                    alt="Abdul Kaiyum Portrait 2"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170820]/60 to-transparent pointer-events-none" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#F8D299] uppercase tracking-wider font-semibold">
                    {currentLang === 'bn' ? 'প্রোফাইল ২ • পরিচিতি' : 'Profile 2 • About'}
                  </span>
                  <span className="block text-xs font-bold text-white group-hover:text-[#F8D299] transition-colors">
                    {currentLang === 'bn' ? 'হেদায়া জামাত' : 'Hedayah Studies'}
                  </span>
                </div>
              </button>

              {/* bartaGraphy Badge on Top Right of Profile */}
              <div className="absolute -top-3 -right-3 sm:-top-2 sm:-right-4 z-30 flex items-center gap-2 p-2 sm:p-2.5 pr-3.5 rounded-2xl bg-[#3A0353]/95 border border-[#F8D299]/50 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
                <img
                  src={ASSETS.bartaGraphyLogo}
                  alt="bartaGraphy News"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-contain bg-black/40 p-0.5 border border-[#F8D299]/40"
                />
                <div className="text-left">
                  <span className="block text-[10px] font-semibold text-[#F8D299]">
                    {currentLang === 'bn' ? 'মিডিয়া প্রজেক্ট' : 'Media Project'}
                  </span>
                  <span className="block text-xs font-bold text-white font-bn">
                    বার্তাগ্রাফি
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* 2. BELOW: All Introductory Text, Headings, Bio, Badges, and Buttons */}
          <div className="flex flex-col items-center space-y-6 max-w-3xl">
            {/* Small Welcome Badge */}
            <AnimateOnScroll direction="up" delay={0.1} duration={0.6}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3A0353]/70 border border-[#F8D299]/35 text-[#F8D299] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(248,210,153,0.15)] animate-pulse-subtle">
                <Sparkles className="w-3.5 h-3.5 text-[#F8D299]" />
                <span className={currentLang === 'bn' ? 'font-bn' : 'tracking-wider font-mono'}>
                  {content.badge[currentLang]}
                </span>
              </div>
            </AnimateOnScroll>

            {/* Main Headings */}
            <AnimateOnScroll direction="up" delay={0.15} duration={0.7} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block gold-gradient-text drop-shadow-[0_4px_25px_rgba(248,210,153,0.3)]">
                  {currentLang === 'bn' ? content.nameBn : content.nameEn}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mt-1">
                  {currentLang === 'bn' ? content.nameEn : content.nameBn}
                </span>
              </h1>

              {/* Sub-role description */}
              <div className="pt-2">
                <span className="inline-block text-base sm:text-lg md:text-xl font-semibold text-[#F8D299]/90 tracking-normal border-b border-[#804A8A]/50 pb-1">
                  {content.role[currentLang]}
                </span>
              </div>
            </AnimateOnScroll>

            {/* Paragraph Bio */}
            <AnimateOnScroll direction="up" delay={0.2} duration={0.7}>
              <p className="max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {content.description[currentLang]}
              </p>
            </AnimateOnScroll>

            {/* Quick Overview Badges */}
            <AnimateOnScroll direction="zoom" delay={0.25} duration={0.6} className="w-full max-w-lg">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full pt-1">
                {content.quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#3A0353]/50 border border-[#804A8A]/40 backdrop-blur-sm text-center group hover:border-[#F8D299]/60 hover:shadow-[0_0_15px_rgba(248,210,153,0.15)] transition-all"
                  >
                    <p className="text-[11px] sm:text-xs text-white/60 font-medium">
                      {stat.label[currentLang]}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#F8D299] mt-0.5 font-bn">
                      {stat.value[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll direction="up" delay={0.3} duration={0.7} className="w-full">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
                {/* Primary: Explore Work */}
                <button
                  onClick={() => scrollToSection('projects')}
                  className="cursor-pointer flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#F8D299] via-[#F59E51] to-[#804A8A] text-[#170820] font-bold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(248,210,153,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#F8D299]"
                >
                  <Compass className="w-4 h-4 text-[#170820]" />
                  <span className={currentLang === 'bn' ? 'font-bn' : ''}>
                    {content.buttons.explore[currentLang]}
                  </span>
                </button>

                {/* Secondary: About Me */}
                <button
                  onClick={() => scrollToSection('about')}
                  className="cursor-pointer flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#3A0353]/70 hover:bg-[#804A8A]/60 text-white font-semibold text-sm sm:text-base border border-[#F8D299]/40 hover:border-[#F8D299] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#F8D299]/50"
                >
                  <User className="w-4 h-4 text-[#F8D299]" />
                  <span className={currentLang === 'bn' ? 'font-bn' : ''}>
                    {content.buttons.about[currentLang]}
                  </span>
                </button>

                {/* Tertiary: Facebook Profile */}
                <a
                  href={ASSETS.facebookPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white/90 text-sm font-medium border border-white/10 hover:border-[#F8D299]/50 transition-all duration-200"
                >
                  <span>{content.buttons.facebook[currentLang]}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F8D299]" />
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>

        {/* Bottom Scroll-down prompt */}
        <AnimateOnScroll direction="up" delay={0.4} duration={0.6}>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="cursor-pointer group flex flex-col items-center gap-1.5 text-white/50 hover:text-[#F8D299] transition-colors focus:outline-none"
              aria-label="Scroll to About section"
            >
              <span className="text-[11px] tracking-widest uppercase font-medium">
                {currentLang === 'bn' ? 'নিচে স্ক্রল করুন' : 'SCROLL DOWN'}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#F8D299] flex items-center justify-center transition-colors">
                <ArrowDown className="w-4 h-4 animate-bounce text-[#F8D299]" />
              </div>
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
