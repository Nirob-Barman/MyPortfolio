import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleDownload = () => {
        window.open(
            'https://drive.google.com/u/1/uc?id=10PVL34FK4ZAsGuRsbpYorAUzB44xX-80&export=download'
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Smooth scroll adjustment for fixed navbar
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    const yOffset = -80; // Offset for the fixed navbar height
                    const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: yPosition, behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
                <div>
                    <Link to="/" className="text-2xl font-bold">
                        Home
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    {location.pathname === "/" && (
                        <>
                            <a href="#Introduction">Introduction</a>
                            <a href="#About">About</a>
                            <a href="#Skills">Skills</a>
                            <a href="#Projects">Projects</a>
                            <a href="#Contacts">Contact</a>
                            <a href="https://github.com/Nirob-Barman" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaLinkedin />
                            </a>
                            <a href="https://medium.com/@nirob-barman" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaMedium />
                            </a>
                        </>
                    )}
                    <button onClick={handleDownload} className="flex items-center text-white hover:text-gray-300">
                        <AiOutlineDownload className="mr-1" size={30} />Resume
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="p-2 border border-white rounded-md" onClick={toggleMenu}>
                        <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 py-4 px-6">
                    <a href="#Introduction" className="block text-white py-2 hover:text-gray-300">Introduction</a>
                    <a href="#About" className="block text-white py-2 hover:text-gray-300">About</a>
                    <a href="#Skills" className="block text-white py-2 hover:text-gray-300">Skills</a>
                    <a href="#Projects" className="block text-white py-2 hover:text-gray-300">Projects</a>
                    <a href="#Contacts" className="block text-white py-2 hover:text-gray-300">Contact</a>
                    <a href="https://github.com/Nirob-Barman" target="_blank" rel="noopener noreferrer" className="block text-white py-2 hover:text-gray-300">GitHub</a>
                    <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noopener noreferrer" className="block text-white py-2 hover:text-gray-300">LinkedIn</a>
                    <a href="https://medium.com/@nirob-barman" target="_blank" rel="noopener noreferrer" className="block text-white py-2 hover:text-gray-300">Medium</a>
                    <button onClick={handleDownload} className="flex items-center text-white py-2 mt-4 hover:text-gray-300">
                        <AiOutlineDownload className="mr-1" size={30} />Resume
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
