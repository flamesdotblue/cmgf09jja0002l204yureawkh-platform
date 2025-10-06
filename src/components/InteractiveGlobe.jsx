import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveGlobe() {
  const textureUrl = 'https://unpkg.com/three-globe/example/img/earth-dark.jpg';
  const wrapperRef = useRef(null);
  const globeRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [offset, setOffset] = useState(0); // 0..100 background-position-x percent
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handlePointerUp = () => setIsDragging(false);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  const onPointerDown = (e) => {
    if (!globeRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setStartOffset(offset);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX; // pixels
    // Convert dx to percent of background movement. The globe background is 200% width; use ~600px baseline per 100% for responsiveness
    const base = Math.max(300, Math.min(900, wrapperRef.current?.offsetWidth || 600));
    const deltaPercent = (dx / base) * 100;
    let next = (startOffset + deltaPercent) % 100;
    if (next < 0) next += 100;
    setOffset(next);
  };

  const onWheel = (e) => {
    e.preventDefault();
    const dir = e.deltaY > 0 ? -1 : 1;
    const next = Math.max(0.8, Math.min(1.25, scale + dir * 0.04));
    setScale(next);
  };

  // Idle rotation when not dragging
  useEffect(() => {
    let rafId;
    let last = performance.now();
    const speed = 0.08; // percent per ms
    const tick = (now) => {
      const dt = now - last;
      last = now;
      if (!isDragging) {
        setOffset((o) => (o + dt * speed * 0.01) % 100);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isDragging]);

  return (
    <div ref={wrapperRef} className="relative w-full flex items-center justify-center select-none" onWheel={onWheel}>
      <style>{`
        .globe-shadow { box-shadow: 0 40px 140px rgba(0,0,0,0.6); }
      `}</style>

      <div
        ref={globeRef}
        role="img"
        aria-label="Interactive globe of Earth. Drag to rotate; scroll to zoom."
        className="relative aspect-square w-[min(90vw,720px)] max-w-full"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Globe surface */}
        <div
          className={`absolute inset-0 rounded-full globe-shadow ${isDragging ? '' : ''}`}
          style={{
            transform: `scale(${scale})`,
            backgroundImage: `url(${textureUrl})`,
            backgroundSize: '200% 100%',
            backgroundRepeat: 'repeat-x',
            backgroundPositionX: `${offset}%`,
            filter: 'saturate(1.1) contrast(1.05)',
            transition: isDragging ? 'none' : 'transform 200ms ease-out',
          }}
        />

        {/* Specular highlight and limb shading */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(120% 100% at 30% 30%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.10) 25%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.78) 100%)',
            mixBlendMode: 'soft-light',
            pointerEvents: 'none',
          }}
        />

        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.20), rgba(0,0,0,0) 60%)',
            filter: 'blur(22px)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle starfield vignette */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(2,6,23,0.5), transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
