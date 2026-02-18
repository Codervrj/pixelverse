import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  return (
    <div className="relative py-32 bg-[#F5F5DC] overflow-hidden border-t-2 border-black text-black cursor-none">
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

      <div className="relative z-10 mb-12 text-center">
        <div className="text-xs font-bold font-archivo text-black uppercase tracking-[0.3em] cursor-target">Our Allies</div>
      </div>

      <div className="relative z-10 flex whitespace-nowrap overflow-hidden group bg-white border-y-2 border-black py-8 cursor-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[...Array(8)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-3 cursor-target">
                <img 
                  src="/fofmumbai_primarylogo.png" 
                  alt="Friends of Figma" 
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <span className="text-xs font-bold font-archivo text-black/60 uppercase tracking-wider whitespace-nowrap">
                  Community Partner
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 cursor-target">
                <img 
                  src="/Unstop-Logo-Blue-Medium.png" 
                  alt="Unstop" 
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <span className="text-xs font-bold font-archivo text-black/60 uppercase tracking-wider whitespace-nowrap">
                  Platform Partner
                </span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 text-center">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkryy8Vxf13kIUfA_aqFarwxd72Bxubq14HpSmR9E3ft-VwA/viewform" target="_blank" rel="noopener noreferrer" className="inline-block" 
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-10 py-5 bg-black text-white font-archivo text-xl uppercase tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-none cursor-target"
    >
      BECOME A SPONSOR
    </motion.button>
  </a>
</div>
    </div>
  );
};

export default Sponsors;