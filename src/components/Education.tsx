import React from 'react';
import { BookOpen, ScrollText, Sparkles, Compass, GraduationCap } from 'lucide-react';
import { CONTENT } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface EducationProps {
  currentLang: Language;
}

export const Education: React.FC<EducationProps> = ({ currentLang }) => {
  const content = CONTENT.education;
  const item = content.timelineItem;

  return (
    <section id="education" className="relative py-20 md:py-28 z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#804A8A]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A0353]/60 border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'শিক্ষাগত পটভূমি' : 'Academic Journey'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              <span className="gold-gradient-text">{content.sectionTitle[currentLang]}</span>
              <span className="block text-xl sm:text-2xl text-white/70 font-light mt-1">
                {currentLang === 'bn' ? 'Education & Scholarship' : 'শিক্ষাগত পরিচিতি'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-normal">
              {content.subtitle[currentLang]}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8D299] to-transparent mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-gradient">
          {/* Glowing Vertical Line Gradient */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F8D299] via-[#804A8A] to-[#3A0353]"
            style={{
              boxShadow: '0 0 15px rgba(248, 210, 153, 0.4)',
            }}
          />

          {/* Timeline Node 1: Current Stage - Hedayah Level (Animates from Left) */}
          <div className="relative mb-12 group">
            {/* Glowing Golden Node / Badge */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#170820] border-2 border-[#F8D299] flex items-center justify-center shadow-[0_0_20px_rgba(248,210,153,0.5)] group-hover:scale-110 transition-transform z-20">
              <ScrollText className="w-5 h-5 text-[#F8D299]" />
            </div>

            {/* Main Education Card */}
            <AnimateOnScroll direction="right" duration={0.75} distance={45}>
              <div className="rounded-3xl bg-gradient-to-br from-[#3A0353]/70 via-[#170820]/90 to-[#3A0353]/50 border border-[#F8D299]/30 p-6 sm:p-8 backdrop-blur-md shadow-[0_15px_40px_rgba(58,3,83,0.4)] group-hover:border-[#F8D299]/60 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#F8D299]/20 border border-[#F8D299]/50 text-[#F8D299] text-xs font-bold uppercase tracking-wider">
                    {currentLang === 'bn' ? 'বর্তমান অধ্যয়নরত স্তর' : 'Current Study Level'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#F8D299]/80 font-bn">
                    {currentLang === 'bn' ? 'কওমি মাদরাসা শিক্ষা ব্যবস্থা' : 'Qawmi Madrasa Curriculum'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#F8D299] transition-colors">
                  {item.title[currentLang]}
                </h3>

                <div className="mt-2 text-lg sm:text-xl font-bold text-[#F8D299] flex items-center gap-2 font-bn">
                  <Sparkles className="w-4 h-4 text-[#F59E51]" />
                  <span>{item.level[currentLang]}</span>
                </div>

                <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                  {item.description[currentLang]}
                </p>

                {/* Islamic Scholarship & Discipline Highlights (Staggered Reveals) */}
                <div className="mt-6 pt-6 border-t border-[#804A8A]/35">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/70 mb-3">
                    {currentLang === 'bn' ? 'প্রধান পাঠ্য ও চর্চার ক্ষেত্রসমূহ' : 'Curriculum & Academic Inquiries'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.disciplines.map((d, i) => (
                      <AnimateOnScroll key={i} direction="up" delay={0.1 * (i + 1)} duration={0.5}>
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#170820]/60 border border-[#804A8A]/30 text-xs sm:text-sm text-white/90 font-medium h-full">
                          <BookOpen className="w-4 h-4 text-[#F8D299] flex-shrink-0" />
                          <span className="font-bn">{d[currentLang]}</span>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Timeline Node 2: Interconnection with Digital Learning (Animates from Right) */}
          <div className="relative group">
            {/* Second Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#170820] border-2 border-[#804A8A] flex items-center justify-center shadow-[0_0_15px_rgba(128,74,138,0.4)] group-hover:scale-110 transition-transform z-20">
              <Compass className="w-5 h-5 text-[#F8D299]" />
            </div>

            <AnimateOnScroll direction="left" duration={0.75} distance={45}>
              <div className="rounded-3xl bg-[#170820]/80 border border-[#804A8A]/35 p-6 sm:p-7 backdrop-blur-md shadow-lg group-hover:border-[#F8D299]/40 transition-all">
                <span className="px-3 py-1 rounded-full bg-[#804A8A]/20 border border-[#804A8A]/40 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  {currentLang === 'bn' ? 'স্বশিক্ষিত উদ্যোগ ও প্রযুক্তি' : 'Self-Driven Inquiry & Digital Tech'}
                </span>

                <h4 className="text-xl sm:text-2xl font-bold text-white mt-3 font-bn">
                  {currentLang === 'bn'
                    ? 'লেখালেখি ও ডিজিটাল যোগাযোগে আত্মনিয়োগ'
                    : 'Independent Study in Writing & Digital Communication'}
                </h4>

                <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed font-normal">
                  {currentLang === 'bn'
                    ? 'মাদরাসা শিক্ষার পাশাপাশি সমকালীন সমাজ ও যোগাযোগ ব্যবস্থার চাহিদা মেটাতে নিজের আগ্রহে লেখালেখি, ডিজিটাল কনটেন্ট তৈরি ও সাংবাদিকতার প্রাথমিক কলাকৌশল চর্চা করছি।'
                    : 'Complementing traditional madrasa disciplines with independent study in modern writing, digital media production, and constructive social communication.'}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
