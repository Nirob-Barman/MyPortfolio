// // import React from 'react';
// // import { AppBar, Toolbar, Typography, Button, Avatar, Box, Grid } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // // import ProfileAvatar from './profile-avatar.jpg'; // Replace with your profile avatar image
// // import { AiOutlineDownload } from 'react-icons/ai';
// // const NavBar = () => {

// //     const handleDownload = () => {
// //         window.open(`https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download`);
// //     }

// //     return (
// //         <AppBar position="static">
// //             <Toolbar>
// //                 <Grid container alignItems="center" justifyContent="space-between">
// //                     <Grid item>
// //                         <Grid container alignItems="center" spacing={2}>
// //                             <Grid item>
// //                                 <Avatar alt="Profile Avatar"
// //                                 // src={ProfileAvatar}
// //                                 />
// //                             </Grid>
// //                             <Grid item>
// //                                 <Typography variant="h6" component="div">
// //                                     Profile
// //                                 </Typography>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid item>
// //                         <Grid container alignItems="center" spacing={2}>
// //                             <Grid item>
// //                                 <Button component={Link} to="/" color="inherit">
// //                                     Home
// //                                 </Button>
// //                             </Grid>

// //                             <Grid item>
// //                                 <a href='#about'>About</a>
// //                             </Grid>

// //                             <Grid item>
// //                                 <a href='#skills'>Skill</a>
// //                             </Grid>
// //                             <Grid item>
// //                                 <a href='#projects'>Projects</a>
// //                             </Grid>
// //                             <Grid item>
// //                                 <a href='#contacts'>Contacts</a>
// //                             </Grid>
// //                             <Grid item>
// //                                 <Button onClick={handleDownload} color="inherit" >
// //                                     <AiOutlineDownload size={30} />Resume
// //                                 </Button>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                 </Grid>
// //             </Toolbar>
// //         </AppBar>
// //     );
// // };

// // export default NavBar;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Avatar, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
// // import ProfileAvatar from './profile-avatar.jpg'; // Replace with your profile avatar image
// import { AiOutlineDownload } from 'react-icons/ai';

// const NavBar = () => {
//     const handleDownload = () => {
//         window.open(`https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download`);
//     };

//     return (
//         <AppBar position="fixed" className="navbar">
//             <Toolbar>
//                 <Grid container alignItems="center" justifyContent="space-between">
//                     <Grid item>
//                         <Grid container alignItems="center" spacing={2}>
//                             <Grid item>
//                                 <Avatar alt="Profile Avatar"
//                                 // src={ProfileAvatar}
//                                 />
//                             </Grid>
//                             <Grid item>
//                                 <Typography variant="h6" component="div">
//                                     Profile
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                     <Grid item>
//                         <Grid container alignItems="center" spacing={2}>
//                             <Grid item>
//                                 <a href='#Home'>Home</a>
//                             </Grid>

//                             <Grid item>
//                                 <a href='#About'>About</a>
//                                 {/* <Link to="#About">About</Link> */}
//                             </Grid>

//                             <Grid item>
//                                 <a href='#Skills'>Skill</a>
//                             </Grid>
//                             <Grid item>
//                                 <a href='#Projects'>Projects</a>
//                             </Grid>
//                             <Grid item>
//                                 <a href='#Contacts'>Contacts</a>
//                             </Grid>
//                             <Grid item>
//                                 <Button onClick={handleDownload} color="inherit" >
//                                     <AiOutlineDownload size={30} />Resume
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default NavBar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// const NavBar = () => {
//     return (
//         <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
//             <div>
//                 <Link to="/" className="text-2xl font-bold">Portfolio</Link>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <a href="#Introduction">Introduction</a>
//                 <a href="#About">About</a>
//                 <a href="#Skills">Skills</a>
//                 <a href="#Projects">Projects</a>
//                 <a href="#Contacts">Contact</a>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <a href="https://github.com/rsnirob" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//                 <a href="https://www.linkedin.com/in/nirob-barman-a1b120147/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//                 <a href="https://www.facebook.com/nirob.barman.52/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 text-white p-4 fixed top-0 left-0 right-0">
            <div>
                <Link to="/" className="text-2xl font-bold">Portfolio</Link>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#Introduction">Introduction</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Projects">Projects</a>
                <a href="#Contacts">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="https://github.com/rsnirob" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nirob-barman-a1b120147/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/nirob.barman.52/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </nav>
    );
};

export default NavBar;

