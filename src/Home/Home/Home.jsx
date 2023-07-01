import About from "../../Shared/About";
import Contacts from "../../Shared/Contacts";
import Introduction from "../../Shared/Introduction";
import Projects from "../../Shared/Projects";
import Skills from "../../Shared/Skills";

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-pink-500 to-purple-500">
            <div id="Home" className="bg-white bg-opacity-50 p-8">
                <Introduction />
                <About />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </div>
    );
};

export default Home;