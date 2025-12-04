import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
    const getIcon = (index) => {
        switch (index % 3) {
            case 0: return <FaTrophy className="text-yellow-400" size={24} />;
            case 1: return <FaMedal className="text-blue-400" size={24} />;
            case 2: return <FaStar className="text-purple-400" size={24} />;
            default: return <FaTrophy className="text-yellow-400" size={24} />;
        }
    };

    return (
        <section id="achievements" className="py-20 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        Honors & <span className="text-gradient">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {profile.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-xl flex items-start gap-6 hover:bg-white/5 transition-all duration-300 group border-l-4 border-l-accent"
                        >
                            <div className="p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300 shrink-0">
                                {getIcon(index)}
                            </div>
                            <div>
                                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                                    {achievement}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
