import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { triggerHaptic } from '../hooks/useHaptic';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  isRoute?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks: NavLink[] = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'QUESTS', href: '#quests' },
    { name: 'TEAM', href: '/team', isRoute: true },
  ];

  const handleNavClick = (link: NavLink) => {
    setIsOpen(false);
    triggerHaptic('navigation');

    if (link.isRoute) {
      navigate(link.href);
    } else {
      // If we're not on the home page, navigate to home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const el = document.querySelector(link.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[105] lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-4 sm:top-5 sm:right-6 md:right-12 text-white z-[110]"
              onClick={() => { setIsOpen(false); triggerHaptic('toggle'); }}
            >
              <X size={28} strokeWidth={3} />
            </button>

            {navLinks.map((item, idx) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="text-white font-archivo text-3xl uppercase hover:text-[#FFD700] transition-colors bg-transparent border-none"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.button
              onClick={() => { setIsOpen(false); triggerHaptic('medium'); handleNavClick({ name: 'CONTACT', href: '#contact' }); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-4 px-10 py-4 bg-white text-black text-xl uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              REGISTER_NOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-sm border-b-2 border-white px-4 sm:px-6 md:px-12 py-3 sm:py-5 flex justify-between items-center transition-all">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="Pixelverse Logo" className="h-8 sm:h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 items-center text-sm font-bold font-archivo text-white uppercase tracking-tight">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="hover:text-[#FFD700] transition-colors relative group py-2 bg-transparent border-none text-sm font-bold font-archivo text-white uppercase tracking-tight"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => handleNavClick({ name: 'CONTACT', href: '#contact' })}
            className="ml-4 px-8 py-3 bg-white text-black font-archivo text-sm hover:bg-[#FFD700] hover:text-black transition-all uppercase tracking-tighter border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            REGISTER_NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-[110] relative"
          onClick={() => { setIsOpen(!isOpen); triggerHaptic('toggle'); }}
        >
          <Menu size={28} strokeWidth={3} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
