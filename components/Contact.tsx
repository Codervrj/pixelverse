
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black py-24 md:py-40 px-6 md:px-12 relative overflow-hidden text-white border-t-2 border-white">
      {/* Background Decorative Text - Responsive Visibility */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] md:text-[20rem] font-archivo opacity-[0.05] pointer-events-none whitespace-nowrap select-none text-white">
        REGISTER NOW REGISTER NOW REGISTER NOW
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="p-8 md:p-24 rounded-[40px] md:rounded-[80px] text-center border-4 border-white">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl xl:text-[9rem] font-archivo tracking-tighter leading-[0.9] mb-12 uppercase text-white"
          >
            JOIN THE<br /><span className="text-[#FFD700]">REVOLUTION</span>
          </motion.h2>

          <p className="text-zinc-400 font-bold font-archivo text-xs md:text-sm uppercase tracking-[0.4em] mb-16">
            // SEATS_ARE_LIMITED // INITIALIZE_ONBOARDING
          </p>

          <div className="max-w-xl mx-auto w-full space-y-6">
            <div className="relative group">
              <input
                type="email"
                placeholder="YOUR_EMAIL@DESIGN.COM"
                className="w-full bg-white border-2 border-black pl-6 md:pl-10 pr-16 md:pr-24 py-5 md:py-8 rounded-full text-black font-archivo text-base md:text-2xl placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all uppercase shadow-[8px_8px_0px_0px_rgba(255,215,0,1)]"
              />
              <button className="absolute right-3 top-3 bottom-3 aspect-square bg-black rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-black transition-colors">
                <ArrowRight size={24} className="md:size-32" />
              </button>
            </div>
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold font-archivo uppercase tracking-widest px-4">
              Access is granted based on design portfolio and quest compatibility.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10">
            <a href="mailto:hello@pixelverse.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-all border-2 border-transparent group-hover:border-white">
                <Mail size={24} className="text-black group-hover:text-black md:size-28" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-[10px] font-bold font-archivo text-zinc-500 uppercase tracking-widest">SUPPORT_LINE</div>
                <div className="font-archivo text-xl md:text-2xl text-white uppercase tracking-tighter group-hover:text-[#FFD700] transition-colors">HELLO@PIXELVERSE.COM</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
