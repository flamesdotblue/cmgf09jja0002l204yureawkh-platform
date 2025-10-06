import React from 'react';
import { Rocket, Globe, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: Rocket,
    title: 'Earth Observation',
    desc: 'A global fleet of satellites monitors weather, climate, oceans, and land use in near real time.',
    pill: 'Satellites',
  },
  {
    icon: Globe,
    title: 'Systems Modeling',
    desc: 'High-resolution models simulate atmosphere–ocean–land interactions to project future scenarios.',
    pill: 'Climate Models',
  },
  {
    icon: Compass,
    title: 'Field Science',
    desc: 'From ocean buoys to ice cores, measurements calibrate and validate what we see from space.',
    pill: 'Ground Truth',
  },
  {
    icon: Star,
    title: 'Stewardship',
    desc: 'Conserving biodiversity, reducing emissions, and adapting to change to safeguard habitability.',
    pill: 'Sustainability',
  },
];

export default function ExplorationSection() {
  return (
    <div className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm text-cyan-300/80 tracking-widest uppercase mb-3">Exploration</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Understanding and protecting our world</h2>
          <p className="mt-4 text-zinc-300">Science and technology help us observe Earth\'s systems, anticipate change, and act wisely.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((c, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                  <c.icon size={20} />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-200">{c.pill}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{c.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a href="#home" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100 transition-colors">
            Back to top
          </a>
          <a href="#stats" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors text-white">
            Planetary stats
          </a>
        </div>
      </div>
    </div>
  );
}
