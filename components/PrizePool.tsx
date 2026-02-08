
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap, Gem, Crown } from 'lucide-react';

const PrizePool: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]); // Center stays relatively stable or moves less
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="py-40 md:py-64 px-8 md:px-16 bg-black text-center relative overflow-visible border-t-2 border-white/20">

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-[#FFD700] font-archivo font-bold text-xs mb-8 uppercase tracking-[0.5em] flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-[#FFD700]" />
            REWARD_TIERS
            <div className="w-12 h-1 bg-[#FFD700]" />
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-archivo tracking-tighter uppercase leading-[0.8] text-white">
            VICTORY<br /><span className="text-[#FFD700]" style={{ WebkitTextStroke: "2px white" }}>LOOT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-end">

          {/* Runner Up - Side Tier */}
          <motion.div
            style={{ y: y1 }}
            className="p-12 bg-[#1a1a1a] border-2 border-white rounded-[2rem] flex flex-col items-center justify-between text-center relative group lg:order-1 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-10 border-2 border-black">
                <ShieldCheck className="text-black" size={40} />
              </div>
              <h3 className="text-2xl font-archivo uppercase text-white tracking-widest mb-4">RUNNER_UP</h3>
              <div className="text-5xl xl:text-6xl font-archivo text-white tracking-tighter mb-10">₹3,000</div>

              <div className="space-y-4 text-left border-t-2 border-white/20 pt-10">
                {['Silver Merit Badge', 'Pro Toolkit Access', 'Job Referral Priority'].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold font-archivo text-zinc-400 uppercase">
                    <div className="w-2 h-2 bg-white rounded-none" /> {perk}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Winner - Legendary Tier */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            style={{ y: y2 }}
            className="p-8 md:p-12 lg:p-16 bg-[#FFD700] border-4 border-white rounded-[3rem] flex flex-col items-center justify-between text-center relative group lg:order-2 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] z-20 h-auto"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-[#FFD700] px-10 py-3 font-archivo font-bold text-xs uppercase tracking-[0.3em] z-30 border-2 border-white">
              LEGENDARY_DROP
            </div>

            <div className="relative z-10 w-full">
              <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center mx-auto mb-12 border-4 border-white">
                <Trophy className="text-[#FFD700]" size={64} />
              </div>
              <h3 className="text-4xl md:text-5xl font-archivo uppercase text-black tracking-tight mb-6">CHAMPION</h3>
              <div className="text-7xl xl:text-8xl font-archivo text-black tracking-tighter mb-12">₹5,000</div>

              <div className="space-y-6 text-left border-t-2 border-black/20 pt-12">
                {[
                  { icon: Crown, text: 'The Golden Pixel Trophy' },
                  { icon: Gem, text: 'Exclusive Epic Swag Kit' },
                  { icon: Zap, text: 'Direct Internship Interview' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold font-archivo text-black uppercase group-hover:translate-x-2 transition-transform">
                    <item.icon size={20} className="text-black fill-white" /> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special Award - Side Tier */}
          <motion.div
            style={{ y: y3 }}
            className="p-12 bg-[#1a1a1a] border-2 border-white rounded-[2rem] flex flex-col items-center justify-between text-center relative group lg:order-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-10 border-2 border-black">
                <Zap className="text-black" size={40} />
              </div>
              <h3 className="text-2xl font-archivo uppercase text-white tracking-widest mb-4">MOST_CREATIVE</h3>
              <div className="text-5xl xl:text-6xl font-archivo text-white tracking-tighter mb-10">₹2,000</div>

              <div className="space-y-4 text-left border-t-2 border-white/20 pt-10">
                {['Creative Merit Pass', 'Asset Pack Bundle', 'Mentorship Connection'].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold font-archivo text-zinc-400 uppercase">
                    <div className="w-2 h-2 bg-white rounded-none" /> {perk}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global Prize Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left">
            <div className="text-xs font-bold font-archivo text-zinc-400 mb-2 uppercase">ADDITIONAL_PERKS</div>
            <p className="text-white uppercase text-sm tracking-widest font-archivo">All participants get exclusive digital certificates & community badges.</p>
          </div>
          <button className="px-12 py-6 bg-white text-black border-2 border-white rounded-xl text-xs font-bold font-archivo uppercase hover:bg-[#FFD700] hover:border-[#FFD700] transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
            FULL_LOOT_TABLE.PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizePool;
