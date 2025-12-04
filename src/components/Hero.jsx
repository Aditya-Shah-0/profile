import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import profileImg from '../assets/profile.png';
import { FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const Hero = () => {
    const roles = profile.role.split(' | ');
    const [currentRole, setCurrentRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullRole = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(fullRole.substring(0, currentRole.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentRole(fullRole.substring(0, currentRole.length + 1));
                setTypingSpeed(50);
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
        <section className="relative min-h-screen flex items-center justify-center bg-dark pt-20">
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
                            Hello, I&apos;m
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
                        <div
                            className="relative w-72 h-72 md:w-96 md:h-96 group cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {/* Glowing Orb Behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Morphing Blob Container */}
                            <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-2xl animate-blob-shape transition-all duration-500 hover:scale-105"
                                style={{
                                    borderRadius: '70% 30% 50% 40% / 40% 30% 20% 10%',
                                    backgroundImage: `url(${profileImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                                }}>
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                {/* Click Hint */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">Click to View Profile</span>
                                </div>
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

            {/* Profile Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-dark border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="h-32 bg-gradient-to-r from-primary to-accent relative">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
                                >
                                    <FaTimes size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-8 -mt-16 relative">
                                <div className="w-32 h-32 rounded-full border-4 border-dark overflow-hidden shadow-lg mb-6">
                                    <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-1">{profile.name}</h2>
                                <p className="text-accent font-medium mb-6">{profile.role.split(' | ')[0]}</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <FaEnvelope className="text-accent" />
                                        <span>{profile.contact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <FaPhone className="text-accent" />
                                        <span>{profile.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <FaMapMarkerAlt className="text-accent" />
                                        <span>{profile.contact.location}</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 pt-6">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <FaGraduationCap className="text-accent" /> Latest Education
                                    </h3>
                                    <div>
                                        <p className="text-white font-medium">{profile.education[0].institution}</p>
                                        <p className="text-gray-400 text-sm">{profile.education[0].degree}</p>
                                        <p className="text-accent text-xs mt-1">{profile.education[0].duration}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
