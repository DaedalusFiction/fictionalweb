import {
    Box,
    Button,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import MenuIcon from "@mui/icons-material/Menu";
import { navigateToTop } from "../utils/utils";

const routes = [
    { location: "Projects", to: "/projects" },
    { location: "About", to: "/about" },
    { location: "Testimonials", to: "/testimonials" },
    { location: "Contact", to: "/contact" },
];

// const Header = () => {
//     const [anchorElNav, setAnchorElNav] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = (e) => {
//         setAnchorElNav(null);
//     };
//     return (
//         <Box
//             sx={{
//                 borderTop: primary.border,
//                 borderBottom: primary.border,
//                 marginTop: "2rem",
//                 position: "sticky",
//                 top: "-24rem",
//                 background: primary.palette.background.default,
//                 zIndex: "5",
//             }}
//         >
//             <Container maxWidth="xl">
//                 <Grid container>
//                     <Grid
//                         item
//                         xs={12}
//                         md={8}
//                         sx={{
//                             display: "flex",
//                             flexFlow: "column",
//                             justifyContent: "space-between",
//                             height: "30rem",
//                         }}
//                     >
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 textAlign: "end",
//                                 position: { xs: "static", md: "sticky" },
//                                 margin: "1em",
//                                 top: "0",
//                             }}
//                         >
//                             Websites that tell the truth.
//                         </Typography>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 width: { xs: "inherit", md: "fit-content" },
//                                 justifyContent: "space-between",
//                             }}
//                         >
//                             <Typography variant="h3">F / W</Typography>
//                             <Box
//                                 sx={{
//                                     display: { xs: "flex", md: "none" },
//                                 }}
//                             >
//                                 <IconButton
//                                     size="large"
//                                     aria-label="account of current user"
//                                     aria-controls="menu-appbar"
//                                     aria-haspopup="true"
//                                     onClick={handleOpenNavMenu}
//                                     color="inherit"
//                                 >
//                                     <MenuIcon />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorElNav}
//                                     anchorOrigin={{
//                                         vertical: "bottom",
//                                         horizontal: "left",
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: "top",
//                                         horizontal: "left",
//                                     }}
//                                     open={Boolean(anchorElNav)}
//                                     onClose={handleCloseNavMenu}
//                                     sx={{
//                                         display: { xs: "block", md: "none" },
//                                     }}
//                                 >
//                                     {routes.map((route, index) => (
//                                         <Link
//                                             key={index}
//                                             to={route.to}
//                                             onClick={() => {
//                                                 navigateToTop();
//                                             }}
//                                         >
//                                             <MenuItem
//                                                 key={index}
//                                                 onClick={handleCloseNavMenu}
//                                             >
//                                                 <Typography textAlign="center">
//                                                     {route.location}
//                                                 </Typography>
//                                             </MenuItem>
//                                         </Link>
//                                     ))}
//                                 </Menu>
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <Box
//                             sx={{
//                                 display: { xs: "none", md: "flex" },
//                                 justifyContent: "space-around",
//                                 alignItems: "end",
//                                 borderLeft: { xs: "none", md: primary.border },
//                             }}
//                         >
//                             {routes.map((route) => {
//                                 return (
//                                     <Link key={route.location} to={route.to}>
//                                         <Button sx={{ tabIndex: "-1" }}>
//                                             {route.location}
//                                         </Button>
//                                     </Link>
//                                 );
//                             })}
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default Header;

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
                position: "sticky",

                top: "-29rem",

                backgroundColor: primary.palette.background.default,
                zIndex: "5",
            }}
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        item
                        xs={10}
                        md={2}
                        sx={{ display: "flex", alignItems: "end" }}
                    >
                        <Typography
                            variant="h3"
                            sx={{ marginTop: { xs: "0", sm: "10em" } }}
                        >
                            F / W
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={0}
                        md={4}
                        lg={6}
                        sx={{
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "end",
                                // position: "sticky",
                                // top: "0",
                                margin: ".25em .25em 0 0",
                            }}
                        >
                            Websites that
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "end",
                                position: "sticky",
                                top: "0",
                                margin: "0 .25em 0 0",
                            }}
                        >
                            tell stories.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        md={6}
                        lg={4}
                        sx={{
                            display: "flex",
                            alignItems: "end",
                            borderLeft: primary.border,
                        }}
                    >
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "space-around",
                            }}
                        >
                            {routes.map((route) => {
                                return (
                                    <Link key={route.location} to={route.to}>
                                        <Button sx={{ tabIndex: "-1" }}>
                                            {route.location}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {routes.map((route, index) => (
                                    <Link
                                        key={index}
                                        to={route.to}
                                        onClick={() => {
                                            navigateToTop();
                                        }}
                                    >
                                        <MenuItem
                                            key={index}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                {route.location}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
