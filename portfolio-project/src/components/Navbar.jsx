import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false); // close menu after click
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
          Portfolio
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-gray-300 font-semibold text-lg">
          <button onClick={() => scrollToSection("home")} className="hover:text-violet-400">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-violet-400">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-violet-400">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-violet-400">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-violet-400">
            Contact
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden  bg-black/60  border-t border-white/10 fixed py-6 text-gray-300 font-semibold h-screen z-40 px-6 right-0 w-40 ">
          
          <div className=" flex flex-col items-start gap-6 " ><button onClick={() => scrollToSection("home")} className="hover:text-violet-400">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-violet-400">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-violet-400">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-violet-400">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-violet-400">
            Contact
          </button></div>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
