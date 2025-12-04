import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col space-y-6"
                    >
                        <a href={`mailto:${profile.email}`} className="flex items-center space-x-4 glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">Email</h4>
                                <p className="text-white font-medium">{profile.email}</p>
                            </div>
                        </a>

                        <div className="flex items-center space-x-4 glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                <FaPhone size={20} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">Phone</h4>
                                <p className="text-white font-medium">{profile.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">Location</h4>
                                <p className="text-white font-medium">{profile.location}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
