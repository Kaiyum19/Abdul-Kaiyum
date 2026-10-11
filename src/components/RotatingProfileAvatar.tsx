import React, { useState } from 'react';

export type ProfileAnimationStyle = 'celestial' | 'chronometer' | 'compact';

interface RotatingProfileAvatarProps {
  imageUrl: string;
  alt: string;
  animationStyle?: ProfileAnimationStyle;
  variant?: 'hero' | 'about' | 'compact';
  className?: string;
}

export const RotatingProfileAvatar: React.FC<RotatingProfileAvatarProps> = ({
  imageUrl,
  alt,
  animationStyle = 'celestial',
  variant = 'hero',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sizing definitions
  const sizeClasses = {
    hero: 'w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]',
    about: 'w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-96 lg:h-96',
    compact: 'w-48 h-48 sm:w-56 sm:h-56',
  }[variant];

  const imageSizeClasses = {
    hero: 'w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-84 lg:h-84',
    about: 'w-48 h-48 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76',
    compact: 'w-36 h-36 sm:w-44 sm:h-44',
  }[variant];

  const isChronometer = animationStyle === 'chronometer';

  return (
    <div
      className={`relative flex items-center justify-center select-none ${sizeClasses} ${className} ${
        isChronometer ? 'animate-sway-gentle' : 'animate-float-slow'
      }`}
    >
      {/* ========================================================================= */}
      {/* STYLE 1: ELEGANT & NATURAL GOLDEN AURA (Primary Hero Profile)             */}
      {/* Clean, harmonious, beautifully balanced and natural motion               */}
      {/* ========================================================================= */}
      {!isChronometer && (
        <>
          {/* 1. Soft Ambient Glowing Aura (Breathes gently in background) */}
          <div
            className="absolute inset-4 rounded-full pointer-events-none animate-breathe-glow"
            style={{
              background:
                'radial-gradient(circle, rgba(248, 210, 153, 0.22) 0%, rgba(128, 74, 138, 0.45) 45%, rgba(58, 3, 83, 0.35) 75%, transparent 100%)',
              filter: 'blur(32px)',
            }}
          />

          {/* 2. Outer Smooth Continuous Ring (Clockwise 26s) */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ animation: 'spinClockwise 26s linear infinite' }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Clean Outer Gradient Track */}
              <circle
                cx="200"
                cy="200"
                r="192"
                stroke="url(#naturalGoldGrad1)"
                strokeWidth="1.8"
                strokeDasharray="60 16 12 16"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* 2 Delicate Golden Pearl Nodes (North & South) */}
              <circle cx="200" cy="8" r="5" fill="#F8D299" filter="url(#glowNatural)" />
              <circle cx="200" cy="8" r="2" fill="#FFFFFF" />

              <circle cx="200" cy="392" r="4.5" fill="#F59E51" filter="url(#glowNatural)" />
              <circle cx="200" cy="392" r="1.8" fill="#FFFFFF" />

              <defs>
                <linearGradient id="naturalGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8D299" />
                  <stop offset="35%" stopColor="#804A8A" />
                  <stop offset="70%" stopColor="#3A0353" />
                  <stop offset="100%" stopColor="#F59E51" />
                </linearGradient>
                <filter id="glowNatural" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          {/* 3. Middle Refined Segmented Ring (Counter-Clockwise 30s) */}
          <div
            className="absolute inset-4 sm:inset-5 rounded-full pointer-events-none"
            style={{ animation: 'spinCounterClockwise 30s linear infinite' }}
          >
            <svg
              viewBox="0 0 360 360"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Thin Delicate Dashed Circle */}
              <circle
                cx="180"
                cy="180"
                r="170"
                stroke="#F8D299"
                strokeWidth="1.3"
                strokeDasharray="18 14 4 14"
                strokeLinecap="round"
                opacity="0.65"
              />

              {/* 2 Subtle Accent Dots (East & West) */}
              <circle cx="350" cy="180" r="3.5" fill="#F8D299" opacity="0.9" />
              <circle cx="10" cy="180" r="3.5" fill="#804A8A" opacity="0.8" />
            </svg>
          </div>

          {/* 4. Inner Subtle Golden Halo (Clockwise 18s) */}
          <div
            className="absolute inset-8 sm:inset-9 rounded-full pointer-events-none"
            style={{ animation: 'spinClockwise 18s linear infinite' }}
          >
            <div className="w-full h-full rounded-full border border-dashed border-[#F8D299]/45 relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F8D299] shadow-[0_0_10px_#F8D299]" />
            </div>
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* STYLE 2: CROWN CHRONOMETER & PRISMATIC VORTEX (Profile 2)      */}
      {/* ============================================================== */}
      {isChronometer && (
        <>
          {/* Conic Light Spotlight / Sweep behind frame */}
          <div
            className="absolute inset-2 rounded-full pointer-events-none opacity-40 animate-pulse-subtle"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(248, 210, 153, 0.45), rgba(128, 74, 138, 0.3), rgba(245, 158, 81, 0.4), rgba(58, 3, 83, 0.6), rgba(248, 210, 153, 0.45))',
              filter: 'blur(22px)',
            }}
          />

          {/* Pulsing Expanding Ripple Wave */}
          <div className="absolute inset-0 rounded-full border border-[#F8D299]/35 pointer-events-none animate-ripple-pulse" />
          <div className="absolute inset-3 rounded-full border border-[#804A8A]/40 pointer-events-none animate-pulse-subtle" />

          {/* Ring 1: Luxury Notched Chronometer Track (Counter-Clockwise 28s) */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ animation: 'spinCounterClockwise 28s linear infinite' }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Precision Ticks Bezel */}
              <circle
                cx="200"
                cy="200"
                r="192"
                stroke="#F8D299"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity="0.8"
              />
              <circle
                cx="200"
                cy="200"
                r="184"
                stroke="#804A8A"
                strokeWidth="1.2"
                strokeDasharray="1 5"
                opacity="0.6"
              />

              {/* 4 Brilliant Diamond Facet Markers at Cardinal Axes */}
              <g transform="translate(200, 8)">
                <polygon points="0,-6 6,0 0,6 -6,0" fill="#F8D299" filter="url(#glowFilter2)" />
                <polygon points="0,-3 3,0 0,3 -3,0" fill="#FFFFFF" />
              </g>
              <g transform="translate(200, 392)">
                <polygon points="0,-6 6,0 0,6 -6,0" fill="#F59E51" filter="url(#glowFilter2)" />
                <polygon points="0,-3 3,0 0,3 -3,0" fill="#FFFFFF" />
              </g>
              <g transform="translate(8, 200)">
                <polygon points="0,-6 6,0 0,6 -6,0" fill="#804A8A" filter="url(#glowFilter2)" />
                <polygon points="0,-3 3,0 0,3 -3,0" fill="#F8D299" />
              </g>
              <g transform="translate(392, 200)">
                <polygon points="0,-6 6,0 0,6 -6,0" fill="#F8D299" filter="url(#glowFilter2)" />
                <polygon points="0,-3 3,0 0,3 -3,0" fill="#FFFFFF" />
              </g>

              {/* 4 Diagonal Diamond Accents */}
              <polygon points="65,65 69,65 65,69 61,65" fill="#F8D299" opacity="0.9" />
              <polygon points="335,335 339,335 335,339 331,335" fill="#F8D299" opacity="0.9" />
              <polygon points="335,65 339,65 335,69 331,65" fill="#F59E51" opacity="0.9" />
              <polygon points="65,335 69,335 65,339 61,335" fill="#804A8A" opacity="0.9" />

              <defs>
                <filter id="glowFilter2" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Ring 2: Interlocking Geometric Octagonal Arc Track (Clockwise 21s) */}
          <div
            className="absolute inset-4 sm:inset-5 rounded-full pointer-events-none"
            style={{ animation: 'spinClockwise 21s linear infinite' }}
          >
            <svg
              viewBox="0 0 360 360"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Segmented Golden Arcs */}
              <circle
                cx="180"
                cy="180"
                r="168"
                stroke="url(#chronometerGrad)"
                strokeWidth="2.5"
                strokeDasharray="45 15 15 15"
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle
                cx="180"
                cy="180"
                r="158"
                stroke="#F8D299"
                strokeWidth="1"
                strokeDasharray="10 10"
                opacity="0.5"
              />

              {/* Glowing Prismatic Gemstones */}
              <circle cx="180" cy="12" r="4.5" fill="#F8D299" filter="url(#glowFilter2)" />
              <circle cx="348" cy="180" r="4" fill="#F59E51" />
              <circle cx="70" cy="290" r="3.5" fill="#F8D299" />

              <defs>
                <linearGradient id="chronometerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E51" />
                  <stop offset="50%" stopColor="#F8D299" />
                  <stop offset="100%" stopColor="#804A8A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ring 3: High-Frequency Counter Laser Halo (Counter-Clockwise 13s) */}
          <div
            className="absolute inset-8 sm:inset-9 rounded-full pointer-events-none"
            style={{ animation: 'spinCounterClockwise 13s linear infinite' }}
          >
            <div className="w-full h-full rounded-full border-2 border-dotted border-[#F8D299]/60 relative">
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F8D299] shadow-[0_0_12px_#F8D299]" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F59E51] shadow-[0_0_10px_#F59E51]" />
            </div>
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* STATIONARY STABLE PORTRAIT CONTAINER (Never spins face!)        */}
      {/* ============================================================== */}
      <div
        className={`relative z-10 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 ${imageSizeClasses} p-1.5 ${
          isChronometer
            ? 'bg-gradient-to-tr from-[#804A8A] via-[#F8D299] to-[#F59E51]'
            : 'bg-gradient-to-tr from-[#3A0353] via-[#804A8A] to-[#F8D299]'
        }`}
        style={{
          boxShadow: isChronometer
            ? '0 0 40px -5px rgba(245, 158, 81, 0.4), 0 0 55px 0px rgba(128, 74, 138, 0.65)'
            : '0 0 35px -5px rgba(248, 210, 153, 0.35), 0 0 50px 0px rgba(58, 3, 83, 0.7)',
        }}
      >
        {/* Inner Border Matting */}
        <div className="w-full h-full rounded-full overflow-hidden bg-[#170820] relative flex items-center justify-center">
          {/* Loading Skeleton */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#170820] via-[#3A0353]/50 to-[#170820] animate-pulse" />
          )}

          {/* Graceful Fallback if error */}
          {hasError ? (
            <div className="flex flex-col items-center justify-center p-6 text-center text-[#F8D299] h-full">
              <div className="w-16 h-16 rounded-full bg-[#3A0353] flex items-center justify-center text-2xl font-bold border border-[#F8D299]/50 mb-2">
                AK
              </div>
              <p className="text-sm font-bn font-semibold">আব্দুল কাইয়ুম</p>
              <p className="text-xs text-white/70">Abdul Kaiyum</p>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={alt}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full object-cover object-top select-none pointer-events-none transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={variant === 'hero' ? 'eager' : 'lazy'}
              style={{
                aspectRatio: '1/1',
              }}
            />
          )}

          {/* Gentle Inner Vignette Overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, transparent 65%, rgba(23, 8, 32, 0.4) 100%)',
            }}
          />
        </div>
      </div>

      {/* Floating Accent Sparkles */}
      <div
        className={`absolute w-3 h-3 rounded-full blur-[1px] pointer-events-none animate-pulse ${
          isChronometer
            ? '-top-2 right-2 bg-[#F59E51] shadow-[0_0_12px_#F59E51]'
            : '-top-1 -right-1 sm:top-2 sm:right-2 bg-[#F8D299] shadow-[0_0_12px_#F8D299]'
        }`}
      />
      <div
        className={`absolute w-2.5 h-2.5 rounded-full blur-[1px] pointer-events-none ${
          isChronometer
            ? '-bottom-2 right-6 bg-[#F8D299] shadow-[0_0_10px_#F8D299]'
            : '-bottom-2 -left-2 sm:bottom-4 sm:left-4 bg-[#F59E51] shadow-[0_0_10px_#F59E51]'
        }`}
      />
    </div>
  );
};
