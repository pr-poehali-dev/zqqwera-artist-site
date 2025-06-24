import Navigation from "@/components/Navigation";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-8 font-montserrat">
            Контакты
          </h1>
          <p className="text-xl text-white/80 mb-12">Связь и сотрудничество</p>

          <div className="bg-gradient-to-br from-neon-pink/20 to-electric-blue/20 backdrop-blur-sm border border-neon-pink/30 rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">
                  Кваченков Александр
                </h2>
                <div className="h-0.5 w-16 bg-gradient-to-r from-neon-pink to-electric-blue mx-auto mb-4"></div>
              </div>

              <div className="flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:akvacenkova@gmail.com"
                  className="text-lg hover:text-neon-pink transition-colors"
                >
                  akvacenkova@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
