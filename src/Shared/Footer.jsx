
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-4 text-center fixed bottom-0 left-0 right-0">
            <p className="text-white">
                &copy; {new Date().getFullYear()} Nirob Barman
            </p>
            <p className="text-gray-300">Full Stack Developer</p>
        </footer>
    );
};

export default Footer;
