import React from 'react';
import InteractiveGlobe from './InteractiveGlobe';

export default function InteractiveGlobeSection() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm text-cyan-300/80 tracking-widest uppercase mb-3">Interactive</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Explore Earth in 3D</h2>
          <p className="mt-4 text-zinc-300">Drag to rotate. Scroll to zoom. A lightweight, interactive globe to visualize our world.</p>
        </div>

        <div className="mt-10">
          <InteractiveGlobe />
        </div>

        <div className="mt-6 text-xs text-zinc-400">
          Texture credit: NASA Visible Earth. This visualization simulates a 3D sphere with lighting and atmospheric glow.
        </div>
      </div>
    </div>
  );
}
