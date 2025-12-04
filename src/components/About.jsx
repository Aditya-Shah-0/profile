import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2 md:block hidden pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line for Mobile */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent md:hidden"></div>

                    {/* Horizontal Line for Desktop (Roadmap style) */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent hidden md:block -translate-y-1/2 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {profile.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col items-center md:items-start ${index % 2 === 0 ? 'md:flex-col-reverse md:top-12' : 'md:flex-col md:bottom-12'}`}
                            >

                                {/* Connector Line to Main Road (Desktop) */}
                                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-accent ${index % 2 === 0 ? '-top-12' : '-bottom-12'}`}></div>

                                {/* Content Card */}
                                <div className="ml-20 md:ml-0 md:text-center glass p-6 rounded-xl border border-white hover:border-accent transition-all duration-300 w-full relative group">

                                    <div className="flex items-center gap-3 mb-2 md:justify-center">
                                        <FaGraduationCap className="text-accent text-xl" />
                                        <span className="text-accent font-mono text-sm font-bold">{edu.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                                    <h4 className="text-gray-300 font-medium mb-2">{edu.degree}</h4>
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
