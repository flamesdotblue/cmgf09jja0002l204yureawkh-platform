import React from 'react';
import { Globe, Star, Rocket, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Globe,
    title: 'Dynamic Systems',
    desc: 'Earth\'s geosphere, hydrosphere, atmosphere, and biosphere interact to regulate climate and support life.',
  },
  {
    icon: Star,
    title: 'Goldilocks Zone',
    desc: 'Positioned in the Sun\'s habitable zone, Earth maintains liquid water and a stable temperature range.',
  },
  {
    icon: Rocket,
    title: 'Exploration',
    desc: 'From early satellites to deep-space observatories, we study Earth to understand change across scales.',
  },
  {
    icon: Compass,
    title: 'Magnetic Shield',
    desc: 'A molten iron core generates a magnetosphere that helps shield the surface from solar and cosmic radiation.',
  },
];

export default function AboutSection() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-cyan-300/80 tracking-widest uppercase mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">A living, breathing planet</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Earth formed about 4.54 billion years ago. Its surface is 71% ocean, wrapped by a thin atmosphere rich in nitrogen and oxygen. Driven by plate tectonics and powered by the Sun, Earth\'s cycles move water, carbon, and energy through interlinked systems that sustain life and sculpt landscapes.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              The planet\'s unique chemistry, magnetic field, and distance from the Sun create conditions for complexity. Understanding these systems is key to predicting future change and protecting the only world we call home.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
