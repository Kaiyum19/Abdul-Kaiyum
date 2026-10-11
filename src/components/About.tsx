import React from 'react';
import { User, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTENT, ASSETS } from '../data/content';
import { Language } from '../types';
import { RotatingProfileAvatar } from './RotatingProfileAvatar';
import { AnimateOnScroll } from './AnimateOnScroll';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const content = CONTENT.about;

  return (
    <section id="about" className="relative pt-4 sm:pt-6 md:pt-10 pb-16 md:pb-24 z-10">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-[#3A0353]/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A0353]/60 border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'ব্যক্তিগত প্রোফাইল' : 'Personal Profile'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              <span className="gold-gradient-text">{content.sectionTitle[currentLang]}</span>
              <span className="block text-xl sm:text-2xl text-white/70 font-light mt-1">
                {currentLang === 'bn' ? 'About Me' : 'আমার পরিচিতি'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-normal">
              {content.subtitle[currentLang]}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8D299] to-transparent mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Secondary Profile Image (Profile 2) with independent rotating rings */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-1">
            <AnimateOnScroll direction="right" duration={0.8} distance={30}>
              <div className="relative">
                {/* Profile 2 Avatar with independent counter-rotation timing */}
                <RotatingProfileAvatar
                  imageUrl={ASSETS.profile2}
                  alt="Abdul Kaiyum — Secondary Profile Portrait"
                  variant="about"
                  timingOffset={true}
                />

                {/* Supporting Cross-preview badge showing Profile 1 (Primary) */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:right-0 z-20 flex items-center gap-2.5 p-2 px-3 rounded-2xl bg-[#170820]/95 border border-[#804A8A]/50 backdrop-blur-md shadow-xl">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#F8D299]/60 bg-[#3A0353]">
                    <img
                      src={ASSETS.profile1}
                      alt="Abdul Kaiyum — Hero portrait thumbnail"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-left pr-1">
                    <span className="block text-[10px] text-[#F8D299] font-medium uppercase">
                      {currentLang === 'bn' ? 'মৌলিক পরিচয়' : 'Primary Profile'}
                    </span>
                    <span className="block text-xs font-bold text-white font-bn">
                      আব্দুল কাইয়ুম
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Caption Under Portrait */}
              <div className="mt-6 sm:mt-7 text-center">
                <p className="text-xs sm:text-sm text-white/70 italic font-bn">
                  {currentLang === 'bn'
                    ? '“নতুন বিষয় শেখা ও মননশীল কাজের মাধ্যমে ইতিবাচক ভূমিকা রাখা”'
                    : '"Striving to make a positive impact through learning and creative expression."'}
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Bio & Premium Information Cards */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
            {/* Bio Narrative Cards */}
            <AnimateOnScroll direction="left" duration={0.7} distance={40}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#3A0353]/35 border border-[#804A8A]/40 backdrop-blur-md shadow-[0_10px_35px_rgba(58,3,83,0.3)] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F8D299]/10 to-transparent pointer-events-none" />

                <div className="flex items-center gap-3 text-[#F8D299] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#F8D299]" />
                  <span>
                    {currentLang === 'bn' ? 'জীবনের লক্ষ্য ও আদর্শ' : 'Mission & Perspectives'}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                  {content.bioParagraph1[currentLang]}
                </p>

                <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                  {content.bioParagraph2[currentLang]}
                </p>

                {/* Core Philosophy Highlights */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#804A8A]/30">
                  <div className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#F8D299] mt-0.5 flex-shrink-0" />
                    <span>
                      {currentLang === 'bn'
                        ? 'কওমি মাদরাসায় দ্বীনি শিক্ষার অবিচল চর্চা'
                        : 'Firm dedication to traditional Islamic learning'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#F8D299] mt-0.5 flex-shrink-0" />
                    <span>
                      {currentLang === 'bn'
                        ? 'ডিজিটাল প্রযুক্তিতে সততা ও শালীনতা রক্ষা'
                        : 'Maintaining honesty & dignity in digital work'}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Information Cards Grid (Staggered Entrance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {content.infoCards.map((card, idx) => (
                <AnimateOnScroll
                  key={idx}
                  direction={idx % 2 === 0 ? 'right' : 'left'}
                  delay={0.1 * (idx + 1)}
                  duration={0.55}
                >
                  <div className="p-4 rounded-2xl bg-[#170820]/80 border border-[#804A8A]/35 hover:border-[#F8D299]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,210,153,0.15)] group h-full">
                    <span className="text-xs text-white/50 uppercase tracking-wider block font-medium">
                      {card.label[currentLang]}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#F8D299] transition-colors mt-1 block font-bn">
                      {card.value[currentLang]}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Sincerity Badge */}
            <AnimateOnScroll direction="up" delay={0.3} duration={0.6}>
              <div className="p-3.5 px-4 rounded-xl bg-[#3A0353]/30 border border-[#F8D299]/20 flex items-center gap-3 text-xs sm:text-sm text-white/70">
                <ShieldCheck className="w-5 h-5 text-[#F8D299] flex-shrink-0" />
                <span>
                  {currentLang === 'bn'
                    ? 'আমি নিজেকে একজন শিক্ষার্থী ও শিক্ষানবিস কনটেন্ট ক্রিয়েটর হিসেবে সততার সাথে উপস্থাপন করি।'
                    : 'I honestly present myself as a student and learner in digital content creation.'}
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
