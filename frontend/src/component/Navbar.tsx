import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Github, Menu, X } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/a", label: "Docs" },
    { to: "/b", label: "Components" },
    { to: "/c", label: "Blocks" },
    { to: "/d", label: "Charts" },
    { to: "/e", label: "Directory" },
    { to: "/f", label: "Themes" },
    { to: "/g", label: "Colors" },
  ];

  return (
    <header className="fixed text-white top-0 left-0 w-full backdrop-blur-md bg-black shadow-lg z-50 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-300 hover:text-emerald-400 transition duration-300"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 flex items-center space-x-2"
          >
            CraftUI
          </Link>

          <nav className="hidden lg:flex items-center gap-4 ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block w-56">
            <Input placeholder="Search documentation..." />
          </div>

          <Separator orientation="vertical" className="h-6 hidden lg:block" />

          <Link
            to="/github"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
          >
            <Github size={18} />
            <span>98.7K</span>
          </Link>

          <Separator orientation="vertical" className="hidden lg:block" />

          <div className="hidden lg:block text-gray-300 hover:text-emerald-400 cursor-pointer transition duration-300">
            Source
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-75 lg:hidden bg-black/95 border-r border-emerald-800 z-50 backdrop-blur-md flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-4 border-b border-emerald-800">
                <Link
                  to="/"
                  className="text-2xl font-bold text-emerald-400"
                  onClick={() => setMenuOpen(false)}
                >
                  CraftUI
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-5 px-6 py-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-6 border-t border-emerald-800 flex items-center justify-between text-gray-300">
                <Link
                  to="/github"
                  className="flex items-center gap-2 hover:text-emerald-400"
                  onClick={() => setMenuOpen(false)}
                >
                  <Github size={20} /> <span>98.7K</span>
                </Link>
                <div className="hover:text-emerald-400 cursor-pointer">
                  Source
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
