import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Sections/NavBar';
import Footer from '../Sections/Footer';

const Main = () => {
    // Always start a fresh page load at the top, even if the URL still carries
    // a #section hash from a previous visit/reload, or the browser tries to
    // restore the last scroll position for this history entry.
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar />
            <div className='min-h-screen pt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;