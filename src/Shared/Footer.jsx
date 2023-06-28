import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                textAlign: 'center',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <Typography variant="body2" color="textSecondary" component="p">
                &copy; {new Date().getFullYear()} Nirob Barman
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                MERN Stack Developer
            </Typography>
        </Box>
    );
};

export default Footer;
