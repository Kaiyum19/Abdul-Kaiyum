import React, { useState } from 'react';

interface RotatingProfileAvatarProps {
  imageUrl: string;
  alt: string;
  variant?: 'hero' | 'about' | 'compact';
  timingOffset?: boolean;
  className?: string;
}

export const RotatingProfileAvatar: React.FC<RotatingProfileAvatarProps> = ({
  imageUrl,
  alt,
  variant = 'hero',
  timingOffset = false,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine sizing based on variant
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

  // Independent animation timing styles
  const outerSpinStyle: React.CSSProperties = {
    animation: timingOffset
      ? 'spinCounterClockwise 34s linear infinite'
      : 'spinClockwise 26s linear infinite',
  };

  const midSpinStyle: React.CSSProperties = {
    animation: timingOffset
      ? 'spinClockwise 24s linear infinite'
      : 'spinCounterClockwise 30s linear infinite',
  };

  const innerSpinStyle: React.CSSProperties = {
    animation: timingOffset
      ? 'spinCounterClockwise 18s linear infinite'
      : 'spinClockwise 20s linear infinite',
  };

  const floatStyle: React.CSSProperties = {
    animation: timingOffset
      ? 'floatAlt 7.5s ease-in-out infinite'
      : 'floatGentle 6.5s ease-in-out infinite',
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${sizeClasses} ${className}`}
      style={floatStyle}
    >
      {/* 1. Deep Ambient Radiant Glow behind everything */}
      <div
        className={`absolute inset-4 rounded-full pointer-events-none transition-opacity duration-1000 ${
          timingOffset ? 'animate-pulse-subtle' : 'animate-breathe-glow'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(128, 74, 138, 0.45) 0%, rgba(58, 3, 83, 0.4) 45%, rgba(248, 210, 153, 0.15) 75%, transparent 100%)',
          filter: 'blur(28px)',
        }}
      />

      {/* 2. Outer Decorative Rotating Ring (Ring 1) */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={outerSpinStyle}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Track */}
          <circle
            cx="200"
            cy="200"
            r="192"
            stroke="url(#purpleGoldGrad1)"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            opacity="0.8"
          />

          {/* Golden Orbiting Nodes on outer ring */}
          <circle cx="200" cy="8" r="5" fill="#F8D299" filter="url(#glowFilter)" />
          <circle cx="200" cy="392" r="4" fill="#F59E51" filter="url(#glowFilter)" />
          <circle cx="8" cy="200" r="3.5" fill="#804A8A" />
          <circle cx="392" cy="200" r="4.5" fill="#F8D299" filter="url(#glowFilter)" />

          {/* Additional decorative starburst accents */}
          <circle cx="64" cy="64" r="2.5" fill="#F8D299" opacity="0.9" />
          <circle cx="336" cy="336" r="2.5" fill="#F8D299" opacity="0.9" />
          <circle cx="336" cy="64" r="2" fill="#F59E51" opacity="0.8" />
          <circle cx="64" cy="336" r="2" fill="#804A8A" opacity="0.8" />

          <defs>
            <linearGradient id="purpleGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8D299" />
              <stop offset="35%" stopColor="#804A8A" />
              <stop offset="70%" stopColor="#3A0353" />
              <stop offset="100%" stopColor="#F59E51" />
            </linearGradient>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* 3. Middle Decorative Counter-Rotating Ring (Ring 2) */}
      <div
        className="absolute inset-4 sm:inset-5 rounded-full pointer-events-none"
        style={midSpinStyle}
      >
        <svg
          viewBox="0 0 360 360"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Segmented Golden arcs */}
          <circle
            cx="180"
            cy="180"
            r="170"
            stroke="#F8D299"
            strokeWidth="1.75"
            strokeDasharray="40 18 10 18"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Inner accent ring */}
          <circle
            cx="180"
            cy="180"
            r="162"
            stroke="#804A8A"
            strokeWidth="1"
            strokeDasharray="2 12"
            opacity="0.5"
          />

          {/* Golden accent orbs */}
          <circle cx="180" cy="10" r="3.5" fill="#F8D299" />
          <circle cx="350" cy="180" r="3" fill="#F59E51" />
          <circle cx="60" cy="300" r="3" fill="#F8D299" />
        </svg>
      </div>

      {/* 4. Inner Orbiting Ring (Ring 3) */}
      <div
        className="absolute inset-8 sm:inset-9 rounded-full pointer-events-none"
        style={innerSpinStyle}
      >
        <div className="w-full h-full rounded-full border border-dashed border-[#F8D299]/40 relative">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F8D299] shadow-[0_0_12px_#F8D299]" />
          <div className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-[#F59E51] shadow-[0_0_8px_#F59E51]" />
        </div>
      </div>

      {/* 5. Stationary Stable Portrait Container with Undistorted Face */}
      <div
        className={`relative z-10 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 ${imageSizeClasses} p-1.5 bg-gradient-to-tr from-[#3A0353] via-[#804A8A] to-[#F8D299]`}
        style={{
          boxShadow:
            '0 0 35px -5px rgba(248, 210, 153, 0.35), 0 0 50px 0px rgba(58, 3, 83, 0.7)',
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
                // Explicitly preserving aspect ratio and preventing distortion
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

      {/* 6. Orbiting Luminous Sparkles (Stationary floating accents) */}
      <div className="absolute -top-1 -right-1 sm:top-2 sm:right-2 w-3 h-3 bg-[#F8D299] rounded-full blur-[1px] shadow-[0_0_12px_#F8D299] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 w-2.5 h-2.5 bg-[#F59E51] rounded-full blur-[1px] shadow-[0_0_10px_#F59E51] pointer-events-none" />
    </div>
  );
};
