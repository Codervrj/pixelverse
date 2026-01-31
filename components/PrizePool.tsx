
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap, Gem, Crown } from 'lucide-react';

const PrizePool: React.FC = () => {
  return (
    <div className="py-40 md:py-64 px-8 md:px-16 bg-[#050008] text-center relative overflow-visible">
      {/* Cinematic Fog Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-yellow-400/[0.03] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-yellow-400 font-pixel text-xs mb-8 uppercase tracking-[0.5em] flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-yellow-400/30" />
            REWARD_TIERS
            <div className="w-12 h-px bg-yellow-400/30" />
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-archivo tracking-tighter uppercase leading-[0.8] text-white">
            VICTORY<br /><span className="text-yellow-400">LOOT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-end">

          {/* Runner Up - Side Tier */}
          <motion.div
            whileHover={{ y: -15 }}
            className="p-12 bg-white/[0.02] border border-white/10 rounded-[3.5rem] flex flex-col items-center justify-between text-center relative group backdrop-blur-3xl lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/[0.02] to-transparent rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 rounded-3xl bg-zinc-800/50 flex items-center justify-center mx-auto mb-10 border border-white/10 group-hover:border-zinc-400/50 transition-colors">
                <ShieldCheck className="text-zinc-400" size={40} />
              </div>
              <h3 className="text-2xl font-archivo uppercase text-zinc-500 tracking-widest mb-4">RUNNER_UP</h3>
              <div className="text-5xl xl:text-6xl font-archivo text-white tracking-tighter mb-10">₹3,000</div>

              <div className="space-y-4 text-left border-t border-white/5 pt-10">
                {['Silver Merit Badge', 'Pro Toolkit Access', 'Job Referral Priority'].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-[11px] font-pixel text-zinc-500 uppercase">
                    <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> {perk}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Winner - Legendary Tier */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 md:p-12 lg:p-16 bg-yellow-400/[0.08] border-2 border-yellow-400/40 rounded-[3rem] md:rounded-[4rem] flex flex-col items-center justify-between text-center relative group lg:order-2 shadow-[0_30px_100px_rgba(255,221,0,0.08)] z-20 h-auto"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-10 py-3 font-pixel text-[11px] uppercase tracking-[0.3em] rounded-full z-30 shadow-[0_10px_30px_rgba(255,221,0,0.4)]">
              LEGENDARY_DROP
            </div>

            <div className="relative z-10 w-full">
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-12 shadow-[0_20px_50px_rgba(255,221,0,0.4)] transform group-hover:rotate-[360deg] transition-transform duration-1000">
                <Trophy className="text-black" size={64} />
              </div>
              <h3 className="text-4xl md:text-5xl font-archivo uppercase text-yellow-400 tracking-tight mb-6">CHAMPION</h3>
              <div className="text-7xl xl:text-8xl font-archivo text-white tracking-tighter mb-12">₹5,000</div>

              <div className="space-y-6 text-left border-t border-yellow-400/20 pt-12">
                {[
                  { icon: Crown, text: 'The Golden Pixel Trophy' },
                  { icon: Gem, text: 'Exclusive Epic Swag Kit' },
                  { icon: Zap, text: 'Direct Internship Interview' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[12px] font-pixel text-white uppercase group-hover:translate-x-2 transition-transform">
                    <item.icon size={16} className="text-yellow-400" /> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special Award - Side Tier */}
          <motion.div
            whileHover={{ y: -15 }}
            className="p-12 bg-white/[0.02] border border-white/10 rounded-[3.5rem] flex flex-col items-center justify-between text-center relative group backdrop-blur-3xl lg:order-3"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/[0.02] to-transparent rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 rounded-3xl bg-pink-500/20 flex items-center justify-center mx-auto mb-10 border border-pink-500/20 group-hover:border-pink-500/50 transition-colors">
                <Zap className="text-pink-500" size={40} />
              </div>
              <h3 className="text-2xl font-archivo uppercase text-pink-500 tracking-widest mb-4">MOST_CREATIVE</h3>
              <div className="text-5xl xl:text-6xl font-archivo text-white tracking-tighter mb-10">₹2,000</div>

              <div className="space-y-4 text-left border-t border-white/5 pt-10">
                {['Creative Merit Pass', 'Asset Pack Bundle', 'Mentorship Connection'].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-[11px] font-pixel text-zinc-500 uppercase">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full" /> {perk}
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
          className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left">
            <div className="text-[10px] font-pixel text-zinc-600 mb-2 uppercase">ADDITIONAL_PERKS</div>
            <p className="text-zinc-400 uppercase text-sm tracking-widest">All participants get exclusive digital certificates & community badges.</p>
          </div>
          <button className="px-12 py-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-pixel text-white uppercase hover:bg-cyan-400 hover:text-black transition-all">
            FULL_LOOT_TABLE.PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizePool;
