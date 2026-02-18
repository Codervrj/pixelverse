import React, { useState, useEffect } from 'react';
import { triggerHaptic } from '../hooks/useHaptic';

const EVENT_DATE = new Date("2026-03-08T10:00:00"); //2026-03-08T09:00:00

// Simple icons as SVG components
const Zap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Terminal = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const ChevronDown = ({ size = 24, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Sparkles = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 animate-[gridMove_20s_linear_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFD700 1px, transparent 1px),
            linear-gradient(to bottom, #FFD700 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 border-4 border-[#FFD700] opacity-30 animate-[float1_15s_linear_infinite]" />

      <div className="absolute top-40 right-[15%] w-16 h-16 bg-black opacity-20 rounded-full animate-[float2_12s_linear_infinite]" />

      <div
        className="absolute bottom-32 left-[20%] w-24 h-24 border-4 border-black opacity-20 animate-[float3_18s_ease-in-out_infinite]"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      <div
        className="absolute top-1/3 right-[25%] w-20 h-20 border-4 border-[#FFD700] opacity-25 animate-[float4_10s_ease-in-out_infinite]"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
      />

      <div className="absolute bottom-48 right-[10%] w-16 h-16 bg-[#FFD700] opacity-20 animate-[float5_20s_linear_infinite]" />

      <div className="absolute top-[60%] left-[5%] w-12 h-12 bg-black opacity-15 rounded-full animate-[float6_14s_ease-in-out_infinite]" />

      <div className="absolute bottom-[20%] right-[30%] w-10 h-10 border-3 border-[#FFD700] opacity-30 rounded-full animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Rotating Sunburst Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] opacity-10 animate-[rotateSlow_100s_linear_infinite]">
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
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5DC]/0 via-[#F5F5DC]/50 to-[#F5F5DC]" />

      {/* Pulsing Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full animate-[glowPulse_8s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)'
        }}
      />

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(40px) rotate(-180deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -50px); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(90deg); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(60px) rotate(180deg); }
        }
        
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -40px); }
        }
        
        @keyframes rotateSlow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(90deg); }
        }
        
        @keyframes glowPulse {
          0%, 100% { 
            transform: translate(-50%, 0) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(-50%, 0) scale(1.1);
            opacity: 0.4;
          }
        }
      `}</style>
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 cursor-default select-none">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="group relative flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
            <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-black tabular-nums">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs font-bold text-black uppercase tracking-widest">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Hero() {

  const checkdis = () => {
    const now = new Date().getTime();
    const target = EVENT_DATE.getTime();
    const diff = target - now;
    if (diff <= 0) {
      return false;
    }
    else {
      return true;
    }
  }

  const [isActive, setIsActive] = useState(checkdis());

  useEffect(() => {
    const timer = setInterval(() => {
      setIsActive(checkdis());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (

    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-48 overflow-hidden bg-[#F5F5DC] text-black">
      <AnimatedBackground />

      {/* Main Content */}
      <div
        className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto"
      >
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img src="fofmumbai_primarylogo.png" alt="Mumbai Primary Logo" className="h-6" />
          <span className="text-xs font-bold text-black tracking-[0.2em] uppercase">
             X
          </span>
          <img src="/images/gdg-logo.png" alt="Logo" className="h-6" />
          <span className="text-xs font-bold text-black tracking-[0.2em] uppercase">
             presents
          </span>
        </div>

        {/* Big Title */}
        <div className="mb-6">
          {/* PIXELVERSE - main title (shared) */}
          <div className="relative" style={{ isolation: 'isolate' }}>
            {/* sm+ Layer 1: Yellow plate behind PIXELVERSE */}
            <div
              className="hidden sm:block absolute -top-6 -right-2 md:-top-8 md:right-6 bg-[#FFD700] px-5 py-2 md:px-6 md:py-2.5 rotate-[-6deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ zIndex: 1 }}
            >
              <span className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase invisible" style={{ fontFamily: 'Inter, sans-serif' }}>
                DESIGNATHON
              </span>
            </div>

            {/* Layer 2: PIXELVERSE */}
            <h1
              className="relative text-[12vw] sm:text-[100px] md:text-[130px] font-black tracking-tighter leading-[0.85] text-black drop-shadow-sm"
              style={{ zIndex: 2 }}
            >
              PIXELVERSE
              <span className="sr-only"> Design Hackathon</span>
            </h1>

            {/* sm+ Layer 3: DESIGNATHON white text on top */}
            <div
              className="hidden sm:block absolute -top-6 -right-2 md:-top-8 md:right-6 px-5 py-2 md:px-6 md:py-2.5 rotate-[-6deg] pointer-events-none"
              style={{ zIndex: 3 }}
            >
              <span
                className="text-2xl md:text-4xl font-extrabold tracking-wider text-white uppercase"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)'
                }}
              >
                DESIGNATHON
              </span>
            </div>
          </div>

          {/* === MOBILE: straight badge below PIXELVERSE === */}
          <div className="flex justify-end sm:hidden mt-3">
            <div className="bg-[#FFD700] px-2 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span
                className="text-xs font-extrabold tracking-wider text-white uppercase"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  WebkitTextStroke: '1px rgba(0,0,0,0.5)',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)'
                }}
              >
                DESIGNATHON
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-10 flex flex-col items-center justify-center gap-2">
          <p className="text-lg md:text-2xl font-bold text-black/80 max-w-2xl uppercase">
            Where Logic Meets Aesthetic.
          </p>
          <p className="text-sm md:text-base text-black font-medium tracking-wide border-b-2 border-[#FFD700]">
            The UI/UX & Product Design Hackathon
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-14">
          <Countdown />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-40">
          <button onClick={() => triggerHaptic('medium')} className="relative px-10 py-5 bg-black text-white font-bold text-xl uppercase tracking-tight border-2 border-black shadow-[8px_8px_0px_0px_rgba(255,215,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <span className="flex items-center gap-2 justify-center">
              Join the Quest <Zap size={20} className="fill-[#FFD700] text-[#FFD700]" />
            </span>
          </button>

          <button
            onClick={() => triggerHaptic('medium')}
            disabled={isActive}
            className={`relative px-10 py-5 font-bold text-xl uppercase tracking-tight border-2 transition-all
          ${isActive
                ? "bg-[#F5F5DC] border-black/30 text-black/30 cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                : "bg-white border-black text-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              }`}
          >
            <a
              href={!isActive ? "/round1.pdf" : undefined}
              target="_blank"
              className={`flex items-center gap-2 justify-center ${isActive ? "pointer-events-none" : ""}`}
            >
              {isActive ? "Locked Until Event" : "Problem Statements"} <Terminal size={20} />
            </a>
            {isActive && (
              <span className="absolute -top-3 -right-3 px-2 py-0.5 bg-[#FFD700] text-black text-[10px] font-bold uppercase tracking-wider border-2 border-black/30 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                SOON
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-black animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </div>
    </section>
  );
}