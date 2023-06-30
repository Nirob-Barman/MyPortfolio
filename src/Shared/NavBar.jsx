import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const NavBar = () => {

    const handleDownload = () => {
        window.open(`https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download`);
    }

    return (
        <nav className="flex items-center justify-between bg-gray-800 text-white p-4 fixed top-0 left-0 right-0">
            <div>
                <Link to="/" className="text-2xl font-bold">Nirob Barman</Link>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#Introduction">Introduction</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Projects">Projects</a>
                <a href="#Contacts">Contact</a>
            </div>

            <div className="">
                <div className="grid">
                    <button onClick={handleDownload} className="flex items-center text-white">
                        <AiOutlineDownload className="mr-1" size={30} />Resume
                    </button>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <a href="https://github.com/rsnirob" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nirob-barman-a1b120147/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/nirob.barman.52/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </nav>
    );
};

export default NavBar;
