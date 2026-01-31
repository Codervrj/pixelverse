import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Zap, Terminal, ChevronDown, PenTool } from 'lucide-react';

const VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-dots-and-pl-11663-large.mp4";

// --- Components ---

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    x.set(distance.x * 0.35);
    y.set(distance.y * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentText = "";
      let i = 0;
      const interval = setInterval(() => {
        currentText += text[i];
        setDisplayedText(currentText);
        i++;
        if (i === text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}<span className="animate-pulse">_</span></span>;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 cursor-default select-none">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="group relative flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-archivo text-3xl sm:text-4xl md:text-5xl text-white font-bold tabular-nums relative z-10">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-[10px] font-pixel text-zinc-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Opacity: Fade out quickly (0-200px) to avoid overlap with white section
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-48 overflow-hidden bg-[#0a0a0f] text-white">

      {/* --- Background --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div
          className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center z-0 opacity-80"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-black/80 z-10" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto"
      >
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
        >
          <PenTool size={12} className="text-purple-400" />
          <span className="text-xs font-mono text-purple-200 tracking-[0.2em] uppercase">
            Design_Connect_2025
          </span>
        </motion.div>

        {/* Big Title */}
        <div className="mb-6 relative">
          <h1 className="text-[12vw] sm:text-[100px] md:text-[130px] font-archivo font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 drop-shadow-2xl">
            PIXELVERSE
          </h1>
        </div>

        {/* Subtitle */}
        <div className="h-20 mb-10 flex flex-col items-center justify-center gap-2">
          <p className="text-lg md:text-2xl font-light text-zinc-300 max-w-2xl font-mono">
            <TypewriterText text="Where Logic Meets Aesthetic." delay={0.5} />
          </p>
          <p className="text-sm md:text-base text-purple-400 font-medium tracking-wide opacity-80">
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

        {/* Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-40"
        >
          <MagneticButton className="relative group px-10 py-5 bg-white text-black font-archivo font-bold text-xl uppercase tracking-tight overflow-hidden rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all">
            <span className="relative z-10 flex items-center gap-2">
              Join the Quest <Zap size={20} className="fill-black" />
            </span>
          </MagneticButton>

          <MagneticButton className="relative px-10 py-5 bg-black/40 backdrop-blur-md border border-zinc-700 text-white font-archivo font-bold text-xl uppercase tracking-tight hover:bg-white/10 hover:border-white transition-all rounded-full">
            <span className="flex items-center gap-2">
              View Problem Statements <Terminal size={20} />
            </span>
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-zinc-500 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>

    </section>
  );
};

export default Hero;
