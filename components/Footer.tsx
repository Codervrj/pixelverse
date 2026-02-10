import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <footer
      onMouseMove={handleMove}
      className="relative bg-black text-white py-16 px-6 md:px-10 border-t-4 border-pink-theme/30 text-center overflow-hidden"
    >

      {/* ===== CYAN CURSOR GLOW ===== */}
      <motion.div
        animate={{
          left: mouse.x,
          top: mouse.y
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
        className="absolute w-[450px] h-[450px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* ===== PINK TRAILING GLOW ===== */}
      <motion.div
        animate={{
          left: mouse.x,
          top: mouse.y
        }}
        transition={{ type: "spring", stiffness: 40, damping: 35 }}
        className="absolute w-[450px] h-[450px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,255,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">

        <h2 className="text-3xl font-archivo tracking-tighter mb-8">
          PIXELVERSE
        </h2>

        <div className="flex justify-center gap-8 mb-8">
          <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-pink-theme transition-colors cursor-pointer">
            <span className="text-[10px] font-pixel">IG</span>
          </div>

          <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-cyan-400 transition-colors cursor-pointer">
            <span className="text-[10px] font-pixel">LI</span>
          </div>

          <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center hover:bg-yellow-theme transition-colors cursor-pointer">
            <span className="text-[10px] font-pixel">TW</span>
          </div>
        </div>

        <p className="text-zinc-500 font-pixel text-[10px] uppercase tracking-widest">
          © 2025 PIXELVERSE. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
};

export default Footer;