import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container px-4 py-3">
        <div className="flex gap-x-3 justify-items-start items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 flex items-center space-x-2"
          >
            CraftUI
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Docs
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Components
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Blocks
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Charts
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Directory
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Themes
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <span
                className="text-gray-300 hover:text-emerald-400 transition duration-300
					 ease-in-ou"
              >
                Colors
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
