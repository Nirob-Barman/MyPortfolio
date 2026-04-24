import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-0">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
                <p className="text-lg font-semibold tracking-wide">Nirob Barman</p>
                <p className="text-sm text-gray-400">.NET Developer · ASP.NET Core · Clean Architecture</p>
                <div className="flex gap-5">
                    <a href="https://github.com/Nirob-Barman" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://medium.com/@nirob-barman" target="_blank" rel="noopener noreferrer"
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
