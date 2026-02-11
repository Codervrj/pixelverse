import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#050008] py-20 px-6 md:px-12 flex items-center justify-center cursor-none">
      <div className="max-w-7xl w-full border-4 border-[#FFD700] p-8 md:p-16 bg-[#050008] relative">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-archivo font-black text-[#FFD700] mb-4 uppercase tracking-tighter">
                Get in <br /> Touch
              </h2>
              <p className="text-[#F5F5DC]/60 font-medium text-lg italic">
                Any query, suggestion or comment? <br />
                System is open for communication.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-target">
                <div className="w-14 h-14 bg-[#FFD700] flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_#F5F5DC]">
                  <Phone className="text-black" size={24} />
                </div>
                <div className="space-y-1">
                  <a href="tel:+918828046919" className="text-[#F5F5DC] text-xl font-archivo font-bold hover:text-[#FFD700] transition-colors block cursor-none">
                    +91 88280 46919
                  </a>
                  <a href="tel:+919833875297" className="text-[#F5F5DC] text-xl font-archivo font-bold hover:text-[#FFD700] transition-colors block cursor-none">
                    +91 98338 75297
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-target">
                <div className="w-14 h-14 bg-[#FFD700] flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_#F5F5DC]">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <a href="mailto:pixelverse@siesgst.ac.in" className="text-[#F5F5DC] text-lg font-archivo font-bold hover:text-[#FFD700] transition-colors break-all cursor-none">
                    pixelverse@siesgst.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-archivo font-black text-[#F5F5DC] uppercase tracking-tighter">
              Location_Protocol
            </h2>
            <div className="relative border-4 border-[#FFD700] overflow-hidden group">
       
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2977457084824!2d73.0156!3d19.0433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eadb0bd749f!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale contrast-125 brightness-75 pointer-events-none"
              />
              <div className="absolute inset-0 bg-[#FFD700]/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;