import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Age', value: '4.54 billion years' },
  { label: 'Mean radius', value: '6,371 km' },
  { label: 'Equatorial diameter', value: '12,756 km' },
  { label: 'Mass', value: '5.972 × 10^24 kg' },
  { label: 'Surface gravity', value: '9.807 m/s²' },
  { label: 'Average distance from Sun', value: '149.6 million km' },
  { label: 'Orbital period (year)', value: '365.25 days' },
  { label: 'Rotation (day)', value: '23 h 56 m' },
  { label: 'Moons', value: '1 (the Moon)' },
  { label: 'Surface area', value: '510.1 million km²' },
  { label: 'Ocean coverage', value: '≈71%' },
  { label: 'Atmosphere', value: '78% N₂, 21% O₂, 1% other' },
];

export default function StatsSection() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <p className="text-sm text-cyan-300/80 tracking-widest uppercase mb-3">Key stats</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Numbers that define Earth</h2>
          <p className="mt-4 text-zinc-300">A snapshot of fundamental physical properties and orbital parameters.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
              <div className="text-2xl font-semibold text-white">{s.value}</div>
              <div className="mt-2 text-sm text-zinc-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
