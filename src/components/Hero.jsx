import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const roles = profile.role.split(' | ');
    const [currentRole, setCurrentRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullRole = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(fullRole.substring(0, currentRole.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentRole(fullRole.substring(0, currentRole.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentRole === fullRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentRole === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-20">
            {/* Background Elements - Kept for depth, but Background component adds more */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent font-medium tracking-widest mb-4 uppercase text-sm">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            {profile.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light h-10">
                            <span className="text-gradient font-semibold">
                                {currentRole}
                            </span>
                            <span className="animate-pulse text-accent">|</span>
                        </h3>

                        <p className="max-w-xl mx-auto md:mx-0 text-gray-400 mb-10 leading-relaxed">
                            {profile.about}
                        </p>

                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-accent hover:bg-primary text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 transform hover:-translate-y-1"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content - Innovative Display */}
                    <motion.div
                        className="md:w-1/2 flex justify-center relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            {/* Glowing Orb Behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Morphing Blob Container */}
                            <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-2xl animate-blob-shape transition-all duration-500 hover:scale-105"
                                style={{
                                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                                    backgroundImage: `url(${profileImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                                }}>
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 glass px-6 py-3 rounded-xl border border-white/20 shadow-xl backdrop-blur-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-accent font-bold text-xl">5+</span>
                                <span className="text-gray-300 text-sm ml-2">Projects Built</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
