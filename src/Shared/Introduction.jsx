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
                    I'm a .NET developer who loves clean code, efficient solutions, and building real-world applications that scale.
                </p>


            </div>
        </div>
    );
};

export default Introduction;
