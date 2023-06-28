import React from 'react';
import { Typography, Box, Button } from '@mui/material';
// import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Introduction = () => {
    // const headingAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
    return (
        <div className='mt-20'>
            <Box textAlign="center" my={4}>
                {/* <animated.div style={headingAnimation}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Hi, I'm Nirob Barman
                </Typography>
            </animated.div> */}

                <Typography variant="h4" component="h1" gutterBottom>
                    Hi, I'm <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>Nirob Barman</motion.span>
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    MERN Stack Developer
                </Typography>
                <Typography variant="body1" paragraph>
                    I'm a passionate MERN stack developer with expertise in building scalable and responsive web applications. I have a strong
                    foundation in MongoDB, Express.js, React.js, and Node.js (MERN) stack. With a keen eye for design and a love for clean code, I
                    strive to create visually appealing and user-friendly experiences.
                </Typography>
                <Typography variant="body1" paragraph>
                    My goal is to leverage my skills and knowledge to contribute to the development of innovative and impactful projects. I enjoy
                    working in collaborative environments and am always excited to take on new challenges.
                </Typography>
                
                {/* <Button variant="contained" color="primary">
                    <Link > Contact Me </Link>
                </Button> */}
            
            </Box>
        </div>
    );
};

export default Introduction;