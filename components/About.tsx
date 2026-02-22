import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-24 bg-white text-black border-t-2 border-black overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-20 items-start">

          {/* Left Column: Headline */}
          <div className="w-full lg:col-span-5 xl:col-span-6">
            <div className="inline-block px-3 py-1.5 bg-[#FFD700] text-black font-archivo font-bold text-[10px] sm:text-xs mb-8 uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              FRAME_001
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[15vw] leading-[0.8] sm:text-8xl lg:text-[7vw] xl:text-[9.5rem] font-archivo font-black tracking-tighter uppercase mb-8 text-black whitespace-nowrap"
            >
              DESIGN<br />
              AS A<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                CORE
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Content & Stats */}
          <div className="w-full lg:col-span-7 xl:col-span-6 lg:pt-20 xl:pt-40">
            <div className="space-y-12 xl:space-y-16">
              
              {/* Fluid Paragraph */}
              <p className="text-2xl sm:text-4xl lg:text-[2.8vw] xl:text-5xl font-archivo font-bold leading-[1.1] tracking-tight text-black uppercase max-w-full lg:max-w-[90%]">
                PixelVerse is the ultimate <br className="hidden xl:block" />
                <span className="inline-block text-[#FFD700] bg-black px-2 py-1 italic my-1">Design Hackathon</span> 
                <span className="mx-2">&</span> battleground where Form doesn't just follow Function - it <span className="underline decoration-4 decoration-[#FFD700]">Elevates it</span>.
              </p>

              {/* Stats Section: Fixed Collision */}
              <div className="pt-10 border-t-4 border-black flex flex-wrap gap-x-12 gap-y-8 lg:gap-x-8 xl:gap-x-20">
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="min-w-fit"
                >
                  <div className="text-[10px] font-bold font-archivo text-black mb-2 uppercase tracking-widest opacity-60">MAX_PARTICIPANTS</div>
                  <div className="text-6xl sm:text-7xl lg:text-[5vw] xl:text-8xl font-archivo font-black tracking-tighter text-black drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">
                    150+
                  </div>
                  <div className="text-[10px] font-bold uppercase mt-2 tracking-widest text-black/40">PLAYERS_READY</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="min-w-fit"
                >
                  <div className="text-[10px] font-bold font-archivo text-black mb-2 uppercase tracking-widest opacity-60">UPTIME_WINDOW</div>
                  <div className="text-6xl sm:text-7xl lg:text-[5vw] xl:text-8xl font-archivo font-black tracking-tighter text-black drop-shadow-[4px_4px_0px_rgba(255,215,0,1)]">
                    8H
                  </div>
                  <div className="text-[10px] font-bold uppercase mt-2 tracking-widest text-black/40">NON_STOP_BUILD</div>
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