
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 xl:py-64 px-8 md:px-16 xl:px-24 bg-white text-black rounded-t-[4rem] md:rounded-t-[6rem] lg:rounded-t-[10rem]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          <div className="w-full lg:col-span-6">
            <div className="inline-block px-5 py-2 bg-black text-white font-pixel text-[10px] mb-8 lg:mb-12 uppercase tracking-[0.4em] max-w-full break-words">
              MISSION_LOG: 001
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10vw] xl:text-[11rem] font-archivo leading-[0.78] tracking-tighter uppercase mb-12"
            >
              DESIGN<br />AS A<br /><span className="text-zinc-400">CORE</span>
            </motion.h2>
          </div>

          <div className="w-full lg:col-span-6 lg:pt-32 xl:pt-48">
            <div className="space-y-16 xl:space-y-24">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-medium leading-[1.1] tracking-tight text-black uppercase max-w-3xl">
                PixelVerse is a high-stakes arena where we dismantle the boundaries between <span className="text-zinc-400 italic">Technical Logic</span> and <span className="text-zinc-300">Aesthetic Chaos</span>.
              </p>

              <div className="pt-16 border-t-2 border-black/5 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[11px] font-pixel text-zinc-400 mb-6 uppercase tracking-widest">MAX_PARTICIPANTS</div>
                  <div className="text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-archivo tracking-tighter">500+</div>
                  <div className="text-sm font-bold uppercase mt-4 tracking-widest text-zinc-400">PLAYERS_READY</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[11px] font-pixel text-zinc-400 mb-6 uppercase tracking-widest">UPTIME_WINDOW</div>
                  <div className="text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-archivo tracking-tighter">48H</div>
                  <div className="text-sm font-bold uppercase mt-4 tracking-widest text-zinc-400">NON_STOP_BUILD</div>
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
