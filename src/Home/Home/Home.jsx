import About from "../../Shared/About";
import Certifications from "../../Shared/Certifications";
import Introduction from "../../Shared/Introduction";
import ProblemSolving from "../../Shared/ProblemSolving";
import Projects from "../../Shared/Projects";
import Skills from "../../Shared/Skills";
import Contact from "../../Shared/contact";

const Home = () => {
    return (
        <div id="Home" className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-16 max-w-6xl mx-auto">
            <Introduction />
            <About />
            <Projects />
            <Skills />
            <ProblemSolving />
            <Certifications />
            <Contact />
        </div>
    );
};

export default Home;
