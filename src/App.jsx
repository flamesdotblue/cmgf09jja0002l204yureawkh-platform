import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ExplorationSection from './components/ExplorationSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-zinc-100 hover:text-white transition-colors">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500" />
            <span className="text-sm tracking-wider font-semibold uppercase">Earth</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#exploration" className="hover:text-white transition-colors">Exploration</a>
          </nav>
          <a href="#exploration" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs font-medium transition-colors">
            Explore
          </a>
        </div>
      </header>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="exploration">
          <ExplorationSection />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Earth — Our Pale Blue Dot</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#exploration" className="hover:text-white transition-colors">Exploration</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
