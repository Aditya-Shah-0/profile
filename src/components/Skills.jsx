import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';
import {
    FaJava, FaPython, FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaMicrochip
} from 'react-icons/fa';
import {
    SiCplusplus, SiArduino, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs, SiC
} from 'react-icons/si';

// Mapping skill names to icons
const skillIcons = {
    "C": <SiC />,
    "C++": <SiCplusplus />,
    "Java": <FaJava />,
    "Python": <FaPython />,
    "HTML": <FaHtml5 />,
    "JavaScript": <FaJs />,
    "Arduino": <SiArduino />,
    "ESP32": <FaMicrochip />,
    "React.js": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "MongoDB": <SiMongodb />,
    "Express.js": <SiExpress />,
    "Bootstrap": <FaBootstrap />,
    "Node.js": <FaNodeJs />,
    "Tailwind CSS": <SiTailwindcss />,
    "Firebase": <SiFirebase />,
    // Default icon for others
    "default": <FaDatabase />
};

const SkillCard = ({ skill }) => {
    const icon = skillIcons[skill] || skillIcons["default"];

    return (
        <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-4 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group min-w-[180px] justify-center">
            <span className="text-2xl text-gray-400 group-hover:text-accent transition-colors">{icon}</span>
            <span className="text-gray-200 font-medium whitespace-nowrap">{skill}</span>
        </div>
    );
};

const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useRef(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useTransform(scrollY, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(scrollY, (v) => `${baseVelocity * (v / 1000)}%`);

    // We can use a simpler approach for the "scroll down it happen" effect
    // Just mapping scrollY to x position directly
    const xMove = useTransform(scrollY, [0, 3000], [0, baseVelocity * 5]);

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div
                className="flex flex-nowrap gap-8 py-4"
                style={{ x: xMove }}
            >
                {children}
                {children} {/* Duplicate for seamless feel if needed, though simple scroll is requested */}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    // Flatten skills for the rows
    const allSkills = [
        ...profile.skills.languages,
        ...profile.skills.technologies,
        ...profile.skills.concepts
    ];

    // Split into 3 rows
    const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 3));
    const row2 = allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3));
    const row3 = allSkills.slice(Math.ceil(allSkills.length * 2 / 3));

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const x3 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden" ref={containerRef}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>
            </div>

            <div className="flex flex-col gap-8 overflow-hidden py-10">
                {/* Row 1 - Left to Right */}
                <motion.div style={{ x: x1 }} className="flex gap-6 w-max px-4">
                    {row1.map((skill, idx) => (
                        <SkillCard key={`r1-${idx}`} skill={skill} />
                    ))}
                    {/* Duplicate for length */}
                    {row1.map((skill, idx) => (
                        <SkillCard key={`r1-dup-${idx}`} skill={skill} />
                    ))}
                </motion.div>

                {/* Row 2 - Right to Left */}
                <motion.div style={{ x: x2 }} className="flex gap-6 w-max px-4 self-end">
                    {row2.map((skill, idx) => (
                        <SkillCard key={`r2-${idx}`} skill={skill} />
                    ))}
                    {row2.map((skill, idx) => (
                        <SkillCard key={`r2-dup-${idx}`} skill={skill} />
                    ))}
                </motion.div>

                {/* Row 3 - Left to Right */}
                <motion.div style={{ x: x3 }} className="flex gap-6 w-max px-4">
                    {row3.map((skill, idx) => (
                        <SkillCard key={`r3-${idx}`} skill={skill} />
                    ))}
                    {row3.map((skill, idx) => (
                        <SkillCard key={`r3-dup-${idx}`} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
