import About from "../../Shared/About";
import Contacts from "../../Shared/Contacts";
import Introduction from "../../Shared/Introduction";
import Projects from "../../Shared/Projects";
import Skills from "../../Shared/Skills";

const Home = () => {
    return (
        <div>
            <div id="Home">
                <Introduction />
                <About />
                <Skills />
                <Projects />
                <div className="pt-20">
                    <div className="pt-20">
                        <div className="pt-20">
                            <div className="pt-20">
                                <div className="pt-20">
                                    <div className="pt-20">
                                        <div className="pt-20">
                                            <div className="pt-20">
                                                <Contacts />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;