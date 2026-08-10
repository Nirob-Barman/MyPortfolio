import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS } from '../constants/links';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-0">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
                <p className="text-lg font-semibold tracking-wide">Nirob Barman</p>
                <p className="text-sm text-gray-400">.NET Developer · ASP.NET Core · Clean Architecture</p>
                <div className="flex gap-5">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors" title="LeetCode">
                        <SiLeetcode size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors" title="Medium">
                        <FaMedium size={20} />
                    </a>
                </div>
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Nirob Barman. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
