
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const handleDownload = () => {
        window.open(
            'https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download'
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
                <div>
                    <Link to="/" className="text-2xl font-bold">
                        Home
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    {/* <Link to="/" className="text-xl font-bold">
                        Home
                    </Link> */}
                    
                    {/* <a href="#Introduction">Introduction</a>
                    <a href="#About">About</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contacts">Contact</a> */}

                    {location.pathname === "/" && (
                        <>
                            <Link to="/projects" className="text-xl font-bold">
                                All Projects
                            </Link>
                            <a href="#Introduction">Introduction</a>
                            <a href="#About">About</a>
                            <a href="#Skills">Skills</a>
                            <a href="#Projects">Projects</a>
                            <a href="#Contacts">Contact</a>
                        </>
                    )}
                    <button
                        onClick={handleDownload}
                        className="flex items-center text-white hover:text-gray-300"
                    >
                        <AiOutlineDownload className="mr-1" size={30} />Resume
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/rsnirob"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-xl hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nirob-barman-a1b120147/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-xl hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.facebook.com/nirob.barman.52/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="text-xl hover:text-gray-300" />
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        className="p-2 border border-white rounded-md"
                        onClick={toggleMenu}
                    >
                        <svg
                            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <svg
                            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden transition duration-500 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="bg-gray-700 py-4 px-6 md:px-10">
                    <a
                        href="#Introduction"
                        className="block text-white py-2 hover:text-gray-300"
                    >
                        Introduction
                    </a>
                    <a
                        href="#About"
                        className="block text-white py-2 hover:text-gray-300"
                    >
                        About
                    </a>
                    <a
                        href="#Skills"
                        className="block text-white py-2 hover:text-gray-300"
                    >
                        Skills
                    </a>
                    <a
                        href="#Projects"
                        className="block text-white py-2 hover:text-gray-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#Contacts"
                        className="block text-white py-2 hover:text-gray-300"
                    >
                        Contact
                    </a>
                    <button
                        onClick={handleDownload}
                        className="flex items-center text-white py-2 mt-4 hover:text-gray-300"
                    >
                        <AiOutlineDownload className="mr-1" size={30} />Resume
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


