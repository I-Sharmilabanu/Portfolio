import { motion } from "framer-motion";
import img from "../assets/images/ChatGPT Image Jan 8, 2026, 04_35_35 PM.png"

const About = () => {
  return (
    <section className=" px-6 mt-20 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">

        {/* LEFT SIDE – IMAGE */}
                 <h2 className="text-3xl  font-bold  hover:text-violet-500">About Me</h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end "
        >   

          <img
            src={img}
            alt="Tech Stack"
            className="w-72  rounded-2xl shadow-xl  mr-20"
          />
        </motion.div>

        {/* RIGHT SIDE – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mt-10"
        >

          <ul className="space-y-3 text-gray-400">
            <li>💻 Full Stack Developer focused on frontend & backend</li>
            <li>⚛️ Skilled in React.js, Tailwind CSS & JavaScript</li>
            <li>🛠️ Experience with Node.js, Express.js & REST APIs</li>
            <li>🗄️ Worked with MongoDB for backend data</li>
            <li>🔐 Familiar with authentication & API security</li>
            <li>🚀 Passionate about real-world projects & learning</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
