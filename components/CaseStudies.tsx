
import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'SONORI',
    category: 'BRANDING & VISION',
    imageUrl: 'https://picsum.photos/seed/study1/800/1000',
    color: '#ff3300'
  },
  {
    id: '2',
    title: 'CANNES',
    category: 'FESTIVAL DESIGN',
    imageUrl: 'https://picsum.photos/seed/study2/800/1000',
    color: '#3300ff'
  },
  {
    id: '3',
    title: 'VIZIO',
    category: 'PRODUCT DESIGN',
    imageUrl: 'https://picsum.photos/seed/study3/800/1000',
    color: '#00ff33'
  }
];

const CaseStudyCard: React.FC<{ project: CaseStudy, index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
           <span className="text-white text-xs font-black tracking-widest">{project.category}</span>
           <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
             ↗
           </div>
        </div>
        <h3 className="text-white text-5xl font-archivo tracking-tighter">{project.title}</h3>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white text-black py-24 px-6 md:px-10">
      <div className="mb-20 text-center">
        <p className="text-xs font-bold tracking-[0.2em] mb-4 uppercase">Selected</p>
        <h2 className="text-6xl md:text-[10rem] font-archivo leading-none tracking-tighter uppercase">
          Case Studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((project, idx) => (
          <CaseStudyCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
