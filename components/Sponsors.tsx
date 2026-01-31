
import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  return (
    <div className="py-32 bg-zinc-950 overflow-hidden border-y border-white/5">
      <div className="mb-12 text-center">
        <div className="text-[10px] font-pixel text-zinc-500 uppercase tracking-[0.3em]">Our Allies</div>
      </div>
      
      {/* Infinite Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[1,2,3,4,5,1,2,3,4,5].map((i, idx) => (
            <div key={idx} className="text-5xl md:text-8xl font-archivo text-white/20 hover:text-cyan-400 transition-colors cursor-pointer uppercase">
              COMPANY_{i}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="px-10 py-5 bg-white text-black font-archivo text-xl rounded-full uppercase tracking-tighter"
        >
          BECOME A SPONSOR
        </motion.button>
      </div>
    </div>
  );
};

export default Sponsors;
