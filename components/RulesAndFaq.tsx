
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Who can participate?", a: "Students and young professionals interested in UI/UX." },
  { q: "Online or Offline?", a: "PivelVerse 2026 hackathon will consist of 2 rounds: Elimination Round (Online) and Final Round (Offline)" },
  { q: "What tools can we use?", a: "Figma, Adobe XD, Sketch, or any design tool of your choice." },
  { q: "How will judging be done?", a: "Based on Empathy & UX, Visual Design (UI), Problem Solving, Innovation, Presentation" },
];

const RulesAndFaq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-32 px-6 md:px-10 bg-[#F5F5DC] text-black border-t-2 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-black font-archivo text-4xl md:text-7xl mb-16 text-center tracking-tighter uppercase">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full bg-white p-6 md:p-8 flex justify-between items-center text-left border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <span className="text-black font-archivo font-bold text-lg md:text-xl uppercase text-left">{faq.q}</span>
                <span className="text-black text-xl font-bold">{open === idx ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#FFD700] text-black p-6 font-archivo font-medium text-base md:text-lg border-x-2 border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">
                      {faq.a}
                    </div>
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
