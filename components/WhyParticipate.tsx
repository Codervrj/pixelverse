
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Rocket, Zap } from 'lucide-react';

const reasons = [
  { title: 'ELITE MENTORSHIP', desc: 'Get direct feedback from senior designers at top tech firms.', icon: Zap },
  { title: 'NETWORK UPGRADE', desc: 'Connect with 500+ potential co-founders and hiring partners.', icon: Users },
  { title: 'BUILD YOUR REPO', desc: 'A 48-hour sprint that looks amazing on any portfolio.', icon: Rocket },
  { title: 'EPIC SWAG', desc: 'Limited edition PixelVerse hoodie and mechanical keyboards.', icon: Award },
];

const WhyParticipate: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-archivo text-center mb-24 tracking-tighter uppercase leading-none">
          WHY <span className="text-zinc-300">ENTER?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 border-4 border-black bg-zinc-50 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000]"
            >
              <reason.icon size={40} className="mb-6 md:size-48 text-cyan-600" />
              <h3 className="text-3xl md:text-4xl font-archivo mb-4 tracking-tighter uppercase">{reason.title}</h3>
              <p className="text-zinc-600 text-lg md:text-xl leading-snug uppercase tracking-tight">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
