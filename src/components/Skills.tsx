import React from 'react';
import {
  PenTool,
  Radio,
  Video,
  Share2,
  Award,
  Laptop,
  Sparkles,
  Info,
} from 'lucide-react';
import { CONTENT } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll, AnimationDirection } from './AnimateOnScroll';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const content = CONTENT.skills;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#F8D299]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#F8D299]" />;
      case 'Video':
        return <Video className="w-6 h-6 text-[#F8D299]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#F8D299]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#F8D299]" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#F8D299]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F8D299]" />;
    }
  };

  // Varied directional entrance for each card
  const directions: AnimationDirection[] = ['right', 'zoom', 'left', 'right', 'zoom', 'left'];

  return (
    <section id="skills" className="relative py-20 md:py-28 z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A0353]/30 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A0353]/60 border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'দক্ষতা ও আগ্রহ' : 'Skills & Interests'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              <span className="gold-gradient-text">{content.sectionTitle[currentLang]}</span>
              <span className="block text-xl sm:text-2xl text-white/70 font-light mt-1">
                {currentLang === 'bn' ? 'Skills & Interests' : 'দক্ষতা ও আগ্রহ'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-normal">
              {content.subtitle[currentLang]}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8D299] to-transparent mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* Disclaimer / Sincerity Note */}
        <AnimateOnScroll direction="zoom" delay={0.15} duration={0.6}>
          <div className="max-w-xl mx-auto mb-12 p-3 px-4 rounded-full bg-[#3A0353]/30 border border-[#F8D299]/25 flex items-center justify-center gap-2 text-xs sm:text-sm text-center text-[#F8D299]/90">
            <Info className="w-4 h-4 text-[#F8D299] flex-shrink-0" />
            <span>{content.disclaimer[currentLang]}</span>
          </div>
        </AnimateOnScroll>

        {/* 6 Skills Responsive Grid with Multi-directional Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.items.map((skill, index) => (
            <AnimateOnScroll
              key={skill.id}
              direction={directions[index % directions.length]}
              delay={0.1 * (index % 3 + 1)}
              duration={0.65}
              className="h-full"
            >
              <div className="group relative rounded-3xl p-7 bg-gradient-to-b from-[#3A0353]/40 via-[#170820]/90 to-[#170820] border border-[#804A8A]/35 hover:border-[#F8D299]/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(248,210,153,0.15)] flex flex-col justify-between h-full">
                {/* Corner Ambient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8D299]/5 rounded-bl-full pointer-events-none group-hover:bg-[#F8D299]/15 transition-colors" />

                <div>
                  {/* Icon Container with glowing gold border */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3A0353] to-[#804A8A] border border-[#F8D299]/40 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(248,210,153,0.2)] group-hover:scale-105 group-hover:border-[#F8D299] transition-all">
                    {getIcon(skill.icon)}
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F8D299] transition-colors font-bn">
                    {skill.title[currentLang]}
                  </h3>

                  {/* Subtitle in other language */}
                  <p className="text-xs text-white/50 font-medium tracking-wide mt-0.5">
                    {currentLang === 'bn' ? skill.title.en : skill.title.bn}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed font-normal">
                    {skill.description[currentLang]}
                  </p>
                </div>

                {/* Tags / Sub-disciplines */}
                <div className="mt-6 pt-5 border-t border-[#804A8A]/30">
                  <div className="flex flex-wrap gap-2">
                    {skill.tags[currentLang].map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#3A0353]/70 border border-[#804A8A]/40 text-xs font-medium text-[#F8D299] font-bn"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
