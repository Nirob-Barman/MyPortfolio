// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Avatar, Box, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
// // import ProfileAvatar from './profile-avatar.jpg'; // Replace with your profile avatar image
// import { AiOutlineDownload } from 'react-icons/ai';
// const NavBar = () => {

//     const handleDownload = () => {
//         window.open(`https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download`);
//     }

//     return (
//         <AppBar position="static">
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
//                                 <Button component={Link} to="/" color="inherit">
//                                     Home
//                                 </Button>
//                             </Grid>

//                             <Grid item>
//                                 <a href='#about'>About</a>
//                             </Grid>

//                             <Grid item>
//                                 <a href='#skills'>Skill</a>
//                             </Grid>
//                             <Grid item>
//                                 <a href='#projects'>Projects</a>
//                             </Grid>
//                             <Grid item>
//                                 <a href='#contacts'>Contacts</a>
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


import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import ProfileAvatar from './profile-avatar.jpg'; // Replace with your profile avatar image
import { AiOutlineDownload } from 'react-icons/ai';

const NavBar = () => {
    const handleDownload = () => {
        window.open(`https://drive.google.com/u/1/uc?id=1p_YS8inVNrp5Pxa1jN_PjR08F3XouWbZ&export=download`);
    };

    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Avatar alt="Profile Avatar"
                                // src={ProfileAvatar}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="div">
                                    Profile
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <a href='#Home'>Home</a>
                            </Grid>

                            <Grid item>
                                <a href='#About'>About</a>
                                {/* <Link to="#About">About</Link> */}
                            </Grid>

                            <Grid item>
                                <a href='#Skills'>Skill</a>
                            </Grid>
                            <Grid item>
                                <a href='#Projects'>Projects</a>
                            </Grid>
                            <Grid item>
                                <a href='#Contacts'>Contacts</a>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleDownload} color="inherit" >
                                    <AiOutlineDownload size={30} />Resume
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
