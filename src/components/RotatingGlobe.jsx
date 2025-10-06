import React from 'react';
import { motion } from 'framer-motion';

// A performant faux-3D rotating globe using an equirectangular texture
// Animated via background-position for smooth, continuous rotation
export default function RotatingGlobe() {
  const textureUrl = 'https://unpkg.com/three-globe/example/img/earth-dark.jpg';

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[110vmin] max-w-[900px] aspect-square">
        {/* Globe */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full shadow-2xl"
          style={{
            backgroundImage: `url(${textureUrl})`,
            backgroundSize: '200% 100%',
            backgroundRepeat: 'repeat-x',
            filter: 'saturate(1.2) contrast(1.05)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
          }}
          animate={{ backgroundPositionX: ['0%', '100%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        />

        {/* Shading overlay for spherical lighting */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.75) 100%)',
            mixBlendMode: 'soft-light',
          }}
        />

        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.18), rgba(0,0,0,0) 60%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Starfield subtle backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.4),transparent_60%)]" />
    </div>
  );
}
