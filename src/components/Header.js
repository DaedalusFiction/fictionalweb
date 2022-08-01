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
import BlockQuote from "./BlockQuote";

const routes = [
    { location: "Home", to: "/" },
    { location: "About", to: "/about" },
    { location: "Projects", to: "/projects" },
    { location: "Contact", to: "/contact" },
];

const quote = {
    body: "Good fiction's job is to comfort the disturbed and disturb the comforted.",
    author: "David Foster Wallace",
};

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

                top: { xs: "0", md: "-23em" },

                backgroundColor: primary.palette.background.default,
                zIndex: "5",
            }}
        >
            <Grid container>
                <Grid
                    className="gradient"
                    item
                    xs={10}
                    md={2}
                    sx={{
                        display: "flex",
                        alignItems: "end",
                        paddingLeft: ".5em",
                    }}
                >
                    <Box sx={{ display: "flex", gap: ".5rem" }}>
                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: { xs: "0", md: "10em" },
                            }}
                        >
                            F
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: { xs: "0", md: "10em" },
                            }}
                        >
                            /
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: { xs: "0", md: "10em" },
                                color: "red",
                            }}
                        >
                            W
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    className="gradient"
                    item
                    xs={0}
                    md={4}
                    lg={6}
                    sx={{
                        display: { xs: "none", md: "block" },
                        padding: primary.custom.spacing.paragraph,
                        paddingBottom: "0",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "end",
                        }}
                    >
                        Websites that
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "end",
                            position: "sticky",
                            top: ".5em",
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
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderLeft: primary.border,
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <BlockQuote quote={quote} />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "space-around",
                        }}
                    >
                        {routes.map((route) => {
                            return (
                                <Link
                                    key={route.location}
                                    to={route.to}
                                    onClick={() => {
                                        navigateToTop(
                                            route.location === "Home"
                                        );
                                    }}
                                >
                                    <Button sx={{ tabIndex: "-1" }}>
                                        {route.location}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Box>
                    <Box
                        className="flex-center"
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
        </Box>
    );
};

export default Header;
