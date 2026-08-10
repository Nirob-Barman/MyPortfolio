import { motion } from 'framer-motion';
import profileImage from '../../public/profile.jpg';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaMedium, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS, RESUME_URL } from '../constants/links';

const Introduction = () => {
    const handleDownload = () => {
        window.open(RESUME_URL);
    };

    return (
        <div id="Introduction" className="flex justify-center px-4 py-16">
            <div className="max-w-xl mt-12 text-center">
                <motion.img
                    src={profileImage}
                    alt="Nirob Barman"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />

                <div className="mt-6">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">
                        Hi, I&rsquo;m <span className="text-blue-500">Nirob Barman</span>
                    </h1>
                    <p className="text-base font-semibold text-gray-700 mt-1">
                        .NET Developer <span className="text-gray-400 mx-1">|</span> Backend Developer{' '}
                        <span className="text-gray-400 mx-1">|</span> Software Engineer
                    </p>
                    <h2 className="text-xl text-gray-600 font-semibold h-8 mt-1">
                        <Typewriter
                            options={{
                                strings: ["Software Engineer", ".NET Developer", "ASP.NET Core Engineer", "Backend Developer", "Full-Stack .NET Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>

                <p className="text-base text-gray-600 mt-5 leading-relaxed">
                    I am a <span className="font-semibold text-blue-500">Software Engineer</span> with{' '}
                    <span className="font-semibold text-gray-800">2 years</span> of professional
                    experience specializing in <span className="font-semibold">ASP.NET Core</span>,{' '}
                    <span className="font-semibold">REST APIs</span>, <span className="font-semibold">SQL Server</span>,
                    and scalable, multi-tenant backend solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <a
                        href="#Projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-200"
                    >
                        View Projects
                    </a>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-200"
                    >
                        <FaDownload size={14} />
                        Resume
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mt-6">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 transition-colors" title="GitHub">
                        <FaGithub size={22} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors" title="LinkedIn">
                        <FaLinkedin size={22} />
                    </a>
                    <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-orange-500 transition-colors" title="LeetCode">
                        <SiLeetcode size={22} />
                    </a>
                    <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 transition-colors" title="Medium">
                        <FaMedium size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
