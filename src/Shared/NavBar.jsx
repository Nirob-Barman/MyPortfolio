import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { GiNotebook } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";
import { AiOutlineCloudDownload } from 'react-icons/ai';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleDownload = () => {
        window.open(
            'https://drive.google.com/u/1/uc?id=1KV9fUQ_md5Z9Advlw1OoDSWR-1H218GZ&export=download'
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
        <nav className="fixed left-0 right-0 bg-gray-800 text-white z-50">
            <div className="flex items-center justify-between py-4 px-6 md:px-24">
                <div>
                    <Link to="/" className="text-2xl font-bold">
                        Nirob Barman
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    {location.pathname === "/" ?
                        <>
                            <a href="#Introduction">Introduction</a>
                            <a href="#About">About</a>
                            <a href="#Projects">Projects</a>
                            <a href="#Skills">Skills</a>
                            <a href="#ProblemSolving">Coding Profiles</a>
                            <a href="#Certifications">Certifications</a>
                            <a href="#Contacts">Contact</a>
                            <Link to="/blogs" title='Blogs' className="hover:text-gray-300">Blogs</Link>
                            <a href="https://github.com/Nirob-Barman" target="_blank" title='Github' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" title='Linkedin' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaLinkedin />
                            </a>
                            <a href="https://medium.com/@nirob-barman" target="_blank" title='Medium' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaMedium />
                            </a>
                            <button onClick={handleDownload} className="flex items-center text-white hover:text-gray-300">
                                <AiOutlineCloudDownload className="mr-1" size={30} />Resume
                            </button>
                        </>
                        : <>
                            <Link to="/" className="text-2xl font-bold">
                                <FaHome />
                            </Link>
                            <Link to="/projects" className="text-2xl font-bold"><FaRegChartBar /></Link>
                            <Link to="/blogs" title='Blogs' className="text-2xl font-bold"><GiNotebook /></Link>
                            <a href="https://github.com/Nirob-Barman" target="_blank" title='Github' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" title='Linkedin' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaLinkedin />
                            </a>
                            <a href="https://medium.com/@nirob-barman" target="_blank" title='Medium' rel="noopener noreferrer" className="hover:text-gray-300">
                                <FaMedium />
                            </a>
                        </>
                    }
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
                    <div className="flex justify-center space-x-4 mt-4">
                        <Link to="/projects" className="text-2xl font-bold"><FaRegChartBar /></Link>
                        <Link to="/blogs" className="text-2xl font-bold"><GiNotebook /></Link>
                        <a href="https://github.com/Nirob-Barman" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://medium.com/@nirob-barman" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-xl">
                            <FaMedium />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
