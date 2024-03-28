import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import profileImage from '../../public/profile.jpg';

const Introduction = () => {

    const [jobTitles, setJobTitles] = useState([
        "Full Stack Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Developer",
        "Django Developer",
        "Python Developer",
        "Django Developer",
        "Web Developer",
    ]);
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
                setIsVisible(true);
            }, 500);
        }, 2000); // Change this value to adjust the interval between job titles

        return () => clearInterval(timer);
    }, [index]);


    return (
        <div>
            <div id="Introduction" className="flex justify-center">
                <Box maxWidth={600} mt={12}>
                    <Box display="flex" alignItems="center" mb={4}>
                        <motion.img
                            src={profileImage}
                            alt="Developer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            style={{ width: 200, height: 200, borderRadius: '50%' }}
                        />
                        <Box ml={4}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Hi, I'm <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                    Nirob Barman
                                </motion.span>
                            </Typography>
                            <Typography variant="h6" component="h2" gutterBottom>
                                <motion.p animate={{ opacity: isVisible ? 1 : 0 }} transition={{ duration: 1 }}>
                                    {jobTitles[index]}
                                </motion.p>
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body1" paragraph>
                        I'm a passionate MERN stack developer with expertise in building scalable and responsive web applications. I have
                        a strong foundation in MongoDB, Express.js, React.js, and Node.js (MERN) stack. With a keen eye for design and a
                        love for clean code, I strive to create visually appealing and user-friendly experiences.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        My goal is to leverage my skills and knowledge to contribute to the development of innovative and impactful
                        projects. I enjoy working in collaborative environments and am always excited to take on new challenges.
                    </Typography>

                    <Box display="flex" justifyContent="center">
                        {/* <Button variant="contained" color="primary">
                        <Link to="/contact">Contact Me</Link>
                    </Button> */}
                    </Box>

                    {/* <Box display="flex" justifyContent="center" mt={4}>
                    <a href="https://www.linkedin.com/in/nirob-barman-a1b120147/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ marginRight: 10 }} />
                    </a>
                    <a href="https://github.com/rsnirob" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ marginRight: 10 }} />
                    </a>
                    <a href="https://www.facebook.com/nirob.barman.52/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                </Box> */}
                </Box>
            </div>
        </div>
    );
};

export default Introduction;

