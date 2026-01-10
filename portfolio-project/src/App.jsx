import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0b0f1a] via-[#11162a] to-[#1a1f3c] text-gray-200">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        < Skills/>
      </section>
      

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

