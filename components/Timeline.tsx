
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Gamepad2, Trophy, Clock, Code } from 'lucide-react';

const timelineData = [
  {
    time: "10:00 AM",
    title: "MAINFRAME INITIALIZED",
    desc: "Check-in and team assembly at the primary portal.",
    icon: Rocket,
    color: "#00f2ff"
  },
  {
    time: "12:00 PM",
    title: "THE QUEST BEGINS",
    desc: "Opening ceremony and project briefing.",
    icon: Code,
    color: "#ff00ff"
  },
  {
    time: "08:00 PM",
    title: "MIDNIGHT PATCH",
    desc: "Mentorship sessions and technical audits.",
    icon: Clock,
    color: "#ffff00"
  },
  {
    time: "10:00 AM",
    title: "FINAL SUBMISSION",
    desc: "Locking the repositories for evaluation.",
    icon: Gamepad2,
    color: "#ffffff"
  },
  {
    time: "04:00 PM",
    title: "VICTORY CEREMONY",
    desc: "Announcing the champions of PixelVerse.",
    icon: Trophy,
    color: "#ff8800"
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 md:py-40 px-6 bg-[#0c0014] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <div className="text-cyan-400 font-pixel text-[10px] mb-4 uppercase tracking-[0.4em]">SYSTEM_SCHEDULE</div>
          <h2 className="text-5xl md:text-8xl font-archivo tracking-tighter uppercase leading-none text-white">
            CHRONO<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>TIMELINE</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-12 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white z-10 border-4 border-[#0c0014] shadow-[0_0_15px_white]" />

                {/* Content Box */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div 
                      className="px-4 py-1.5 font-pixel text-[9px] uppercase tracking-widest mb-4 inline-block"
                      style={{ backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                      {item.time}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-archivo text-white uppercase tracking-tighter mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-lg uppercase max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for desktop */}
                <div className="hidden md:block md:w-2/12" />
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
