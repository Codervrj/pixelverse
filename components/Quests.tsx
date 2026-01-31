
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, Sparkles, Monitor, ArrowUpRight } from 'lucide-react';

const questList = [
  {
    title: 'GAMIFIED LEARNING',
    desc: 'Engineer an education platform where leveling up is as rewarding as learning.',
    icon: Brain,
    color: '#00f2ff'
  },
  {
    title: 'WELLNESS RPG',
    desc: 'Build health ecosystems where mindfulness is rewarded with digital progression.',
    icon: HeartPulse,
    color: '#ff00ff'
  },
  {
    title: 'NARRATIVE DESIGN',
    desc: 'Create branching storytelling interfaces that respond to user choices.',
    icon: Sparkles,
    color: '#ffff00'
  },
  {
    title: 'RETRO REMASTER',
    desc: 'Take a legacy system and give it a pixel-perfect, hyper-modern design overhaul.',
    icon: Monitor,
    color: '#ffffff'
  }
];

const Quests: React.FC = () => {
  return (
    <section id="quests" className="py-24 md:py-40 px-6 md:px-12 bg-[#050008] relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-white/10 pb-16">
          <div>
            <div className="text-cyan-400 font-pixel text-[10px] mb-4">SELECT_MISSION</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-archivo tracking-tighter uppercase leading-[0.85]">
              THE<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>CHALLENGE</span>
            </h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-zinc-500 font-medium text-lg md:text-xl uppercase tracking-tight">
              Four distinct paths. One final objective. Choose your specialty and conquer the mainframe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {questList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative min-h-[400px] md:min-h-[500px] h-auto overflow-hidden rounded-[32px] md:rounded-[48px] glass-panel p-8 md:p-14 flex flex-col justify-between transition-all"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-all pointer-events-none">
                <item.icon size={250} />
              </div>

              <div className="relative z-10">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 md:mb-12"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon style={{ color: item.color }} size={28} className="md:size-32" />
                </div>
                <h3 className="text-3xl md:text-5xl xl:text-6xl font-archivo tracking-tighter uppercase mb-6 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-lg md:text-2xl font-medium uppercase tracking-tight max-w-md">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between relative z-10 pt-10 border-t border-white/5">
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[9px] font-pixel text-zinc-500 uppercase tracking-widest">QUEST_AVAILABLE</span>
                </div>
                <button className="flex items-center gap-2 text-[9px] font-pixel text-white hover:text-cyan-400 transition-colors">
                  ENTER <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quests;
