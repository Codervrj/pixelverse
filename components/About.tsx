import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4 sm:px-6 md:px-16 xl:px-24 bg-white text-black border-t-2 border-black cursor-none"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 sm:gap-12 md:gap-12 lg:gap-24 items-start">

          <div className="w-full md:col-span-6">
            <div className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 bg-[#FFD700] text-black font-archivo font-bold text-[10px] sm:text-xs mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase tracking-[0.2em] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-target">
              FRAME_001
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-[5.5vw] lg:text-[6vw] xl:text-[11rem] font-archivo leading-[0.85] tracking-tighter uppercase mb-8 sm:mb-12 text-black cursor-target"
            >
              DESIGN<br />AS A<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">CORE</span>
            </motion.h2>
          </div>

          <div className="w-full md:col-span-6 md:pt-8 lg:pt-20 xl:pt-48">
            <div className="space-y-10 sm:space-y-16 xl:space-y-24">
              <p className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-6xl font-medium leading-[1.15] tracking-tight text-black uppercase max-w-3xl font-archivo cursor-target">
                PixelVerse is the ultimate <span className="text-[#FFD700] bg-black px-1 sm:px-2 italic">Design Hackathon</span> & battleground where Form doesn't just follow Function - it <span className="underline decoration-2 sm:decoration-4 decoration-[#FFD700]">Elevates it</span>.
              </p>

              <div className="pt-10 sm:pt-16 border-t-2 sm:border-t-4 border-black grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="cursor-target"
                >
                  <div className="text-[10px] sm:text-xs font-bold font-archivo text-black mb-3 sm:mb-6 uppercase tracking-widest">MAX_PARTICIPANTS</div>
                  <div className="text-4xl sm:text-6xl md:text-4xl lg:text-6xl xl:text-9xl font-archivo tracking-tighter text-black drop-shadow-[3px_3px_0px_rgba(255,215,0,1)] sm:drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">150+</div>
                  <div className="text-[10px] sm:text-sm font-bold uppercase mt-2 sm:mt-4 tracking-widest text-black/60">PLAYERS_READY</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="cursor-target"
                >
                  <div className="text-[10px] sm:text-xs font-bold font-archivo text-black mb-3 sm:mb-6 uppercase tracking-widest">UPTIME_WINDOW</div>
                  <div className="text-4xl sm:text-6xl md:text-4xl lg:text-6xl xl:text-9xl font-archivo tracking-tighter text-black drop-shadow-[3px_3px_0px_rgba(255,215,0,1)] sm:drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">8H</div>
                  <div className="text-[10px] sm:text-sm font-bold uppercase mt-2 sm:mt-4 tracking-widest text-black/60">NON_STOP_BUILD</div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;