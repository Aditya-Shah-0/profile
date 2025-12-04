import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import {
    FaJava, FaPython, FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaMicrochip
} from 'react-icons/fa';
import {
    SiCplusplus, SiArduino, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs, SiC
} from 'react-icons/si';

// Mapping skill names to icons and colors
const skillData = {
    "C": { icon: <SiC />, color: "#A8B9CC" },
    "C++": { icon: <SiCplusplus />, color: "#00599C" },
    "Java": { icon: <FaJava />, color: "#007396" },
    "Python": { icon: <FaPython />, color: "#3776AB" },
    "HTML": { icon: <FaHtml5 />, color: "#E34F26" },
    "JavaScript": { icon: <FaJs />, color: "#F7DF1E" },
    "Arduino": { icon: <SiArduino />, color: "#00979D" },
    "ESP32": { icon: <FaMicrochip />, color: "#E60012" }, // Generic chip color
    "React.js": { icon: <FaReact />, color: "#61DAFB" },
    "Next.js": { icon: <SiNextdotjs />, color: "#000000" }, // White on dark
    "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
    "Express.js": { icon: <SiExpress />, color: "#000000" }, // White on dark
    "Bootstrap": { icon: <FaBootstrap />, color: "#7952B3" },
    "Node.js": { icon: <FaNodeJs />, color: "#339933" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
    "Firebase": { icon: <SiFirebase />, color: "#FFCA28" },
    "default": { icon: <FaDatabase />, color: "#8b5cf6" }
};

const SkillBubble = ({ skill, index }) => {
    const { icon, color } = skillData[skill] || skillData["default"];

    // Deterministic initial position for "gathering" effect based on index
    // This avoids impure Math.random() calls during render
    const initialX = ((index % 5) - 2) * 100; // Spread across -200 to 200
    const initialY = ((index % 3) - 1) * 100; // Spread across -100 to 100

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX, y: initialY, scale: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }} // Re-animates when scrolling in/out
            transition={{
                type: "spring",
                stiffness: 75,
                damping: 10,
                delay: index * 0.05
            }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-full w-24 h-24 md:w-28 md:h-28 border border-white/10 shadow-lg cursor-pointer group"
        >
            <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:rotate-12" style={{ color: color === "#000000" ? "#ffffff" : color }}>
                {icon}
            </div>
            <span className="text-xs text-gray-300 font-medium text-center leading-tight">{skill}</span>
        </motion.div>
    );
};

const Skills = () => {
    const allSkills = [
        ...profile.skills.languages,
        ...profile.skills.technologies,
        ...profile.skills.concepts
    ];

    // Remove duplicates
    const uniqueSkills = [...new Set(allSkills)];

    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto perspective-1000">
                    {uniqueSkills.map((skill, index) => (
                        <SkillBubble key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
