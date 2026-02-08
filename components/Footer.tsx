
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-10 border-t-2 border-white text-center">
      <h2 className="text-5xl md:text-9xl font-archivo font-black tracking-tighter mb-8 text-[#FFD700]">PIXELVERSE</h2>
      <div className="flex justify-center gap-8 mb-8">
        <div className="w-12 h-12 bg-white flex items-center justify-center hover:bg-[#FFD700] transition-colors cursor-pointer border-2 border-transparent hover:border-white rounded-full">
          <span className="text-xs font-bold font-archivo text-black">IG</span>
        </div>
        <div className="w-12 h-12 bg-white flex items-center justify-center hover:bg-[#FFD700] transition-colors cursor-pointer border-2 border-transparent hover:border-white rounded-full">
          <span className="text-xs font-bold font-archivo text-black">LI</span>
        </div>
        <div className="w-12 h-12 bg-white flex items-center justify-center hover:bg-[#FFD700] transition-colors cursor-pointer border-2 border-transparent hover:border-white rounded-full">
          <span className="text-xs font-bold font-archivo text-black">TW</span>
        </div>
      </div>
      <p className="text-zinc-500 font-archivo font-bold text-xs uppercase tracking-widest">
        © 2025 PIXELVERSE. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
