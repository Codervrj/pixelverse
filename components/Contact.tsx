import React from 'react';
import { triggerHaptic } from '../hooks/useHaptic';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050008] relative text-white min-h-screen overflow-hidden">

      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-yellow-400" />
            <span className="font-pixel text-yellow-400 text-xs tracking-[0.3em]">COMM_LINK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-archivo text-white uppercase tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">GET IN TOUCH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-10">
            <div className="p-5 sm:p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative group">
              <p className="text-zinc-500 text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight mb-6 sm:mb-8">
                Any query, suggestion or comment? Feel free to contact us.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group/phone">
                  <div className="w-14 h-14 flex items-center justify-center p-3 bg-white/5 border border-white/10 group-hover/phone:border-yellow-400/50 transition-colors">
                    <Phone className="text-yellow-400" size={24} />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="text-white text-sm sm:text-lg font-bold uppercase tracking-tight hover:text-yellow-400 transition-colors block cursor-default"
                    >
                      +91 98765 43210
                    </a>
                    <a
                      href="#"
                      className="text-white text-sm sm:text-lg font-bold uppercase tracking-tight hover:text-yellow-400 transition-colors block cursor-default"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-pixel text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-4 sm:mb-6">
                  Any Queries?
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 group/mail">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center p-2 sm:p-3 bg-white/5 border border-white/10 group-hover/mail:border-yellow-400/50 transition-colors shrink-0">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Email us at</p>
                    <a
                      href="mailto:pixelverse.gdg2026@gmail.com"
                      onClick={() => triggerHaptic('medium')}
                      className="text-white text-sm sm:text-lg font-bold tracking-tight hover:text-yellow-400 transition-colors break-all"
                    >
                      pixelverse.gdg2026@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-pixel text-xs text-zinc-500 uppercase tracking-widest">
              LOCATION_DATA
            </h3>

            <div className="relative overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all group">
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[#050008]/90 border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
                <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">SIES Graduate School...</p>
                <a
                  href="https://maps.google.com/?q=SIES+Graduate+School+of+Technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-400 hover:underline uppercase tracking-widest font-bold"
                >
                  View larger map
                </a>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=SIES+Graduate+School+of+Technology,+Nerul,+Navi+Mumbai&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[50%] contrast-110 brightness-75 sm:h-[450px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050008]/40 to-transparent pointer-events-none" />

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-yellow-400/0 group-hover:border-yellow-400 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;