
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, Sparkles, Monitor, ArrowUpRight } from 'lucide-react';

const questList = [
  {
    title: 'GAMIFIED LEARNING',
    desc: 'Engineer an education platform where leveling up is as rewarding as learning.',
    icon: Brain,
    color: '#FFD700'
  },
  {
    title: 'WELLNESS RPG',
    desc: 'Build health ecosystems where mindfulness is rewarded with digital progression.',
    icon: HeartPulse,
    color: '#FF4D4D'
  },
  {
    title: 'NARRATIVE DESIGN',
    desc: 'Create branching storytelling interfaces that respond to user choices.',
    icon: Sparkles,
    color: '#4D4DFF'
  },
  {
    title: 'RETRO REMASTER',
    desc: 'Take a legacy system and give it a pixel-perfect, hyper-modern design overhaul.',
    icon: Monitor,
    color: '#37A221'
  }
];

const Quests: React.FC = () => {
  return (
    <section id="quests" className="py-24 md:py-40 px-6 md:px-12 bg-[#F5F5DC] relative text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b-2 border-black pb-16">
          <div>
            <div className="inline-block px-4 py-1 bg-black text-[#FFD700] font-archivo font-bold text-xs mb-4 uppercase tracking-widest">SELECT_MISSION</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-archivo tracking-tighter uppercase leading-[0.85] text-black">
              THE<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>CHALLENGE</span>
            </h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-black font-medium text-lg md:text-xl uppercase tracking-tight font-archivo">
              Four distinct paths. One final objective. Choose your specialty and conquer the mainframe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 text-left">
          {questList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              className="group relative min-h-[400px] md:min-h-[500px] h-auto overflow-hidden bg-white border-2 border-black rounded-[32px] p-8 md:p-14 flex flex-col justify-between transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-all pointer-events-none">
                <item.icon size={250} className="text-black" />
              </div>

              <div className="relative z-10">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 md:mb-12 border-2 border-black bg-[#F5F5DC] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <item.icon style={{ color: "black" }} size={28} className="md:size-32" />
                </div>
                <h3 className="text-3xl md:text-5xl xl:text-6xl font-archivo tracking-tighter uppercase mb-6 text-black group-hover:text-[#FFD700] transition-colors" style={{ WebkitTextStroke: "1px black" }}>
                  {item.title}
                </h3>
                <p className="text-black/70 text-lg md:text-2xl font-bold uppercase tracking-tight max-w-md font-archivo">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between relative z-10 pt-10 border-t-2 border-black/10">
                <div className="flex gap-4 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#37A221] border border-black animate-pulse" />
                  <span className="text-xs font-bold font-archivo text-black uppercase tracking-widest">QUEST_AVAILABLE</span>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold font-archivo text-black hover:text-[#FFD700] transition-colors uppercase">
                  ENTER <ArrowUpRight size={16} strokeWidth={3} />
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
