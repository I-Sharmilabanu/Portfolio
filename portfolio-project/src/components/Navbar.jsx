const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
          Portfolio
        </h1>

        <div className="flex gap-6 text-gray-300 font-semibold  md:text-lg text-sm hover:text-violet-400 transition">
          <button onClick={() => scrollToSection("home")} >
            Home
          </button>
          <button onClick={() => scrollToSection("about")}>
            About
          </button>
          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
