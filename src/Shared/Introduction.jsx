import { motion } from 'framer-motion';
import profileImage from '../../public/profile.jpg';
import Typewriter from 'typewriter-effect';

const Introduction = () => {
    return (
        <div id="Introduction" className="flex justify-center px-4">
            <div className="max-w-xl mt-12">
                <div className="flex items-center mb-4">
                    <motion.img
                        src={profileImage}
                        alt="Developer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-48 h-48 rounded-full"
                    />

                    <div className="ml-6">
                        <h1 className="text-3xl font-bold mb-2">
                            Hi, I'm <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                Nirob Barman
                            </motion.span>
                        </h1>
                        <h2 className="text-xl text-gray-600">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Software Engineer",
                                        "Full Stack Developer",
                                        "Web Developer",
                                        ".NET Enthusiast"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>
                </div>

                <p className="text-base text-gray-700 mb-4">
                    I'm a software engineer focused on .NET technologies, including ASP.NET Core and ASP.NET MVC. I build scalable, maintainable applications using Clean Architecture.
                </p>

                <p className="text-base text-gray-700 mb-6">
                    I enjoy working with C#, JavaScript, React.js, Tailwind CSS, and modern front-end frameworks. Passionate about problem-solving and continuous learning.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
