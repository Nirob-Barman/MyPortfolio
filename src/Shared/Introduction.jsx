import { motion } from 'framer-motion';
import profileImage from '../../public/profile.jpg';
import Typewriter from 'typewriter-effect';

const Introduction = () => {
    return (
        <div id="Introduction" className="flex justify-center px-4 py-12">
            <div className="max-w-xl mt-12 text-center">
                <motion.img
                    src={profileImage}
                    alt="Developer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-48 h-48 rounded-full mx-auto"
                />

                <div className="mt-6">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">
                        Hi, I'm <span className="text-blue-500">Nirob Barman</span>
                    </h1>
                    <h2 className="text-xl text-gray-600">
                        <Typewriter
                            options={{
                                strings: ["Software Engineer", "Full Stack Developer", "Web Developer", ".NET Enthusiast"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>

                <p className="text-base text-gray-700 mt-6">
                    I'm a software engineer focused on .NET technologies, including ASP.NET Core and ASP.NET MVC. I build scalable, maintainable applications using Clean Architecture.
                </p>

                <p className="text-base text-gray-700 mt-4">
                    I enjoy working with C#, JavaScript, React.js, Tailwind CSS, and modern front-end frameworks. Passionate about problem-solving and continuous learning.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
