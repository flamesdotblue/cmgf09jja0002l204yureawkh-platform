import React from 'react';
import { motion } from 'framer-motion';
import RotatingGlobe from './RotatingGlobe';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <RotatingGlobe />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm text-cyan-300/80 tracking-widest uppercase mb-4">Sol III — The Blue Marble</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white">
              Earth
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Our Home in the Cosmos</span>
            </h1>
            <p className="mt-6 text-zinc-300 max-w-xl">
              A unique, living world where oceans, atmosphere, and life intertwine. Explore our planet's story, its vital statistics, and our journey to understand and protect it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                Learn about Earth
              </a>
              <a href="#stats" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors text-white">
                View stats
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
