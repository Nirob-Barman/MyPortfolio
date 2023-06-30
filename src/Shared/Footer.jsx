import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-4 text-center fixed bottom-0 left-0 right-0">
            <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Nirob Barman
            </p>
            <p className="text-gray-500">MERN Stack Developer</p>
        </footer>
    );
};

export default Footer;
