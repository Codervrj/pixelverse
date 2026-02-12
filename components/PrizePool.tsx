import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const prizes = [
  {
    rank: "02",
    title: "RUNNER UP",
    amount: "₹5,000",
    shadowColor: "#E5E7EB", 
    glowColor: "rgba(229, 231, 235, 0.4)",
    sparkColor: "#E5E7EB",
    // mobile: vertical stack; desktop: fan-out
    offset: { desktop: { x: -380, y: -140, rotate: -10 }, mobile: { x: 0, y: -520, rotate: 0 } }
  },
  {
    rank: "01",
    title: "GRAND CHAMPION",
    amount: "₹10,000",
    shadowColor: "#FFD700", 
    glowColor: "rgba(255, 215, 0, 0.6)",
    sparkColor: "#FFD700",
    offset: { desktop: { x: 0, y: -220, rotate: 0 }, mobile: { x: 0, y: -260, rotate: 0 } },
    hasSpecialEffect: true 
  },
  {
    rank: "03",
    title: "BRONZE TIER",
    amount: "₹2,000",
    shadowColor: "#CD7F32", 
    glowColor: "rgba(205, 127, 50, 0.4)",
    sparkColor: "#CD7F32",
    // ADJUSTED MOBILE Y OFFSET: Increased from -640 to -660 for better spacing
    offset: { desktop: { x: 380, y: -140, rotate: 10 }, mobile: { x: 0, y: -780, rotate: 0 } }
  }
];

const PrizePool: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeColor, setActiveColor] = useState("#FFD700");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const sparkX = useSpring(useTransform(mouseX, [-500, 500], [100, -100]), { stiffness: 40, damping: 25 });
  const sparkY = useSpring(useTransform(mouseY, [-500, 500], [100, -100]), { stiffness: 40, damping: 25 });
  const tiltY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 bg-[#050008] text-white overflow-hidden lg:cursor-none"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
        style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ x: sparkX, y: sparkY }}
            className="absolute inset-0 pointer-events-none z-[5]"
          >
            {[...Array(isMobile ? 30 : 85)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute rounded-full" 
                animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -70, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 + Math.random() * 2, delay: Math.random() * 3, ease: "easeOut" }} 
                style={{ 
                  width: Math.random() * 4 + 1.5, height: Math.random() * 4 + 1.5, 
                  left: `${(i * 17.3) % 100}%`, top: `${(i * 23.7) % 100}%`,
                  backgroundColor: activeColor,
                  boxShadow: `0 0 12px 2px ${activeColor}`,
                  filter: `brightness(2)`,
                  transition: 'background-color 0.5s ease'
                }} 
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="pt-4 mb-12 flex flex-col items-center text-center">
          <div className="bg-[#050008] border-2 border-yellow-400 px-6 py-1.5 mb-6">
            <span className="font-pixel text-xs tracking-[0.5em] text-yellow-400 uppercase font-bold">REWARD_PROTOCOL</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-archivo font-black tracking-tighter uppercase leading-[0.8]">PRIZE</h2>
          <h2 className="text-6xl md:text-9xl font-archivo font-black tracking-tighter uppercase leading-[0.8] text-transparent" style={{ WebkitTextStroke: '2px white' }}>POOL</h2>
        </div>

        <motion.div 
          className="relative w-64 h-52 md:w-80 md:h-64 cursor-target z-20"
          animate={{ marginTop: isOpen ? (isMobile ? "750px" : "200px") : "0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={() => isMobile && setIsOpen(!isOpen)}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => { if (!isMobile) { setIsOpen(false); setActiveColor("#FFD700"); } }}
        >
          {prizes.map((prize, idx) => {
            const activeOffset = isMobile ? prize.offset.mobile : prize.offset.desktop;
            return (
              <motion.div
                key={idx}
                className="absolute inset-0 bg-white border-4 border-[#050008] p-4 md:p-8 flex flex-col justify-between overflow-hidden"
                animate={{ 
                  x: isOpen ? activeOffset.x : 0,
                  y: isOpen ? activeOffset.y : 20, 
                  rotate: isOpen ? activeOffset.rotate : 0,
                  scale: isOpen ? 1 : 0.7,
                  opacity: isOpen ? 1 : 0
                }}
                onMouseEnter={() => !isMobile && setActiveColor(prize.sparkColor)}
                style={{ 
                  zIndex: isOpen ? (prize.rank === "01" ? 30 : 25) : 5, 
                  width: isMobile ? '100%' : '285px', 
                  height: '240px', 
                  left: isMobile ? '0' : '17.5px', 
                  boxShadow: `8px 8px 0px 0px ${prize.shadowColor}` 
                }}
              >
                <div className="space-y-1 text-[#050008]">
                  <div className="flex justify-between items-center text-black/40 font-pixel text-[8px] font-bold uppercase tracking-widest">
                    <span>RANK_{prize.rank}</span>
                    <div className="w-4 h-[1px] bg-black/10" />
                  </div>
                  <h4 className="font-archivo font-black text-xl md:text-2xl uppercase leading-none border-b-4 border-yellow-400 pb-1">{prize.title}</h4>
                </div>

                <div className="flex-grow flex items-center justify-start overflow-hidden w-full">
                  <div className="text-[2rem] sm:text-[2.6rem] md:text-[2.8rem] font-archivo font-black text-[#050008] italic leading-none tracking-tighter whitespace-nowrap min-w-0 pr-2">
                    {prize.amount}
                  </div>
                </div>

                <div className="flex justify-end opacity-20">
                  <span className="font-pixel text-[8px] text-black uppercase tracking-widest font-bold italic">protocol_v2_packet</span>
                </div>
              </motion.div>
            );
          })}

          <div className="absolute inset-0 bg-[#D9B700] border-4 border-[#050008] rounded-tr-[2rem] md:rounded-tr-[3rem] z-10" />
          
          <motion.div
            className="absolute inset-0 bg-[#FFD700] border-4 border-[#050008] z-40 origin-bottom flex flex-col justify-end p-6 md:p-8"
            animate={{ 
              rotateX: isOpen ? -45 : 0, 
              rotateY: isOpen && !isMobile ? tiltY.get() : 0, 
              filter: isOpen ? "brightness(1.1)" : "brightness(1)" 
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute top-0 left-0 bg-[#050008] text-yellow-400 px-4 py-1.5 font-pixel text-[10px] font-bold uppercase">PRIZES</div>
            <div className="space-y-1 md:space-y-2 text-[#050008]">
              <span className="font-pixel text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 italic font-bold">{isOpen ? "SEQUENCING..." : "UNLOCK ON HOVERING"}</span>
              <div className="text-xl md:text-3xl font-archivo font-black uppercase tracking-tighter leading-none">{isOpen ? "DIR_OPEN" : isMobile ? "TAP TO_DECRYPT" : "LOCKED"}</div>
            </div>
          </motion.div>
        </motion.div>

        </div>
    </section>
  );
};

export default PrizePool;