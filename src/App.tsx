/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { FeaturedNews } from './components/FeaturedNews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('bn');
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  useEffect(() => {
    // Dynamic document title update according to language
    if (currentLang === 'bn') {
      document.title = 'আব্দুল কাইয়ুম | Abdul Kaiyum — ব্যক্তিগত পোর্টফোলিও';
    } else {
      document.title = 'Abdul Kaiyum | আব্দুল কাইয়ুম — Personal Portfolio';
    }
  }, [currentLang]);

  useEffect(() => {
    // Active section scroll spy
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navOffset = 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop - navOffset;
          if (scrollY >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#170820] text-white selection:bg-[#F8D299]/30 selection:text-[#F8D299]">
      {/* Dynamic Ambient Background with Purple & Gold Radiant Orbs */}
      <AmbientBackground />

      {/* Sticky Header with Brand, Navigation & Language Switch */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col space-y-4">
        {/* Hero Section with Primary Profile (Profile 1) and dual-rotating rings */}
        <Hero currentLang={currentLang} />

        {/* About Section with Secondary Profile (Profile 2), rotating rings, and bio */}
        <About currentLang={currentLang} />

        {/* Education Section with vertical glowing timeline and Hedayah studies */}
        <Education currentLang={currentLang} />

        {/* Skills & Interests Grid */}
        <Skills currentLang={currentLang} />

        {/* Projects Section */}
        <Projects currentLang={currentLang} />

        {/* bartaGraphy News Dedicated Featured Spotlight */}
        <FeaturedNews currentLang={currentLang} />

        {/* Contact Section with Official Social Links & Direct Draft Helper */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer with Dynamic Year, Links & Back to Top */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
