
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="relative bg-[#F5F5DC] min-h-screen cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quests />
        <Timeline />
        <PrizePool />
        <Sponsors />
        <RulesAndFaq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
