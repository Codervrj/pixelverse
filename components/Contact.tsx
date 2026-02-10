import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-7xl w-full border-2 border-cyan-400/30 rounded-3xl p-8 md:p-16 bg-[#0a0a0a] backdrop-blur-sm shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Any query, suggestion or comment?
                <br />
                Feel free to contact us.
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all group-hover:scale-110">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="space-y-1">
                  <a 
                    href="tel:+918828046919" 
                    className="text-white text-xl font-medium hover:text-cyan-400 transition-colors block"
                  >
                    +91 88280 46919
                  </a>
                  <a 
                    href="tel:+919833875297" 
                    className="text-white text-xl font-medium hover:text-cyan-400 transition-colors block"
                  >
                    +91 98338 75297
                  </a>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 tracking-tight">
                Any Queries?
              </h3>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all group-hover:scale-110">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email us at:</p>
                  <a 
                    href="mailto:bytecamp@siesgst.ac.in" 
                    className="text-white text-lg font-medium hover:text-cyan-400 transition-colors break-all"
                  >
                    pixelverse@siesgst.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Find us in Map
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] group hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all">
              <div className="absolute top-4 left-4 z-10 bg-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-900">SIES Graduate School...</p>
                <a 
                  href="https://maps.google.com/?q=SIES+Graduate+School+of+Technology" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
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
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;