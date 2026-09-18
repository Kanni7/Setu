import { useEffect } from 'react';
import Lenis from 'lenis';

import IntroSplash from './components/IntroSplash';
import AmbientBackground from './components/AmbientBackground';
import CommandMenu from './components/CommandMenu';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MentorsGrid from './components/MentorsGrid';
import DeckVault from './components/DeckVault';
import EventsCalendar from './components/EventsCalendar';
import ToolsEcosystem from './components/ToolsEcosystem';
import ProgramsComparison from './components/ProgramsComparison';
import ManifestoSection from './components/ManifestoSection';
import CommunityMatrix from './components/CommunityMatrix';
import InteractiveApplication from './components/InteractiveApplication';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#14121E] font-sans antialiased selection:bg-violet-200 selection:text-violet-900 overflow-x-clip relative">
      <IntroSplash />
      <AmbientBackground />
      <CommandMenu />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MentorsGrid />
        <DeckVault />
        <EventsCalendar />
        <ToolsEcosystem />
        <ProgramsComparison />
        <ManifestoSection />
        <CommunityMatrix />
        <InteractiveApplication />
      </main>
      <Footer />
    </div>
  );
}

export default App;
