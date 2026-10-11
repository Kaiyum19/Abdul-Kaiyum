import React from 'react';
import { ExternalLink, Radio, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { CONTENT, ASSETS } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface FeaturedNewsProps {
  currentLang: Language;
}

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ currentLang }) => {
  const content = CONTENT.featuredNews;

  return (
    <section className="relative py-20 md:py-28 z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A0353]/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#804A8A]/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Featured Showcase Box */}
        <AnimateOnScroll direction="zoom" duration={0.8} scaleAmount={0.93}>
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#3A0353]/90 via-[#170820]/95 to-[#3A0353]/80 border-2 border-[#F8D299]/40 p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(58,3,83,0.6)] overflow-hidden">
            {/* Subtle Decorative News Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F8D299] via-[#F59E51] to-[#804A8A]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left: Official Logo Showcase with Gold & Purple Frame (Animates from Left) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
                <AnimateOnScroll direction="right" duration={0.75} distance={35}>
                  <div className="relative group">
                    {/* Rotating Glow Ring around the News Logo */}
                    <div
                      className="absolute -inset-4 rounded-3xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(248, 210, 153, 0.4) 0%, rgba(128, 74, 138, 0.5) 50%, transparent 100%)',
                      }}
                    />

                    {/* Rotating Geometric Border */}
                    <div className="absolute -inset-2 rounded-3xl border border-dashed border-[#F8D299]/50 animate-spin-cw-slow pointer-events-none" />

                    {/* Official Logo Container */}
                    <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-[#170820] p-6 border-2 border-[#F8D299] shadow-[0_0_35px_rgba(248,210,153,0.3)] flex items-center justify-center overflow-hidden">
                      <img
                        src={ASSETS.bartaGraphyLogo}
                        alt="bartaGraphy News (বার্তাগ্রাফি নিউজ) Official Logo"
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Tagline under Logo */}
                  <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#170820]/90 border border-[#F8D299]/40 shadow-md">
                    <Radio className="w-4 h-4 text-[#F59E51] animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-[#F8D299] font-bn">
                      {content.tagline[currentLang]}
                    </span>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right: Editorial Narrative & Action Links (Animates from Right) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <AnimateOnScroll direction="left" duration={0.75} distance={35}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#170820]/80 border border-[#F8D299]/35 text-[#F8D299] text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{content.badge[currentLang]}</span>
                  </div>

                  {/* Main Headline */}
                  <div className="space-y-1 mt-4">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      <span className="gold-gradient-text block font-bn">
                        {content.titleBn}
                      </span>
                      <span className="block text-xl sm:text-2xl text-white/80 font-medium tracking-wide">
                        {content.titleEn}
                      </span>
                    </h3>

                    <p className="text-base sm:text-lg text-[#F8D299] font-bold font-bn">
                      “{content.tagline[currentLang]}”
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                    {content.description[currentLang]}
                  </p>

                  {/* Editorial Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                    {content.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3.5 rounded-2xl bg-[#170820]/80 border border-[#804A8A]/40 text-left"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#F8D299] mb-1 font-bn">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E51] flex-shrink-0" />
                          <span>{feature.title[currentLang]}</span>
                        </div>
                        <p className="text-xs text-white/70 font-normal">
                          {feature.desc[currentLang]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-6">
                    {/* Primary Button to bartaGraphy FB page */}
                    <a
                      href={content.primaryBtn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F8D299] via-[#F59E51] to-[#804A8A] text-[#170820] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(248,210,153,0.4)] hover:shadow-[0_0_35px_rgba(248,210,153,0.6)] transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="font-bn">{content.primaryBtn[currentLang]}</span>
                      <ExternalLink className="w-4 h-4 text-[#170820]" />
                    </a>

                    {/* Secondary Button to Personal FB profile */}
                    <a
                      href={content.secondaryBtn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#170820]/80 hover:bg-[#3A0353] text-white font-semibold text-sm sm:text-base border border-[#F8D299]/40 hover:border-[#F8D299] transition-all duration-300"
                    >
                      <span className="font-bn">{content.secondaryBtn[currentLang]}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F8D299]" />
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
