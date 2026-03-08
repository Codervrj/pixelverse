import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { initGlobalHaptics } from './hooks/useHaptic';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Quests from './components/Quests';
import Timeline from './components/Timeline';
import PrizePool from './components/PrizePool';
import RulesAndFaq from './components/RulesAndFaq';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Guidelines from './components/Guidelines';
import TeamPage from './components/TeamPage';
import { trackPageView } from "./src/analytics";

const RoundOneRedirect: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('/round1.pdf');
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F5F5DC] relative flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#050008 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 text-center px-4">
        <div className="bg-black text-[#FFD700] px-4 py-1 text-xs font-bold inline-block mb-4 tracking-widest">
          FRAME_01
        </div>
        
        <h1 className="text-4xl md:text-6xl font-archivo-black text-black uppercase mb-6 tracking-tighter">
          OPENING PDF<span className="animate-pulse">...</span>
        </h1>

        <p className="text-sm md:text-base font-archivo font-bold text-black/60 uppercase tracking-tight">
          In case the PDF doesn't open automatically,{' '}
          <a 
            href="/round1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black underline decoration-2 underline-offset-4 hover:text-[#FFD700] transition-colors"
          >
            CLICK HERE
          </a>
        </p>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <About />
    <Quests />
    <Timeline />
    {/* <PrizePool /> */}
    <Sponsors />
    <Guidelines />
    <RulesAndFaq />
    <Contact />
  </main>
);

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
    // Disable native scroll restoration and force scroll to top on route change
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const cleanup = initGlobalHaptics();
    return cleanup;
  }, []);

  return (
    <div className="relative bg-[#F5F5DC] min-h-screen cursor-none">
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/round-1" element={<RoundOneRedirect />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
