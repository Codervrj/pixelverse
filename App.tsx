
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <About />
    <Quests />
    <Timeline />
    <PrizePool />
    <Sponsors />
    <Guidelines />
    <RulesAndFaq />
    <Contact />
  </main>
);

const App: React.FC = () => {
  useEffect(() => {
    const cleanup = initGlobalHaptics();
    return cleanup;
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-[#F5F5DC] min-h-screen cursor-none">
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
