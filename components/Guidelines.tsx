import React from "react";

const Guidelines: React.FC = () => {
  return (
    <section 
      id="guidelines" 
      className="relative pt-20 md:pt-32 pb-24 px-4 md:px-10 bg-[rgb(245,245,220)] text-[#050008] overflow-hidden border-t-2 border-[#050008] cursor-none"
    >
      
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

        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="bg-[#050008] px-4 py-1 mb-4">
            <span className="font-pixel text-[10px] md:text-xs tracking-[0.4em] text-[#FFD700] uppercase font-bold">
              RULES_PROTOCOL
            </span>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-archivo font-black tracking-tighter uppercase leading-none">
            RULES &
          </h2>
          <h2 
            className="text-7xl md:text-9xl font-archivo font-black tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: '2px #050008' }}
          >
            GUIDELINES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          <TechBox id="01" title="Originality">
            <div className="space-y-4">
              <h4 className="text-xl font-archivo font-black uppercase leading-tight tracking-tight border-b-2 border-[#FFD700] inline-block">
                No Pre-built UI Kits
              </h4>
              <p className="text-sm md:text-base text-[#050008] font-bold uppercase tracking-tight leading-relaxed">
                You cannot open a previously saved Figma file. All frames and layouts must be created after <span className="underline decoration-[#FFD700] decoration-4 font-black">the event has started</span>.
              </p>
            </div>
          </TechBox>

          <TechBox id="02" title="Assets">
            <div className="space-y-4">
              <h4 className="text-xl font-archivo font-black uppercase leading-tight tracking-tight border-b-2 border-[#FFD700] inline-block">
                Allowed Resources
              </h4>
              <p className="text-sm md:text-base text-[#050008] font-bold uppercase tracking-tight leading-relaxed">
                You MAY use open-source icon packs (Phosphor, Material, etc.), stock photos (Unsplash), and 3D illustrations.
              </p>
            </div>
          </TechBox>

          <TechBox id="03" title="AI Policy">
            <div className="space-y-6">
              <div className="cursor-target">
                <span className="font-pixel text-[10px] text-green-600 block mb-2 font-bold uppercase tracking-widest">
                  [ STATUS: ALLOWED ]
                </span>
                <p className="text-sm font-archivo font-black leading-snug uppercase tracking-tight">
                  Generating images (Midjourney) or text (ChatGPT).
                </p>
              </div>
              <div className="pt-6 border-t-2 border-[#050008]/10 cursor-target">
                <span className="font-pixel text-[10px] text-red-600 block mb-2 font-bold uppercase tracking-widest">
                  [ STATUS: BANNED ]
                </span>
                <p className="text-sm font-archivo font-black leading-snug mb-3 uppercase tracking-tight">
                  UI Layouts/Wireframes (Uizard, Galileo AI).
                </p>
                <p className="text-[10px] font-pixel italic text-[#050008]/50 leading-tight uppercase tracking-tighter">
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

const TechBox = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <div className="cursor-target group relative flex w-full">
    <div className="absolute inset-0 bg-[#FFD700] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
    <div className="relative bg-white border-4 border-[#050008] p-6 md:p-10 flex flex-col w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="absolute top-0 right-0 bg-[#050008] text-[#FFD700] px-3 py-1 font-pixel text-[10px] font-bold">
        {id}
      </div>
      <h3 className="text-2xl font-archivo font-black mb-8 uppercase tracking-tighter self-start leading-none">
        {title}
      </h3>
      <div className="relative z-10 flex-grow">
        {children}
      </div>
    </div>
  </div>
);

export default Guidelines;