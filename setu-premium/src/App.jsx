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
  return (
    <div className="bg-[#FFFBF0] min-h-screen text-[#0A0A0A] font-sans antialiased selection:bg-violet-500 selection:text-white overflow-x-clip relative">
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
