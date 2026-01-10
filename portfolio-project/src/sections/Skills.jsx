import { motion } from "framer-motion";

import html from "../assets/images/icons8-html-5-48.png";
import css from "../assets/images/icons8-css-48.png";
import js from "../assets/images/icons8-javascript-48.png";
import react from "../assets/images/icons8-react-js-48.png";
import tailwind from "../assets/images/icons8-tailwindcss-48.png";
import python from "../assets/images/icons8-python-48.png";
import c from "../assets/images/icons8-c-programming-48.png";
import node from "../assets/images/icons8-nodejs-48.png";
import express from "../assets/images/icons8-express-js-48 (1).png"
import java from "../assets/images/icons8-java-48.png"
import mongodb from "../assets/images/icons8-mongo-db-48.png"

const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Tailwind CSS", image: tailwind },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "Python", image: python },
    { name: "C", image: c },
    { name: "Java", image: java },


];

const Skills = () => {
    return (
        <section className=" px-6">
            <h2 className="text-3xl font-bold text-center mb-12 hover:text-violet-500">
                Technical Skills
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="w-20 h-20 bg-white/5 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                            />
                        </div>

                        <span className="text-sm text-gray-400">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
