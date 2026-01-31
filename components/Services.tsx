
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  { id: '1', number: '01', title: 'STRATEGY', imageUrl: 'https://picsum.photos/seed/serv1/600/400' },
  { id: '2', number: '02', title: 'IDENTITY', imageUrl: 'https://picsum.photos/seed/serv2/600/400' },
  { id: '3', number: '03', title: 'WEBSITES', imageUrl: 'https://picsum.photos/seed/serv3/600/400' },
  { id: '4', number: '04', title: 'CAMPAIGNS', imageUrl: 'https://picsum.photos/seed/serv4/600/400' },
];

const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-10 relative">
      <div className="mb-20">
        <h2 className="text-4xl md:text-8xl font-archivo tracking-tighter mb-4">BUILT TO LAST</h2>
        <div className="h-px bg-white/20 w-full" />
      </div>

      <div className="relative">
        {services.map((service) => (
          <div 
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative py-8 border-b border-white/20 flex items-center justify-between cursor-pointer transition-colors hover:bg-white hover:text-black px-4"
          >
            <div className="flex items-center gap-8 md:gap-16">
               <span className="text-lg md:text-2xl font-archivo opacity-50 group-hover:opacity-100">{service.number}</span>
               <h3 className="text-5xl md:text-[8rem] font-archivo leading-none tracking-tighter">
                 {service.title}
               </h3>
            </div>
            
            {/* Animated Image Preview */}
            <AnimatePresence>
              {hoveredId === service.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  className="hidden lg:block absolute right-[20%] top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                >
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-64 h-48 object-cover rounded-lg shadow-2xl border-4 border-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="hidden md:block text-5xl font-archivo transition-transform group-hover:translate-x-4">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
