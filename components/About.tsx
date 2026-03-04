import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-32 lg:py-48 px-6 md:px-16 xl:px-24 bg-white text-black border-t-2 border-black cursor-none overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="w-full lg:col-span-6">
            <div className="inline-block px-3 py-1.5 bg-[#FFD700] text-black font-archivo font-bold text-[10px] sm:text-xs mb-8 lg:mb-12 uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              FRAME_001
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              /* 1. whitespace-nowrap: prevents letters like 'N' from jumping to next line
                 2. xl:text-[9.5vw]: scales size based on window width to prevent overlap
              */
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8vw] xl:text-[9.5vw] font-archivo leading-[0.8] tracking-tighter uppercase mb-8 text-black whitespace-nowrap"
            >
              DESIGN<br />
              AS A<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                CORE
              </span>
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:col-span-6 lg:pt-32 xl:pt-56">
            <div className="space-y-12 xl:space-y-20">
              <p className="text-2xl sm:text-3xl lg:text-2xl xl:text-5xl font-medium leading-[1.1] tracking-tight text-black uppercase max-w-2xl font-archivo">
                PixelVerse is the ultimate <span className="text-[#FFD700] bg-black px-2 italic whitespace-nowrap">Design Hackathon</span> & battleground where Form doesn't just follow Function - it <span className="underline decoration-4 decoration-[#FFD700]">Elevates it</span>.
              </p>

              <div className="pt-10 border-t-4 border-black grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[10px] font-bold font-archivo text-black mb-4 uppercase tracking-widest">MAX_PARTICIPANTS</div>
                  <div className="text-5xl sm:text-6xl lg:text-5xl xl:text-8xl font-archivo tracking-tighter text-black drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">150+</div>
                  <div className="text-[10px] font-bold uppercase mt-3 tracking-widest text-black/60">PLAYERS_READY</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[10px] font-bold font-archivo text-black mb-4 uppercase tracking-widest">UPTIME_WINDOW</div>
                  <div className="text-5xl sm:text-6xl lg:text-5xl xl:text-8xl font-archivo tracking-tighter text-black drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">8H</div>
                  <div className="text-[10px] font-bold uppercase mt-3 tracking-widest text-black/60">NON_STOP_BUILD</div>
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