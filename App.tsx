
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Quests from './components/Quests';
import Timeline from './components/Timeline';
import PrizePool from './components/PrizePool';
import RulesAndFaq from './components/RulesAndFaq';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BootLoader = () => (
  <motion.div 
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-10 font-pixel overflow-hidden"
  >
    <div className="w-full max-w-lg space-y-2">
      {[
        "INITIATING PIXELVERSE_OS...",
        "MOUNTING DRIVE /DEV/DESIGN...",
        "ESTABLISHING SECURE_TUNNEL_01...",
        "SYNCING MAIN_FRAME_CHRONO...",
        "LOADING_ASSETS.EXE (88%)...",
        "SYSTEMS_STABLE. READY_TO_RUN."
      ].map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3 }}
          className="text-cyan-400 text-[10px] md:text-xs"
        >
           {text}
        </motion.div>
      ))}
      <motion.div 
        animate={{ opacity: [0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="w-2 h-4 bg-cyan-400 inline-block"
      />
    </div>
  </motion.div>
);

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  return (
    <motion.div 
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      className="custom-cursor hidden md:block"
    />
  );
};

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#050008] min-h-screen">
      <CustomCursor />
      <AnimatePresence>
        {isBooting && <BootLoader key="loader" />}
      </AnimatePresence>
      
      {!isBooting && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Quests />
            <Timeline />
            <PrizePool />
            <Sponsors />
            <RulesAndFaq />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;
