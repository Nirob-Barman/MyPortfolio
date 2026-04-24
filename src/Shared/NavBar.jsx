import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload, FaHome } from 'react-icons/fa';

const NAV_LINKS = [
    { label: 'About',          href: '#About',          id: 'About'          },
    { label: 'Experience',     href: '#Experience',      id: 'Experience'      },
    { label: 'Projects',       href: '#Projects',        id: 'Projects'        },
    { label: 'Skills',         href: '#Skills',          id: 'Skills'          },
    { label: 'Education',      href: '#Education',       id: 'Education'       },
    { label: 'Certifications', href: '#Certifications',  id: 'Certifications'  },
    { label: 'Contact',        href: '#Contacts',        id: 'Contacts'        },
];

const RESUME_URL = 'https://drive.google.com/u/1/uc?id=1KV9fUQ_md5Z9Advlw1OoDSWR-1H218GZ&export=download';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen]     = useState(false);
    const [scrolled, setScrolled]         = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleDownload = () => window.open(RESUME_URL);
    const closeMenu = () => setIsMenuOpen(false);

    // Navbar shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active section via IntersectionObserver
    useEffect(() => {
        if (!isHome) return;
        const ids = NAV_LINKS.map(l => l.id);
        const elements = ids.map(id => document.getElementById(id)).filter(Boolean);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-30% 0px -60% 0px' }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [isHome]);

    // Smooth scroll — offset for fixed navbar
    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const target = document.querySelector(hash);
            if (target) {
                const y = target.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="text-lg font-bold tracking-wide hover:text-blue-400 transition-colors">
                    Nirob Barman
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7 text-sm font-medium">
                    {isHome ? (
                        <>
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`pb-0.5 border-b-2 transition-colors duration-200 ${
                                        activeSection === link.id
                                            ? 'border-blue-400 text-blue-400'
                                            : 'border-transparent text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            {/* <Link
                                to="/projects"
                                className="pb-0.5 border-b-2 border-transparent text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                All Projects
                            </Link> */}
                            <Link
                                to="/blogs"
                                className="pb-0.5 border-b-2 border-transparent text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                Blogs
                            </Link>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-1.5 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 text-xs font-semibold py-1.5 px-4 rounded transition-colors duration-200"
                            >
                                <FaDownload size={11} /> Resume
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                                <FaHome size={18} />
                            </Link>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-1.5 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 text-xs font-semibold py-1.5 px-4 rounded transition-colors duration-200"
                            >
                                <FaDownload size={11} /> Resume
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 flex flex-col gap-1">
                    {isHome && NAV_LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className={`py-2.5 text-sm font-medium border-b border-gray-700 transition-colors ${
                                activeSection === link.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        to="/projects"
                        onClick={closeMenu}
                        className="py-2.5 text-sm font-medium border-b border-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                        All Projects
                    </Link>
                    <Link
                        to="/blogs"
                        onClick={closeMenu}
                        className="py-2.5 text-sm font-medium border-b border-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                        Blogs
                    </Link>
                    <button
                        onClick={() => { handleDownload(); closeMenu(); }}
                        className="mt-3 flex items-center justify-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
                    >
                        <FaDownload size={12} /> Download Resume
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
