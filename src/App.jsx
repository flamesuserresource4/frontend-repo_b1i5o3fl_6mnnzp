import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CakesSection from './components/CakesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <CakesSection />
      <Footer />
    </div>
  );
}

export default App;
