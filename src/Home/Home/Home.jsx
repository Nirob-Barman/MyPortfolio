import About from "../../Shared/About";
import Header from "../../Shared/Header";
// import Contacts from "../../Shared/Contacts";
import Introduction from "../../Shared/Introduction";
import Projects from "../../Shared/Projects";
import Skills from "../../Shared/Skills";
import Contact from "../../Shared/contact";

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {/* <div id="Home" className="bg-white bg-opacity-50 p-8"> */}
            <div id="Home" className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                <Introduction />
                <About />
                <Skills />
                <Projects />
                <Contact />
                {/* <Contacts /> */}
            </div>
        </div>
    );
};

export default Home;