
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Gamepad2, Trophy, Clock, Code, Flag } from 'lucide-react';

const timelineData = [
  {
    time: "10:00 AM",
    title: "MAINFRAME INITIALIZED",
    desc: "Check-in and team assembly at the primary portal.",
    icon: Rocket,
    color: "#FFD700"
  },
  {
    time: "12:00 PM",
    title: "THE QUEST BEGINS",
    desc: "Opening ceremony and project briefing.",
    icon: Code,
    color: "#FF4D4D"
  },
  {
    time: "08:00 PM",
    title: "MIDNIGHT PATCH",
    desc: "Mentorship sessions and technical audits.",
    icon: Clock,
    color: "#4D4DFF"
  },
  {
    time: "10:00 AM",
    title: "FINAL SUBMISSION",
    desc: "Locking the repositories for evaluation.",
    icon: Gamepad2,
    color: "#37A221"
  },
  {
    time: "04:00 PM",
    title: "VICTORY CEREMONY",
    desc: "Announcing the champions of PixelVerse.",
    icon: Trophy,
    color: "#FFD700"
  }
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="py-24 md:py-40 px-6 bg-[#F5F5DC] relative overflow-hidden text-black border-t-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1 bg-black text-[#FFD700] font-archivo font-bold text-xs mb-4 uppercase tracking-widest">SYSTEM_SCHEDULE</div>
          <h2 className="text-5xl md:text-8xl font-archivo tracking-tighter uppercase leading-none text-black">
            EVENT<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>TIMELINE</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black/10" />

          {/* Animated Vertical Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-black origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center gap-12 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5F5DC] z-10 border-4 border-black shadow-[rgba(0,0,0,1)]" />

                {/* Content Box */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div
                      className="px-4 py-1.5 font-bold font-archivo text-xs uppercase tracking-widest mb-4 inline-block border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      style={{ color: "black" }}
                    >
                      {item.time}
                    </div>
                    <div className={`bg-white border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl w-full ${idx % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                      <h3 className="text-2xl md:text-3xl font-archivo text-black uppercase tracking-tighter mb-4">
                        {item.title}
                      </h3>
                      <p className="text-black/80 text-sm md:text-lg uppercase max-w-sm font-archivo font-medium">
                        {item.desc}
                      </p>
                    </div>
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
