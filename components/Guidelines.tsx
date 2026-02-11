import React from "react";

const Guidelines: React.FC = () => {
  return (
    <section id="guidelines" className="relative pt-32 pb-12 px-6 bg-[rgb(245,245,220)] text-[#050008] overflow-hidden border-t-2 border-[#050008]">
      
      {/* YELLOW GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #FFD700 1px, transparent 1px),
            linear-gradient(to bottom, #FFD700 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-[#FFD700]" />
            <span className="font-pixel text-[10px] tracking-[0.3em] text-[#050008]/50">PROTOCOLS</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-archivo font-black tracking-tighter uppercase leading-none">
            Rules & <br />
            <span className="text-[#FFD700]">Guidelines</span>
          </h2>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* BOX 01: UI KITS */}
          <TechBox id="01" title="Originality">
            <div className="space-y-4">
              <h4 className="text-xl font-bold uppercase leading-tight">No Pre-built UI Kits</h4>
              <p className="text-sm md:text-base text-[#050008]/70 font-medium leading-relaxed">
                You cannot open a previously saved Figma file. All frames and layouts must be created after <span className="text-[#050008] font-black underline decoration-[#FFD700]">the event has started</span>.
              </p>
            </div>
          </TechBox>

          {/* BOX 02: ASSETS */}
          <TechBox id="02" title="Assets">
            <div className="space-y-4">
              <h4 className="text-xl font-bold uppercase leading-tight">Allowed Resources</h4>
              <p className="text-sm md:text-base text-[#050008]/70 font-medium leading-relaxed">
                You MAY use open-source icon packs (Phosphor, Material, etc.), stock photos (Unsplash), and 3D illustrations.
              </p>
            </div>
          </TechBox>

          {/* BOX 03: AI POLICY */}
          <TechBox id="03" title="AI Policy">
            <div className="space-y-6">
              <div>
                <span className="font-pixel text-[9px] text-green-600 block mb-1">● ALLOWED</span>
                <p className="text-sm font-bold leading-snug">
                  Generating images (Midjourney) or text (ChatGPT).
                </p>
              </div>
              <div className="pt-4 border-t border-[#050008]/10">
                <span className="font-pixel text-[9px] text-red-600 block mb-1">● BANNED</span>
                <p className="text-sm font-bold leading-snug mb-2">
                  UI Layouts/Wireframes (Uizard, Galileo AI).
                </p>
                <p className="text-[10px] italic opacity-60 font-medium leading-tight">
                  "We want to see your design skills, not the bot's."
                </p>
              </div>
            </div>
          </TechBox>

        </div>
        </div>
    </section>
  );
};

/* ================= THE TECH BOX COMPONENT ================= */

const TechBox = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <div className="cursor-target group relative flex">
    {/* The Layered Shadow */}
    <div className="absolute inset-0 bg-[#FFD700] translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300" />
    
    {/* The Main Container */}
    <div className="relative bg-white border-4 border-[#050008] p-6 md:p-8 flex flex-col w-full">
      <div className="absolute top-0 right-0 bg-[#050008] text-[#F5F5DC] px-3 py-1 font-pixel text-[9px]">
        {id}
      </div>

      <h3 className="text-xl font-archivo font-black mb-6 uppercase tracking-tighter border-b-2 border-[#FFD700] self-start">
        {title}
      </h3>

      <div className="relative z-10 font-archivo flex-grow">
        {children}
      </div>
    </div>
  </div>
);

export default Guidelines;