import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap, Gem, Crown } from 'lucide-react';

const PrizePool: React.FC = () => {
  const prizes = [
    {
      rank: "02",
      title: "RUNNER_UP",
      amount: "₹5,000",
      icon: <Star className="w-6 h-6 text-zinc-400" />,
      color: "border-zinc-500/30",
      perks: ["Digital Badge", "Asset Pack", "Beta Access"]
    },
    {
      rank: "01",
      title: "GRAND_CHAMPION",
      amount: "₹10,000",
      icon: <Crown className="w-10 h-10 text-yellow-400" />,
      color: "border-yellow-500/50",
      perks: ["Physical Trophy", "Exclusive Merch", "Priority Mentorship", "Job Referral"]
    },
    {
      rank: "03",
      title: "BRONZE_TIER",
      amount: "₹2,000",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      color: "border-orange-500/30",
      perks: ["Digital Badge", "Asset Pack"]
    }
  ];

  return (
    <div className="py-40 px-8 bg-[#050008] relative">
      {/* Structural Grid Background - matching App.tsx global style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-yellow-400" />
            <span className="font-pixel text-yellow-400 text-xs tracking-[0.3em]">REWARD_PROTOCOL</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-archivo text-white uppercase tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Loot Box</span>
          </h2>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {prizes.map((prize, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-12 border-white/10 border-b md:border-b-0 md:border-r last:border-r-0 relative group hover:bg-white/[0.02] transition-colors`}
            >
              {/* Card Rank Header */}
              <div className="flex justify-between items-start mb-16">
                <span className="font-pixel text-zinc-600 text-sm">RANK_{prize.rank}</span>
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                  {prize.icon}
                </div>
              </div>

              {/* Amount and Title */}
              <div className="space-y-2 mb-12">
                <h3 className="font-pixel text-xs text-zinc-500 uppercase tracking-widest">{prize.title}</h3>
                <div className="text-5xl font-archivo text-white">{prize.amount}</div>
              </div>

              {/* Perks List */}
              <div className="space-y-4">
                <div className="font-pixel text-[10px] text-zinc-600 border-b border-white/5 pb-2">INCLUDED_ASSETS:</div>
                {prize.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 font-pixel text-[11px] text-zinc-400 uppercase">
                    <div className="w-1 h-1 bg-yellow-400" /> {perk}
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-400/0 group-hover:border-yellow-400 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 border border-white/10 bg-white/[0.01]">
          <div className="flex items-center gap-6">
            <ShieldCheck className="w-8 h-8 text-zinc-500" />
            <div>
              <p className="font-pixel text-[10px] text-zinc-500 uppercase">Participant Security</p>
              <p className="text-sm text-zinc-400">All certificates are cryptographically signed and stored in the PIXELVERSE_OS vault.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-black font-pixel text-xs hover:bg-yellow-400 transition-colors uppercase">
            Claim Your Spot
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;