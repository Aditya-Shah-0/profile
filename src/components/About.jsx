import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Education & <span className="text-gradient">Background</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l border-gray-800 ml-4 md:ml-0 pl-8 md:pl-0">
                        {profile.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="mb-12 relative md:flex items-start group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-dark border-2 border-accent group-hover:bg-accent transition-colors duration-300 z-10"></div>

                                {/* Content - Alternating sides for desktop could be cool, but keeping it simple left-aligned for now or maybe split */}
                                <div className="md:w-1/2 md:pr-12 md:text-right md:absolute md:left-0">
                                    <span className="text-accent font-mono text-sm mb-2 block">{edu.duration}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                                </div>

                                <div className="md:w-1/2 md:pl-12 md:ml-auto">
                                    <h4 className="text-lg text-gray-300 font-medium mb-2">{edu.degree}</h4>
                                    <p className="text-gray-500 text-sm">{edu.score}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
