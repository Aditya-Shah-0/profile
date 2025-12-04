import React from 'react';
import { profile } from '../data/profile';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold font-heading text-white tracking-wider">
                        ADITYA<span className="text-accent">.</span>
                    </span>
                </div>

                <div className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
                    <p>Designed & Built with <FaHeart className="inline text-red-500 mx-1" /> by {profile.name}</p>
                </div>

                <div className="flex space-x-6">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
