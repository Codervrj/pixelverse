
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'QUESTS', href: '#quests' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#050008]/80 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center transition-all">
      <div className="flex items-center gap-4">
       <img src="../public/logo.png" alt="Pixelverse Logo" className=" h-10"/>
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-10 items-center text-[9px] font-pixel text-zinc-400 uppercase tracking-widest">
        {navLinks.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="hover:text-cyan-400 transition-colors relative group py-2"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
          </a>
        ))}
        <a 
          href="#contact" 
          className="ml-4 px-8 py-3 bg-white text-black font-archivo text-sm hover:bg-cyan-400 transition-colors uppercase tracking-tighter"
        >
          REGISTER_NOW
        </a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[73px] bg-[#050008] z-[90] lg:hidden flex flex-col p-10 gap-8"
          >
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-white  font-archivo text-4xl tracking-tighter uppercase"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-6 bg-cyan-400 text-black text-center font-archivo text-2xl uppercase tracking-tighter"
            >
              REGISTER_NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
