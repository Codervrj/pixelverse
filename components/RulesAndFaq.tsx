
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Who can participate?", a: "Students and young professionals interested in UI/UX." },
  { q: "Online or Offline?", a: "PixelVerse 2025 is a fully offline event at SIES GST." },
  { q: "What tools can we use?", a: "Figma, Adobe XD, Sketch, or any design tool of your choice." },
  { q: "How will judging be done?", a: "Based on creativity, utility, and design fidelity." },
];

const RulesAndFaq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-32 px-6 md:px-10 bg-[#0c0014]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-cyan-400 font-pixel text-4xl md:text-7xl mb-16 text-center tracking-tighter uppercase">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full bg-pink-theme p-6 md:p-8 flex justify-between items-center text-left border-4 border-black hover:opacity-90 transition-all"
              >
                <span className="text-white font-pixel text-[12px] md:text-[14px] uppercase text-left">{faq.q}</span>
                <span className="text-white text-xl">{open === idx ? '▲' : '▼'}</span>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white text-black p-6 font-pixel text-[12px] uppercase border-x-4 border-b-4 border-black"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesAndFaq;
