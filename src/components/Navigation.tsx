import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-dark-purple/90 backdrop-blur-md z-50 border-b border-primary-purple/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white font-montserrat"
          >
            Zqqwer
          </Link>

          <div className="flex gap-8">
            {[
              { path: "/", label: "Главная" },
              { path: "/music", label: "Музыка" },
              { path: "/about", label: "О музыканте" },
              { path: "/contacts", label: "Контакты" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-all duration-300 hover:text-magenta-pink ${
                  isActive(path)
                    ? "text-magenta-pink font-semibold"
                    : "text-white/80"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
