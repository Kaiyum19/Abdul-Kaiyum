import React from 'react';
import { ExternalLink, ArrowRight, FolderGit2, Globe, Palette } from 'lucide-react';
import { CONTENT } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface ProjectsProps {
  currentLang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const content = CONTENT.projects;

  const handleAction = (item: any) => {
    if (item.primaryBtn.url) {
      window.open(item.primaryBtn.url, '_blank', 'noopener,noreferrer');
    } else if (item.primaryBtn.scrollTarget) {
      const el = document.getElementById(item.primaryBtn.scrollTarget);
      if (el) {
        const offset = 80;
        const elPos = el.getBoundingClientRect().top;
        const offsetPos = elPos + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPos,
          behavior: 'smooth',
        });
      }
    }
  };

  const projectDirections = ['right', 'up', 'left'] as const;

  return (
    <section id="projects" className="relative py-20 md:py-28 z-10">
      {/* Background Section Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#3A0353]/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A0353]/60 border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'সৃজনশীল উদ্যোগ' : 'Creative Initiatives'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              <span className="gold-gradient-text">{content.sectionTitle[currentLang]}</span>
              <span className="block text-xl sm:text-2xl text-white/70 font-light mt-1">
                {currentLang === 'bn' ? 'Projects & Endeavors' : 'আমার প্রজেক্ট'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-normal">
              {content.subtitle[currentLang]}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8D299] to-transparent mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* Project Cards Grid with Directional Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.items.map((project, idx) => {
            const isBartaGraphy = project.id === 'bartagraphy';

            return (
              <AnimateOnScroll
                key={project.id}
                direction={projectDirections[idx % projectDirections.length]}
                delay={0.15 * (idx + 1)}
                duration={0.7}
                className="h-full"
              >
                <div
                  className={`group rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full ${
                    isBartaGraphy
                      ? 'bg-gradient-to-b from-[#3A0353]/80 via-[#170820]/95 to-[#3A0353]/60 border-2 border-[#F8D299]/50 shadow-[0_15px_45px_rgba(248,210,153,0.15)] hover:border-[#F8D299]'
                      : 'bg-[#170820]/85 border border-[#804A8A]/40 hover:border-[#F8D299]/60 shadow-[0_10px_35px_rgba(58,3,83,0.25)] hover:-translate-y-1'
                  }`}
                >
                  {/* Visual Header / Banner for project */}
                  <div>
                    {isBartaGraphy ? (
                      <div className="relative mb-6 rounded-2xl p-6 bg-gradient-to-br from-[#170820] to-[#3A0353] border border-[#F8D299]/30 flex flex-col items-center text-center overflow-hidden">
                        <div className="w-24 h-24 rounded-2xl p-2 bg-[#170820]/80 border-2 border-[#F8D299] shadow-[0_0_20px_rgba(248,210,153,0.3)] mb-3 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={project.logo}
                            alt="bartaGraphy News Official Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="px-3 py-0.5 rounded-full bg-[#F8D299]/20 text-[#F8D299] text-xs font-bold uppercase tracking-wider">
                          {currentLang === 'bn' ? 'অফিসিয়াল মিডিয়া ব্র্যান্ড' : 'Official Media Brand'}
                        </span>
                      </div>
                    ) : project.id === 'portfolio' ? (
                      <div className="relative mb-6 rounded-2xl p-6 bg-[#3A0353]/30 border border-[#804A8A]/30 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#3A0353] to-[#804A8A] border border-[#F8D299]/40 flex items-center justify-center mb-3 text-[#F8D299] group-hover:scale-105 transition-transform">
                          <Globe className="w-10 h-10" />
                        </div>
                        <span className="px-3 py-0.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                          {currentLang === 'bn' ? 'ওয়েব পোর্টফোলিও' : 'Web Presence'}
                        </span>
                      </div>
                    ) : (
                      <div className="relative mb-6 rounded-2xl p-6 bg-[#3A0353]/30 border border-[#804A8A]/30 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#804A8A] to-[#F59E51]/40 border border-[#F8D299]/40 flex items-center justify-center mb-3 text-[#F8D299] group-hover:scale-105 transition-transform">
                          <Palette className="w-10 h-10" />
                        </div>
                        <span className="px-3 py-0.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                          {currentLang === 'bn' ? 'ধারাবাহিক চর্চা' : 'Creative Practice'}
                        </span>
                      </div>
                    )}

                    {/* Category Pill */}
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F8D299] block mb-1">
                      {project.category[currentLang]}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#F8D299] transition-colors font-bn">
                      {project.title[currentLang]}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                      {project.description[currentLang]}
                    </p>
                  </div>

                  {/* Primary Button */}
                  <div className="mt-8 pt-6 border-t border-[#804A8A]/30">
                    <button
                      onClick={() => handleAction(project)}
                      className={`cursor-pointer w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                        isBartaGraphy
                          ? 'bg-gradient-to-r from-[#F8D299] via-[#F59E51] to-[#804A8A] text-[#170820] shadow-[0_0_20px_rgba(248,210,153,0.3)] hover:shadow-[0_0_30px_rgba(248,210,153,0.5)]'
                          : 'bg-[#3A0353]/80 hover:bg-[#804A8A]/60 text-white border border-[#F8D299]/40 hover:border-[#F8D299]'
                      }`}
                    >
                      <span className="font-bn">{project.primaryBtn[currentLang]}</span>
                      {project.primaryBtn.url ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
