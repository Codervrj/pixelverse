import React, { useState } from 'react';

// Simple icons as SVG components
const Brain = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
  </svg>
);

const HeartPulse = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
  </svg>
);

const Sparkles = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const Monitor = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <line x1="8" x2="16" y1="21" y2="21"/>
    <line x1="12" x2="12" y1="17" y2="21"/>
  </svg>
);

const ArrowUpRight = ({ size = 24, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M7 7h10v10"/>
    <path d="M7 17 17 7"/>
  </svg>
);

const questList = [
  {
    title: 'GAMIFIED LEARNING',
    desc: 'Engineer an education platform where leveling up is as rewarding as learning.',
    icon: Brain,
    color: '#FF5555',
    cardColor: 'bg-red-600'
  },
  {
    title: 'WELLNESS RPG',
    desc: 'Build health ecosystems where mindfulness is rewarded with digital progression.',
    icon: HeartPulse,
    color: '#FFD700',
    cardColor: 'bg-yellow-400'
  },
  {
    title: 'NARRATIVE DESIGN',
    desc: 'Create branching storytelling interfaces that respond to user choices.',
    icon: Sparkles,
    color: '#55AA55',
    cardColor: 'bg-green-600'
  }
];

const UnoReverseCard = ({ quest, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[500px] md:h-[550px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full cursor-pointer transition-transform duration-600"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transitionDuration: '0.6s'
        }}
      >
        {/* BACK SIDE - UNO Reverse Card */}
        <div
          className="absolute inset-0 rounded-3xl border-2 border-white/10 shadow-[0_0_30px_rgba(0,242,255,0.15)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <div className={`w-full h-full ${quest.cardColor} rounded-[22px] p-8 flex flex-col items-center justify-center relative overflow-hidden`}>
            {/* UNO Card White Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-[85%] bg-white rounded-full" />
            </div>

            {/* Reverse Arrows - Top */}
            <div className="relative z-10 mb-8">
              <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
                <path
                  d="M 80 30 Q 40 30 40 60 Q 40 90 80 90"
                  fill="none"
                  stroke={quest.color}
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <polygon
                  points="85,90 95,80 95,100"
                  fill={quest.color}
                />
                <polygon
                  points="35,60 45,50 45,70"
                  fill={quest.color}
                />
              </svg>
            </div>

            {/* REVERSE Text */}
            <div className="relative z-10 mb-8">
              <h3 
                className="text-4xl md:text-5xl font-black tracking-tighter text-center"
                style={{ 
                  color: quest.color,
                  textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                }}
              >
                REVERSE
              </h3>
            </div>

            {/* Reverse Arrows - Bottom */}
            <div className="relative z-10 rotate-180">
              <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
                <path
                  d="M 80 30 Q 40 30 40 60 Q 40 90 80 90"
                  fill="none"
                  stroke={quest.color}
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <polygon
                  points="85,90 95,80 95,100"
                  fill={quest.color}
                />
                <polygon
                  points="35,60 45,50 45,70"
                  fill={quest.color}
                />
              </svg>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border-2 border-white/20">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: quest.color }} />
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center border-2 border-white/20 rotate-180">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: quest.color }} />
            </div>
          </div>
        </div>

        {/* FRONT SIDE - Quest Information */}
        <div
          className="absolute inset-0 rounded-3xl border-2 border-white/10 shadow-[0_0_30px_rgba(0,242,255,0.15)] bg-[#0a0a0f]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full rounded-[22px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <quest.icon size={200} className="text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                style={{ backgroundColor: quest.color }}
              >
                <quest.icon className="text-white" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter uppercase mb-6 text-white">
                {quest.title}
              </h3>
              <p className="text-white/60 text-base md:text-lg font-bold uppercase tracking-tight max-w-md">
                {quest.desc}
              </p>
            </div>

            {/* Footer */}
            {/* <div className="flex items-center justify-between relative z-10 pt-8 border-t-2 border-black/10">
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black animate-pulse" />
                <span className="text-xs font-bold text-black uppercase tracking-widest">QUEST_AVAILABLE</span>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold text-black hover:text-yellow-500 transition-colors uppercase">
                ENTER <ArrowUpRight size={16} strokeWidth={3} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Quests() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black relative text-white min-h-screen overflow-hidden">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-white/10 pb-16">
          <div>
            <div className="inline-block px-4 py-1 bg-white/5 border border-cyan-400/30 text-cyan-400 font-bold text-xs mb-4 uppercase tracking-widest">
              SELECT_MISSION
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] text-white">
              THE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(0,242,255,0.6)' }}>
                CHALLENGE
              </span>
            </h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-white/60 font-medium text-lg md:text-xl uppercase tracking-tight">
              Four distinct paths. One final objective. Choose your specialty and conquer the mainframe.
            </p>
          </div>
        </div>

        <div className="text-center mb-8 text-sm text-white/40 uppercase tracking-wider font-bold">
          Hover over the cards to reveal the quests
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
          {questList.map((quest, idx) => (
            <UnoReverseCard key={idx} quest={quest} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}