import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import img0 from "../assets/images/screencapture-i-sharmilabanu-github-io-Udemy-Clone-2026-01-08-16_12_49.jpg"
import img1 from "../assets/images/screencapture-i-sharmilabanu-github-io-Greenden-Tailwindcss-index-html-2026-01-08-15_51_28.jpg";
import img2 from "../assets/images/screencapture-weather-app-mu-six-66-vercel-app-2026-01-08-15_50_50.jpg";
import img3 from "../assets/images/screencapture-ecommerce-project-fqjx-vercel-app-2026-01-08-15_49_47.jpg";

const projects = [
  {
    title: "Udemy clone",
    description: "A basic Udemy clone built with HTML & CSS for responsive course listings.",
    github: "https://github.com/I-Sharmilabanu/Udemy-Clone.git",
    live: "https://i-sharmilabanu.github.io/Udemy-Clone",
    image: img0,
  },
  {
    title: "Greenden website",
    description: "A responsive website built with HTML, CSS & JavaScript for interactive features.",
    github: "https://github.com/I-Sharmilabanu/Greenden-Tailwindcss.git",
    live: "https://greenden-tailwindcss.vercel.app",
    image: img1,
  },
  {
    title: "Weather App",
    description: "A weather application using React & API fetch to display real-time weather data.",
    github: "https://github.com/I-Sharmilabanu/Weather-app.git",
    live: "https://weather-app-tjao.vercel.app",
    image: img2,
  },
  {
    title: "E-Commerce project",
    description: "A full-stack e-commerce application with React frontend, Node.js backend, and MongoDB database.",
    github: "https://github.com/I-Sharmilabanu/Ecommerce-project.git",
    live: "https://ecommerce-project-fqjx.vercel.app",
    image: img3,
  },
];

const Projects = () => {
  return (
    <section className=" py-32 px-6 ">
      <h2 className="text-3xl font-bold text-left md:ml-44 mb-12 hover:text-violet-500">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="flex gap-5 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5"
          >
            {/* IMAGE SIDE */}
            <div className="min-w-[110px] h-[110px] rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT SIDE */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl text-violet-300 mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
              </div>

              {/* LINKS */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-violet-400 transition"
                >
                  <FaGithub />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm rounded-md bg-violet-500 hover:bg-violet-600 transition font-semibold text-white"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 