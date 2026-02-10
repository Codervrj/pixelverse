import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#F5F5DC] text-[#050008] py-10 px-6 md:px-12 text-center overflow-hidden">
      
  
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#050008 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />

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


      <div className="relative z-10 max-w-7xl mx-auto">
        

        <div className="mb-16 relative inline-block group">

          <div className="absolute -top-4 -left-6 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <h2 className="text-4xl md:text-5xl font-archivo tracking-[0.6em] text-[#050008] font-black leading-none">
            PIXELVERSE
          </h2>
  
          <div className="absolute -bottom-6 left-0 w-full flex justify-between items-center px-1">

            <div className="h-[1px] flex-grow mx-4 bg-[#FFD700]/30" />
            <span className="font-pixel text-[8px] text-[#050008]/40 font-bold tracking-widest">VER 1.0</span>
          </div>


          <div className="absolute -bottom-4 -right-6 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>


        <div className="flex justify-center gap-8 mb-16 mt-8">
          {['IG', 'LI', 'TW'].map((social) => (
            <div 
              key={social} 
              className="w-12 h-12 bg-white border-2 border-[#050008] flex items-center justify-center hover:bg-[#FFD700] transition-all duration-300 cursor-pointer group relative shadow-[5px_5px_0px_0px_#050008] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span className="text-[11px] font-pixel font-bold group-hover:scale-110 transition-transform">
                {social}
              </span>
            </div>
          ))}
        </div>


        <div className="pt-10 border-t border-[#050008]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#FFD700] animate-pulse" />
         
          </div>

          <p className="text-[10px] font-pixel text-[#050008]/40 uppercase tracking-[0.3em]">
            © 2026 PIXELVERSE // GDGoC_SIESGST
          </p>


          <div className="flex items-center gap-1 opacity-40">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-1 items-center">
                <div className={`bg-[#050008] w-[1px] ${i % 3 === 0 ? 'h-4' : 'h-2'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;