import About from "../../Shared/About";
import Certifications from "../../Shared/Certifications";
import Introduction from "../../Shared/Introduction";
import Projects from "../../Shared/Projects";
import Skills from "../../Shared/Skills";
import Contact from "../../Shared/contact";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <div id="Home" className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-16 max-w-6xl mx-auto my-8">
                <Introduction />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
