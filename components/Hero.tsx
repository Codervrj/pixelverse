
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Terminal, ChevronDown, Sparkles } from 'lucide-react';


const EVENT_DATE = new Date("2026-02-22T09:00:00");

const SunburstBackground = ({ scrollY }: { scrollY: any }) => {
  const rotate = useTransform(scrollY, [0, 1000], [0, 90]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sunburst Pattern */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] opacity-10"
      >
        <div
          className="w-full h-full"
          style={{
            background: `repeating-conic-gradient(
              from 0deg,
              #FFD700 0deg 10deg,
              transparent 10deg 20deg
            )`
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5DC]/0 via-[#F5F5DC]/50 to-[#F5F5DC]" />
    </div>
  );
};

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = EVENT_DATE.getTime();
    const diff = target - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 cursor-default select-none">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="group relative flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
            <span className="font-archivo text-3xl sm:text-4xl md:text-5xl text-black font-bold tabular-nums">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs font-bold font-archivo text-black uppercase tracking-widest">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};


const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-48 overflow-hidden bg-[#F5F5DC] text-black">

      <SunburstBackground scrollY={scrollY} />

      {/* --- Main Content --- */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto"
      >
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Sparkles size={16} className="text-black fill-[#FFD700]" />
          <span className="text-xs font-bold font-archivo text-black tracking-[0.2em] uppercase">
            Design_Connect_2025
          </span>
        </motion.div>

        {/* Big Title */}
        <div className="mb-6 relative">
          <h1 className="text-[12vw] sm:text-[100px] md:text-[130px] font-archivo font-black tracking-tighter leading-[0.85] text-black drop-shadow-sm">
            PIXELVERSE
          </h1>
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -6 }}
            style={{ y: y2 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -top-10 -right-4 md:right-10 bg-[#FFD700] text-black font-archivo text-xl md:text-3xl px-4 py-2 rotate-[-6deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            DESIGNATHON
          </motion.div>
        </div>

        {/* Subtitle */}
        <div className="mb-10 flex flex-col items-center justify-center gap-2">
          <p className="text-lg md:text-2xl font-bold text-black/80 max-w-2xl font-archivo uppercase">
            Where Logic Meets Aesthetic.
          </p>
          <p className="text-sm md:text-base text-black font-medium tracking-wide border-b-2 border-[#FFD700]">
            The UI/UX & Frontend Hackathon
          </p>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-14"
        >
          <Countdown />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-40"
        >
          <button className="relative px-10 py-5 bg-black text-white font-archivo font-bold text-xl uppercase tracking-tight border-2 border-black shadow-[8px_8px_0px_0px_rgba(255,215,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <span className="flex items-center gap-2">
              Join the Quest <Zap size={20} className="fill-[#FFD700] text-[#FFD700]" />
            </span>
          </button>

          <button className="relative px-10 py-5 bg-white text-black font-archivo font-bold text-xl uppercase tracking-tight border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <span className="flex items-center gap-2">
              Problem Statements <Terminal size={20} />
            </span>
          </button>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-black animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </motion.div>

    </section>
  );
};

export default Hero;

