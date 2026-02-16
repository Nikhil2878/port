import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import logo from "../assets/logot.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Website Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative hover:text-white transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
              hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600 text-white
            hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
            transition-all"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#111] border-t border-gray-800 px-6 py-6">
          <div className="flex flex-col gap-4 text-gray-300">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                {item}
              </Link>
            ))}

            {/* Resume Mobile */}
            <a
              href="/resume.pdf"
              download
              className="mt-4 flex items-center justify-center gap-2
              px-5 py-3 rounded-full text-white
              bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
