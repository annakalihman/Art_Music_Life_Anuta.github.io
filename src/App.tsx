import { Header } from "./components/Header";
import { CoverSection } from "./components/CoverSection";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { RepertoireSection } from "./components/RepertoireSection";
import { ApproachSection } from "./components/ApproachSection";
import { EventsSection } from "./components/EventsSection";
import { VideoSection } from "./components/VideoSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { VideoAutoplay } from "./components/VideoAutoplay";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-25 to-amber-25">
      <VideoAutoplay />
      <Header />
      <main className="relative">
        {/* Subtle texture overlay */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-rose-100/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,248,235,0.3)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10">
          <CoverSection />
          <HeroSection />
          <AboutSection />
          <RepertoireSection />
          <ApproachSection />
          <EventsSection />
          <VideoSection />
          <GallerySection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}