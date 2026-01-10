import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10"
      >
        <h2 className="text-3xl font-bold mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-8">
          I’m open to internships, freelance work, and full-time opportunities.
          Let’s build something amazing together 🚀
        </p>

        {/* EMAIL BUTTON */}
        <a
          href="mailto:sharmilabanu534@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 hover:scale-105 transition font-semibold"
        >
          <FaEnvelope />
          Email Me
        </a>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
          <a
            href="https://github.com/I-Sharmilabanu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sharmilabanu-07i"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
