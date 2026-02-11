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
    <>
      {/* Mobile Menu Overlay - rendered outside nav to avoid clipping */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-full h-full bg-black z-[105] lg:hidden flex flex-col items-center justify-center gap-8"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#000000' }}
          >
            {/* Close button inside overlay */}
            <button
              className="absolute top-3 right-4 sm:top-5 sm:right-6 md:right-12 text-white z-[110]"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} strokeWidth={3} />
            </button>

            {navLinks.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="text-white font-archivo text-3xl sm:text-4xl tracking-tighter uppercase hover:text-[#FFD700] active:text-[#FFD700] transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-4 px-10 py-4 bg-white text-black text-center font-archivo text-xl sm:text-2xl uppercase tracking-tighter border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              REGISTER_NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-sm border-b-2 border-white px-4 sm:px-6 md:px-12 py-3 sm:py-5 flex justify-between items-center transition-all">
        <div className="flex items-center gap-4">
          <img src="../public/logo.png" alt="Pixelverse Logo" className="h-8 sm:h-10"/>
        </div>

        <div className="hidden lg:flex gap-10 items-center text-sm font-bold font-archivo text-white uppercase tracking-tight">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#FFD700] transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-8 py-3 bg-white text-black font-archivo text-sm hover:bg-[#FFD700] hover:text-black transition-all uppercase tracking-tighter border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            REGISTER_NOW
          </a>
        </div>

        <button
          className="lg:hidden text-white z-[110] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} strokeWidth={3} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;