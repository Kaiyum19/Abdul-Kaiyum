import React, { useState } from 'react';
import { ExternalLink, MessageCircle, Sparkles, Copy, Check, ShieldAlert } from 'lucide-react';
import { CONTENT, ASSETS } from '../data/content';
import { Language } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const content = CONTENT.contact;
  const [draftMessage, setDraftMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyDraft = () => {
    const fullText = `Message from: ${senderName || 'Visitor'}\n\n${draftMessage}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const openFacebookWithDraft = () => {
    window.open(ASSETS.facebookPersonal, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 z-10">
      {/* Background Section Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3A0353]/35 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3A0353]/60 border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'সরাসরি যোগাযোগ' : 'Get in Touch'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              <span className="gold-gradient-text">{content.sectionTitle[currentLang]}</span>
              <span className="block text-xl sm:text-2xl text-white/70 font-light mt-1">
                {currentLang === 'bn' ? 'Direct Communication' : 'যোগাযোগ ও নেটওয়ার্ক'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-normal max-w-2xl mx-auto">
              {content.intro[currentLang]}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F8D299] to-transparent mx-auto rounded-full" />
          </div>
        </AnimateOnScroll>

        {/* Two Prominent Official Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* 1. Personal Facebook Card (Animates from Left) */}
          <AnimateOnScroll direction="right" duration={0.75} distance={40} className="h-full">
            <div className="group rounded-3xl p-8 bg-gradient-to-br from-[#3A0353]/60 via-[#170820]/90 to-[#3A0353]/40 border-2 border-[#804A8A]/50 hover:border-[#F8D299] transition-all duration-300 shadow-[0_15px_40px_rgba(58,3,83,0.3)] hover:-translate-y-1.5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#170820] border-2 border-[#F8D299] p-1 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(248,210,153,0.3)]">
                    <img
                      src={ASSETS.profile1}
                      alt="Abdul Kaiyum"
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#3A0353] border border-[#F8D299]/30 text-[#F8D299] text-xs font-semibold">
                    {currentLang === 'bn' ? 'ব্যক্তিগত চ্যানেল' : 'Personal'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#F8D299] transition-colors font-bn">
                  {content.personalCard.title[currentLang]}
                </h3>

                <p className="text-sm font-semibold text-[#F8D299] mt-1 font-bn">
                  {content.personalCard.handle[currentLang]}
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed font-normal">
                  {content.personalCard.desc[currentLang]}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#804A8A]/35">
                <a
                  href={content.personalCard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F8D299] to-[#F59E51] text-[#170820] font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(248,210,153,0.3)] hover:shadow-[0_0_30px_rgba(248,210,153,0.5)] transition-all"
                >
                  <span className="font-bn">{content.personalCard.btnLabel[currentLang]}</span>
                  <ExternalLink className="w-4 h-4 text-[#170820]" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* 2. bartaGraphy News Facebook Card (Animates from Right) */}
          <AnimateOnScroll direction="left" duration={0.75} distance={40} className="h-full">
            <div className="group rounded-3xl p-8 bg-gradient-to-br from-[#3A0353]/70 via-[#170820]/90 to-[#804A8A]/40 border-2 border-[#F8D299]/40 hover:border-[#F8D299] transition-all duration-300 shadow-[0_15px_40px_rgba(58,3,83,0.4)] hover:-translate-y-1.5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#170820] border-2 border-[#F8D299] p-2 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(248,210,153,0.3)]">
                    <img
                      src={ASSETS.bartaGraphyLogo}
                      alt="bartaGraphy News Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#804A8A]/50 border border-[#F8D299]/40 text-[#F8D299] text-xs font-semibold">
                    {currentLang === 'bn' ? 'মিডিয়া প্রজেক্ট' : 'Media Outlet'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#F8D299] transition-colors font-bn">
                  {content.newsCard.title[currentLang]}
                </h3>

                <p className="text-sm font-semibold text-[#F8D299] mt-1 font-bn">
                  {content.newsCard.handle[currentLang]}
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed font-normal">
                  {content.newsCard.desc[currentLang]}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#804A8A]/35">
                <a
                  href={content.newsCard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#3A0353] hover:bg-[#804A8A] text-white border border-[#F8D299]/60 hover:border-[#F8D299] font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(128,74,138,0.4)]"
                >
                  <span className="font-bn">{content.newsCard.btnLabel[currentLang]}</span>
                  <ExternalLink className="w-4 h-4 text-[#F8D299]" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Interactive Direct Message Draft Composer (Animates from Bottom) */}
        <AnimateOnScroll direction="up" delay={0.2} duration={0.7} className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-[#170820]/90 border border-[#804A8A]/40 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2 text-[#F8D299] font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>
                {currentLang === 'bn'
                  ? 'ফেসবুকে বার্তা পাঠানোর দ্রুত সহায়ক'
                  : 'Direct Message Preparation Assistant'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 mb-5">
              {currentLang === 'bn'
                ? 'নিচে আপনার ভাবনা বা মেসেজটি লিখুন। এটি কপি করে সরাসরি আমার ফেসবুক প্রোফাইলে পাঠাতে পারেন।'
                : 'Draft your message below. You can easily copy it and send directly via my personal Facebook profile.'}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">
                  {currentLang === 'bn' ? 'আপনার নাম / পরিচয়' : 'Your Name / Identifier'}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={currentLang === 'bn' ? 'যেমন: মোহাম্মদ আব্দুল্লাহ' : 'e.g. John Doe'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#3A0353]/30 border border-[#804A8A]/40 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F8D299]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">
                  {currentLang === 'bn' ? 'আপনার বার্তা / মন্তব্য' : 'Your Message / Inquiry'}
                </label>
                <textarea
                  rows={3}
                  value={draftMessage}
                  onChange={(e) => setDraftMessage(e.target.value)}
                  placeholder={
                    currentLang === 'bn'
                      ? 'আপনার লেখা বা প্রজেক্ট সম্পর্কিত মতামত...'
                      : 'Write your message regarding content, writing, or feedback...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#3A0353]/30 border border-[#804A8A]/40 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F8D299] resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  disabled={!draftMessage.trim()}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    draftMessage.trim()
                      ? 'bg-[#3A0353] hover:bg-[#804A8A] border border-[#F8D299]/50 text-[#F8D299] cursor-pointer'
                      : 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>
                    {copied
                      ? (currentLang === 'bn' ? 'বার্তা কপি হয়েছে!' : 'Copied to Clipboard!')
                      : (currentLang === 'bn' ? 'বার্তা কপি করুন' : 'Copy Drafted Message')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={openFacebookWithDraft}
                  className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#804A8A] to-[#3A0353] border border-[#F8D299]/40 hover:border-[#F8D299] text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>{currentLang === 'bn' ? 'ফেসবুক ওপেন করুন' : 'Open Facebook to Send'}</span>
                  <ExternalLink className="w-4 h-4 text-[#F8D299]" />
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Verification and Integrity Note */}
        <AnimateOnScroll direction="up" delay={0.3} duration={0.6}>
          <div className="max-w-2xl mx-auto mt-8 p-3.5 px-4 rounded-xl bg-[#3A0353]/20 border border-[#F8D299]/20 flex items-center gap-3 text-xs text-white/65">
            <ShieldAlert className="w-4 h-4 text-[#F8D299] flex-shrink-0" />
            <span>{content.note[currentLang]}</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
