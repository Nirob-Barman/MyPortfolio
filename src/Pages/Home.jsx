import About from "../Sections/About";
import Certifications from "../Sections/Certifications";
import Education from "../Sections/Education";
import Experience from "../Sections/Experience";
import Introduction from "../Sections/Introduction";
import ProblemSolving from "../Sections/ProblemSolving";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Contact from "../Sections/Contact";

const Home = () => {
    return (
        <div id="Home" className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-16 max-w-6xl mx-auto">
            <Introduction />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <ProblemSolving />
            <Certifications />
            <Contact />
        </div>
    );
};

export default Home;
