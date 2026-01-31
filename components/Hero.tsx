
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Shield, Terminal, ChevronRight, Cpu } from 'lucide-react';

const DataStream = () => {
  const [data, setData] = useState("0.0000");
  useEffect(() => {
    const interval = setInterval(() => {
      setData(Math.random().toFixed(4));
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return <span className="font-pixel text-[8px] text-zinc-500">{data}</span>;
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen lg:min-h-[115vh] flex items-center justify-center pt-32 pb-24 overflow-visible px-6 md:px-12 xl:px-20">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] aspect-square bg-cyan-500/[0.05] blur-[250px] rounded-full pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Content Area */}
          <div className="lg:col-span-12 xl:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex max-w-full flex-wrap justify-center items-center gap-3 px-5 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-10 backdrop-blur-md"
            >
              <Cpu size={14} className="text-cyan-400 animate-pulse shrink-0" />
              <span className="font-pixel text-[9px] md:text-[11px] tracking-[0.2em] text-cyan-400 uppercase break-all sm:break-normal text-center">MAINFRAME_ONLINE // V2.0.5</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full"
            >
              <h1
                className="glitch text-[14vw] sm:text-[12vw] lg:text-[10vw] xl:text-[9.5rem] 2xl:text-[12rem] font-archivo leading-[0.8] tracking-tighter uppercase mb-10 text-white drop-shadow-2xl text-center lg:text-left"
                
              >
                PIXEL <span className="text-cyan-400">VERSE</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-start gap-6 lg:gap-8 mb-14 max-w-3xl"
            >
              <div className="hidden sm:block w-1.5 h-24 bg-gradient-to-b from-cyan-400 via-pink-500 to-transparent rounded-full" />
              <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-medium leading-[1.2] uppercase tracking-tight text-center lg:text-left px-4 lg:px-0">
                Architect the next generation of <span className="text-white border-b-2 border-cyan-400/50">Immersive Experience</span>.
                A design-led quest for high-fidelity creators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 w-full"
            >
              <button className="group relative px-8 md:px-14 py-5 md:py-7 bg-white text-black font-archivo text-xl md:text-2xl uppercase tracking-tighter transition-all hover:bg-cyan-400 hover:-translate-y-1 shadow-lg">
                <span className="relative z-10 flex items-center gap-4">
                  INITIALIZE_QUEST <ChevronRight size={24} />
                </span>
                <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-10" />
              </button>

              <button className="px-8 md:px-10 py-5 md:py-7 border-2 border-white/10 bg-white/5 backdrop-blur-2xl text-white font-archivo text-xl md:text-2xl uppercase tracking-tighter hover:bg-white/10 transition-all">
                LORE_BOOK.EXE
              </button>
            </motion.div>
          </div>

          {/* Holographic OS Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="lg:col-span-5 xl:col-span-4 w-full hidden xl:block"
          >
            <div className="relative glass-panel rounded-[2.5rem] border border-white/20 p-2 shadow-2xl overflow-hidden">
              <div className="bg-[#08080c] rounded-[2.2rem] overflow-hidden">
                <div className="bg-white/[0.03] p-6 flex justify-between items-center border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  </div>
                  <span className="font-pixel text-[8px] text-zinc-500 uppercase tracking-widest">ENCRYPTED_SESSION</span>
                </div>
                <div className="p-10 space-y-12">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="text-[9px] font-pixel text-zinc-600">UPTIME</div>
                      <div className="text-4xl xl:text-5xl font-archivo text-white tracking-tighter">48:00:00</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-pixel text-green-400">STATUS_OK</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <div className="flex gap-4 items-center">
                        <Terminal size={16} className="text-zinc-500" />
                        <span className="text-[9px] font-pixel text-zinc-400">TELEMETRY</span>
                      </div>
                      <DataStream />
                    </div>
                    <div className="h-32 bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden relative">
                      <svg className="absolute inset-0 w-full h-full opacity-20">
                        <motion.path
                          d="M0 60 Q 50 20 100 80 T 200 40 T 300 90"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          animate={{
                            d: [
                              "M0 60 Q 50 20 100 80 T 200 40 T 300 90",
                              "M0 40 Q 50 90 100 30 T 200 70 T 300 50"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        />
                      </svg>
                      <div className="relative z-10 flex flex-col gap-1 font-pixel text-[7px]">
                        <div className="text-cyan-400/80"> BUFFER_SYNC... OK</div>
                        <div className="text-zinc-700"> DATA_UPLINK_STABLE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
