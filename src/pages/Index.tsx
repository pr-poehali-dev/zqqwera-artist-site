import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MusicPreview from "@/components/MusicPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />
      <Hero />
      <MusicPreview />
    </div>
  );
};

export default Index;
