import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  return (
    <div className="py-32 bg-[#F5F5DC] overflow-hidden border-t-2 border-black text-black cursor-none">
      <div className="mb-12 text-center">
        <div className="text-xs font-bold font-archivo text-black uppercase tracking-[0.3em] cursor-target">Our Allies</div>
      </div>

      {/* Infinite Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden group bg-white border-y-2 border-black py-8 cursor-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i, idx) => (
            <div 
              key={idx} 
              className="text-5xl md:text-8xl font-archivo text-black/20 hover:text-black transition-colors uppercase cursor-none cursor-target"
            >
              COMPANY_{i}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-5 bg-black text-white font-archivo text-xl uppercase tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-none cursor-target"
        >
          BECOME A SPONSOR
        </motion.button>
      </div>
    </div>
  );
};

export default Sponsors;