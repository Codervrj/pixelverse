import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 pb-0 bg-[#F5F5DC] relative text-[#050008] min-h-screen overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#050008 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      {/* Background gold grid */}
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

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1 bg-black text-[#FFD700] font-bold text-xs mb-4 uppercase tracking-widest">
            COMM_LINK
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-[#050008]">
            GET IN<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #050008' }}>
              TOUCH
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div className="bg-white border-2 border-[#050008] rounded-2xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[#050008]/60 text-base md:text-lg font-bold uppercase tracking-tight mb-8">
                Any query, suggestion or comment? Feel free to contact us.
              </p>

              {/* Phone Numbers */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFD700] flex items-center justify-center border-2 border-[#050008] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                    <Phone className="text-[#050008]" size={24} />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+918828046919"
                      className="text-[#050008] text-lg font-bold uppercase tracking-tight hover:text-[#FFD700] transition-colors block"
                    >
                      +91 88280 46919
                    </a>
                    <a
                      href="tel:+919833875297"
                      className="text-[#050008] text-lg font-bold uppercase tracking-tight hover:text-[#FFD700] transition-colors block"
                    >
                      +91 98338 75297
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-6 text-[#050008]">
                  Any Queries?
                </h3>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFD700] flex items-center justify-center border-2 border-[#050008] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                    <Mail className="text-[#050008]" size={24} />
                  </div>
                  <div>
                    <p className="text-[#050008]/40 text-xs font-bold uppercase tracking-widest mb-1">Email us at</p>
                    <a
                      href="mailto:pixelverse@siesgst.ac.in"
                      className="text-[#050008] text-lg font-bold tracking-tight hover:text-[#FFD700] transition-colors break-all"
                    >
                      pixelverse@siesgst.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#050008]">
              Find Us <span className="text-transparent" style={{ WebkitTextStroke: '1px #050008' }}>On Map</span>
            </h3>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#050008] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="absolute top-4 left-4 z-10 bg-white border-2 border-[#050008] rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm font-bold text-[#050008] uppercase tracking-tight">SIES Graduate School...</p>
                <a
                  href="https://maps.google.com/?q=SIES+Graduate+School+of+Technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFD700] hover:underline uppercase tracking-widest font-bold"
                >
                  View larger map
                </a>
              </div>

              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2977457084824!2d73.0156!3d19.0433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eadb0bd749f!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-110 brightness-95"
              />

              {/* Map overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5DC]/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;