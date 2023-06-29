// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';
// // import { useSpring, animated } from 'react-spring';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Introduction = () => {
//     // const headingAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
//     return (
//         <div className='mt-20'>
//             <Box textAlign="center" my={4}>
//                 {/* <animated.div style={headingAnimation}>
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Hi, I'm Nirob Barman
//                 </Typography>
//             </animated.div> */}

//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Hi, I'm <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>Nirob Barman</motion.span>
//                 </Typography>

//                 <Typography variant="h6" component="h2" gutterBottom>
//                     MERN Stack Developer
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                     I'm a passionate MERN stack developer with expertise in building scalable and responsive web applications. I have a strong
//                     foundation in MongoDB, Express.js, React.js, and Node.js (MERN) stack. With a keen eye for design and a love for clean code, I
//                     strive to create visually appealing and user-friendly experiences.
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                     My goal is to leverage my skills and knowledge to contribute to the development of innovative and impactful projects. I enjoy
//                     working in collaborative environments and am always excited to take on new challenges.
//                 </Typography>

//                 {/* <Button variant="contained" color="primary">
//                     <Link > Contact Me </Link>
//                 </Button> */}

//             </Box>
//         </div>
//     );
// };

// export default Introduction;

import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import profileImage from '../../public/profile.jpg';

const Introduction = () => {
    return (
        <div className="mt-20 flex justify-center">
            <Box maxWidth={600}>
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
                            MERN Stack Developer
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

                <Box display="flex" justifyContent="center" mt={4}>
                    <a href="https://www.linkedin.com/in/nirob-barman-a1b120147/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ marginRight: 10 }} />
                    </a>
                    <a href="https://github.com/rsnirob" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ marginRight: 10 }} />
                    </a>
                    <a href="https://www.facebook.com/nirob.barman.52/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                </Box>
            </Box>
        </div>
    );
};

export default Introduction;

