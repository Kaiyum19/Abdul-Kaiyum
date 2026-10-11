import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Purple Top Ambient Orb */}
      <div
        className="absolute -top-[15%] left-[10%] w-[600px] h-[600px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #3A0353 0%, rgba(128, 74, 138, 0.4) 60%, transparent 100%)',
        }}
      />

      {/* Gold & Warm Orange Right Orb */}
      <div
        className="absolute top-[35%] -right-[10%] w-[550px] h-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #F59E51 0%, #804A8A 50%, transparent 80%)',
        }}
      />

      {/* Deep Mauve Bottom Left Orb */}
      <div
        className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #804A8A 0%, #3A0353 60%, transparent 100%)',
        }}
      />

      {/* Center Subtle Gold Light Beam */}
      <div
        className="absolute top-[60%] left-[30%] w-[450px] h-[450px] rounded-full opacity-15 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, #F8D299 0%, transparent 70%)',
        }}
      />

      {/* Subtle Star dust / Micro-particles (Pure CSS SVG pattern) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stardust" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="18" r="0.85" fill="#F8D299" opacity="0.6" />
            <circle cx="56" cy="42" r="1.1" fill="#FFFFFF" opacity="0.4" />
            <circle cx="70" cy="14" r="0.75" fill="#F59E51" opacity="0.7" />
            <circle cx="34" cy="68" r="0.9" fill="#804A8A" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stardust)" />
      </svg>
    </div>
  );
};
