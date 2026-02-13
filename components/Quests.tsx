import React, { useState, useEffect, useRef } from 'react';
import { triggerHaptic } from '../hooks/useHaptic';

// Simple icons as SVG components
const Brain = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-6 0 4 4 0 0 0-2 7 4 4 0 0 0 4 6h8a4 4 0 0 0 4-6 4 4 0 0 0-2-7 3 3 0 1 0-6 0Z" />
    <path d="M8 10h8" />
    <path d="M9 14h6" />
  </svg>
);

const HeartPulse = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M6 12h3l2-3 2 6 2-3h3" />
    <path d="M8 20h8" />
  </svg>
);

const Sparkles = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.9 4.9l2.8 2.8" />
    <path d="M16.3 16.3l2.8 2.8" />
    <path d="M4.9 19.1l2.8-2.8" />
    <path d="M16.3 7.7l2.8-2.8" />
  </svg>
);

const Monitor = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

const ArrowUpRight = ({ size = 24, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const questList = [
  {
    title: 'Consumer & Gen Z (Mobile App) ',
    desc: 'Digital Wellness & Social Health',
    icon: Brain,
    color: '#FF5555',
    cardColor: 'bg-red-600'
  },
  {
    title: 'B2B & Efficiency (Tablet/Web) ',
    desc: 'The Gig Worker’s Cockpit',
    icon: HeartPulse,
    color: '#FFD700',
    cardColor: 'bg-yellow-400'
  },
  {
    title: 'Social Good & Accessibility (Mobile App) ',
    desc: 'Hyper-Local Civic Action',
    icon: Sparkles,
    color: '#55AA55',
    cardColor: 'bg-green-600'
  }
];

const UnoReverseCard = ({ quest, index, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Different entrance directions for each card
  const getEntranceStyle = () => {
    if (isVisible) {
      return {
        transform: 'translate(0, 0) rotate(0deg)',
        opacity: 1
      };
    }

    // Different entrance/exit animations for each card
    switch (index) {
      case 0: // From/to left
        return {
          transform: 'translateX(-200%) rotate(-45deg)',
          opacity: 0
        };
      case 1: // From/to top
        return {
          transform: 'translateY(-200%) rotate(180deg)',
          opacity: 0
        };
      case 2: // From/to right
        return {
          transform: 'translateX(200%) rotate(45deg)',
          opacity: 0
        };
      default:
        return {
          transform: 'translateX(-200%) rotate(-45deg)',
          opacity: 0
        };
    }
  };

  return (
    <div
      id="quests"
      className="perspective-1000 transition-all duration-1000 ease-out"
      style={{
        ...getEntranceStyle(),
        transitionDelay: isVisible ? `${index * 200}ms` : `${(2 - index) * 200}ms` // Reverse order on exit
      }}
      onClick={() => { setIsFlipped(!isFlipped); triggerHaptic('immersive'); }}
      onMouseEnter={() => { setIsFlipped(true); triggerHaptic('immersive'); }}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-60 h-[360px] sm:w-72 sm:h-[420px] md:w-80 md:h-[480px] cursor-pointer"
        style={{
          perspective: '1000px'
        }}
      >
        {/* BACK SIDE - UNO Reverse Card (visible when NOT flipped) */}
        <div
          className={`absolute inset-0 ${quest.cardColor} rounded-2xl shadow-2xl border-8 border-white overflow-hidden transition-all duration-700`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            opacity: isFlipped ? 0 : 1,
            visibility: isFlipped ? 'hidden' as const : 'visible' as const,
            zIndex: isFlipped ? 1 : 2,
            transitionProperty: 'transform, opacity',
          }}
        >
          {/* UNO Card White Circle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-white rounded-full" />

          {/* Centered content wrapper */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            {/* Reverse Arrows - Top */}
            <svg width="60" height="60" viewBox="0 0 100 100" className="drop-shadow-lg -mb-1 sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]">
              <path
                d="M 30 50 Q 30 30, 50 30 Q 70 30, 70 50"
                fill="none"
                stroke={quest.color}
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 25 45 L 30 30 L 45 35"
                fill={quest.color}
              />
            </svg>

            {/* REVERSE Text */}
            <div
              className="font-black text-2xl sm:text-3xl md:text-4xl tracking-wider my-1"
              style={{ color: quest.color }}
            >
              REVERSE
            </div>

            {/* Reverse Arrows - Bottom */}
            <svg width="60" height="60" viewBox="0 0 100 100" className="drop-shadow-lg rotate-180 -mt-1 sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]">
              <path
                d="M 30 50 Q 30 30, 50 30 Q 70 30, 70 50"
                fill="none"
                stroke={quest.color}
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 25 45 L 30 30 L 45 35"
                fill={quest.color}
              />
            </svg>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 font-bold text-2xl text-white">↻</div>
          <div className="absolute bottom-4 right-4 font-bold text-2xl text-white rotate-180">↻</div>
        </div>

        {/* FRONT SIDE - Quest Information (visible when flipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col transition-all duration-700"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            opacity: isFlipped ? 1 : 0,
            visibility: isFlipped ? 'visible' as const : 'hidden' as const,
            zIndex: isFlipped ? 2 : 1,
            transitionProperty: 'transform, opacity',
          }}
        >
          {/* Background Icon */}
          <div className="absolute top-4 right-4 opacity-10">
            <quest.icon size={120} className="text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between z-10">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: quest.color, color: '#000' }}
              >
                QUEST_{index + 1}
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-3 text-white tracking-tight">
                {quest.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {quest.desc}
              </p>
            </div>

            {/* Footer */}

          </div>
        </div>
      </div>
    </div >
  );
};

export default function Quests() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility based on whether section is in viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-black py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 overflow-hidden"
    >
      {/* Structural Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background glow effects */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs sm:text-sm font-mono mb-4 sm:mb-6">
            SELECT_MISSION
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            THE CHALLENGE
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-3 sm:mb-4 px-2">
            Four distinct paths. One final objective. Choose your specialty and conquer the mainframe.
          </p>

          <p className="text-cyan-400 text-xs sm:text-sm font-mono">
            <span className="hidden sm:inline">→ Hover over the cards to reveal the quests</span>
            <span className="sm:hidden">→ Tap the cards to reveal the quests</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          {questList.map((quest, idx) => (
            <UnoReverseCard
              key={idx}
              quest={quest}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}