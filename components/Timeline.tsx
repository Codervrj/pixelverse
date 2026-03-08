
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Gamepad2, Trophy, Clock, Code, Flag } from 'lucide-react';

const timelineData = [
  {
    time: "20th February 2026",
    title: "Round 1 goes live",
    desc: ["Registration opens", "A problem statement is released along with a Micro-challenge"],
    icon: Rocket,
    color: "#FFD700"
  },
  {
    time: "2nd March 2026",
    title: "Round 1 ends",
    desc: ["Submission of your Micro-challenge", "Wait for Round 1 results"],
    icon: Code,
    color: "#FF4D4D"
  },
  {
    time: "3rd March 2026",
    title: "Announcement of Shortlisted Teams",
    desc: ["Top 45 Teams are announced", "45 Teams are qualified for the Offline round",],
    icon: Clock,
    color: "#4D4DFF"
  },
  {
    time: "8th March 2026",
    title: "Final Round",
    desc: ["Top 45 Teams will compete in the Offline Round at SIES Graduate School of Technology"],
    icon: Gamepad2,
    color: "#37A221"
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
    <section id="timeline" ref={containerRef} className="py-16 sm:py-24 md:py-40 px-4 sm:px-6 bg-[#F5F5DC] relative overflow-hidden text-black border-t-2 border-black">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#050008 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Yellow grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffd7004d 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
          animation: 'blueprintMove 40s linear infinite'
        }}
      />

      <style>{`
        @keyframes blueprintMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-24 text-center">
          <div className="inline-block px-3 py-1 sm:px-4 bg-black text-[#FFD700] font-archivo font-bold text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase tracking-widest">JOURNEY_MAP</div>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-archivo tracking-tighter uppercase leading-none text-black">
            EVENT<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>TIMELINE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl text-center">
            <div className="inline-block px-4 py-1.5 bg-black text-[#FFD700] font-archivo font-bold text-xs mb-4 uppercase tracking-widest">FRAME_01</div>
            <h3 className="text-3xl md:text-4xl font-archivo text-black uppercase tracking-tighter mb-3">ONLINE ROUND</h3>
            <p className="text-black/70 text-sm md:text-base font-archivo font-medium uppercase tracking-tight">Compete virtually from anywhere. Prove your skills in the digital arena.</p>
          </div>
          <div className="bg-white border-2 border-black p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl sm:rounded-2xl text-center">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black text-[#FFD700] font-archivo font-bold text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase tracking-widest">FRAME_02</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-archivo text-black uppercase tracking-tighter mb-2 sm:mb-3">OFFLINE ROUND</h3>
            <p className="text-black/70 text-xs sm:text-sm md:text-base font-archivo font-medium uppercase tracking-tight">The finalists compete on-site. Show up and claim your victory.</p>
          </div>
        </div>

        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <div className="inline-block px-3 py-1 sm:px-4 bg-black text-[#FFD700] font-archivo font-bold text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase tracking-widest">OFFLINE_SCHEDULE</div>
          <h3 className="text-2xl sm:text-4xl md:text-6xl font-archivo tracking-tighter uppercase leading-none text-black">
            THE OPERATIONAL TIMELINE
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-black/10" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 w-0.5 sm:w-1 bg-black origin-top"
          />

          <div className="space-y-10 sm:space-y-16 md:space-y-24">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center gap-6 sm:gap-12 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5F5DC] z-10 border-4 border-black shadow-[rgba(0,0,0,1)]" />

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div
                      className="px-2.5 py-1 sm:px-4 sm:py-1.5 font-bold font-archivo text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 inline-block border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      style={{ color: "black" }}
                    >
                      {item.time}
                    </div>
                    <div className={`bg-white border-2 border-black p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl sm:rounded-2xl w-full ${idx % 2 === 0 ? 'sm:rounded-tr-none' : 'sm:rounded-tl-none'}`}>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-archivo text-black uppercase tracking-tighter mb-2 sm:mb-4">
                        {item.title}
                      </h3>
                      <ul className="text-black/80 text-[10px] sm:text-xs md:text-sm uppercase max-w-sm font-archivo font-medium space-y-2 sm:space-y-3 text-left">
                        {item.desc.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-black/80 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

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