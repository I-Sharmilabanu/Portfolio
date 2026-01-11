import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume.pdf"; // make sure your resume is here

const Home = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Hi, I'm Sharmilabanu
          </h1>

          <p className="mt-3 text-sm sm:text-xl text-violet-300 font-semibold">
            MERN Stack Developer & Tech Enthusiast
          </p>

          <p className="mt-5 sm:mt-6 text-gray-400 max-w-md mx-auto md:mx-0 md:text-xl text-sm">
            I build modern, responsive, and animated web applications using
            React, Node.js, MongoDB, and Tailwind CSS. Passionate about
            creating interactive user experiences and learning new technologies.
          </p>

          {/* SOCIAL / CV BUTTONS */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/I-Sharmilabanu"
              target="_blank"
              rel="noreferrer"
              className="md:text-3xl text-gray-300 hover:text-violet-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sharmilabanu-07i?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="md:text-3xl text-gray-300 hover:text-violet-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={resume}
              download="Sharmila_Resume.pdf"
              className="flex items-center gap-2 px-2 py-2 rounded-lg bg-violet-500 to-teal-500 hover:scale-105 transition text-white font-semibold"
            >
              <FaDownload />
              CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10 md:mt-0"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 blur-2xl opacity-40"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Profile"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-violet-600 animate-pulse"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
