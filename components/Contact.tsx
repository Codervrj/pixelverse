
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#050008] py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Text - Responsive Visibility */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] md:text-[20rem] font-archivo opacity-[0.02] pointer-events-none whitespace-nowrap select-none">
        REGISTER NOW REGISTER NOW REGISTER NOW
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass-panel p-8 md:p-24 rounded-[40px] md:rounded-[80px] text-center border-white/10 backdrop-blur-3xl">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl xl:text-[9rem] font-archivo tracking-tighter leading-[0.9] mb-12 uppercase"
          >
            JOIN THE<br /><span className="text-cyan-400">MAIN FRAME</span>
          </motion.h2>

          <p className="text-zinc-500 font-pixel text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-16">
            // SEATS_ARE_LIMITED // INITIALIZE_ONBOARDING
          </p>

          <div className="max-w-xl mx-auto w-full space-y-6">
            <div className="relative group">
              <input
                type="email"
                placeholder="COMM_LINK@EMAIL.COM"
                className="w-full bg-white/5 border border-white/10 pl-6 md:pl-10 pr-16 md:pr-24 py-5 md:py-8 rounded-full text-white font-archivo text-base md:text-2xl placeholder:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all uppercase"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-white rounded-full flex items-center justify-center text-black hover:bg-cyan-400 transition-colors">
                <ArrowRight size={20} className="md:size-32" />
              </button>
            </div>
            <p className="text-zinc-700 text-[7px] md:text-[9px] font-pixel uppercase tracking-widest px-4">
              Access is granted based on design portfolio and quest compatibility.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10">
            <a href="mailto:hello@pixelverse.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-all">
                <Mail size={20} className="text-white group-hover:text-black md:size-24" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-[9px] font-pixel text-zinc-500 uppercase tracking-widest">SUPPORT_LINE</div>
                <div className="font-archivo text-xl md:text-2xl text-white uppercase tracking-tighter">HELLO@PIXELVERSE.COM</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
