import Navigation from "@/components/Navigation";

const Music = () => {
  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-8 font-montserrat">
            Музыка
          </h1>
          <p className="text-xl text-white/80">
            Полная дискография и новые релизы
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
