
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-10 border-t-4 border-pink-theme/30 text-center">
      <h2 className="text-3xl font-archivo tracking-tighter mb-8">PIXELVERSE</h2>
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
    </footer>
  );
};

export default Footer;
