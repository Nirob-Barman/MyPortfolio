import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar />
            <div className='min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;