import {
    Box,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import MenuIcon from "@mui/icons-material/Menu";
import { navigateToTop, replaceDumbQuote } from "../utils/utils";
import BlockQuote from "./BlockQuote";
import NavBar from "./NavBar";

const routes = [
    { location: "Home", to: "/" },
    { location: "Services", to: "/services" },
    { location: "Templates", to: "/templates" },
    { location: "Projects", to: "/projects" },
    { location: "About", to: "/about" },
    { location: "Contact", to: "/contact" },
];

const quote = {
    body: replaceDumbQuote(
        "Good fiction's job is to comfort the disturbed and disturb the comfortable."
    ),
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

                top: { xs: "0", lg: "-23em" },

                backgroundColor: primary.palette.background.default,
                zIndex: "5",
            }}
        >
            <Grid container>
                <Grid
                    className="gradient"
                    item
                    xs={10}
                    lg={2}
                    sx={{
                        display: "flex",
                        alignItems: "end",
                        paddingLeft: ".5em",
                        paddingBottom: { xs: "0", lg: "0.75rem" },
                    }}
                >
                    <Link
                        to="/"
                        onClick={() => {
                            navigateToTop(true);
                        }}
                    >
                        <Box sx={{ display: "flex", gap: ".5rem" }}>
                            <Typography
                                variant="h3"
                                component="p"
                                sx={{
                                    marginTop: { xs: "0", lg: "10em" },
                                }}
                            >
                                F
                            </Typography>
                            <Typography
                                variant="h3"
                                component="p"
                                sx={{
                                    marginTop: { xs: "0", lg: "10em" },
                                }}
                            >
                                /
                            </Typography>
                            <Typography
                                variant="h3"
                                component="p"
                                sx={{
                                    marginTop: { xs: "0", lg: "10em" },
                                    color: primary.palette.custom.accent,
                                }}
                            >
                                W
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid
                    className="gradient"
                    item
                    lg={4}
                    sx={{
                        display: { xs: "none", lg: "block" },
                        padding: primary.custom.spacing.paragraph,
                        paddingBottom: "0",
                    }}
                >
                    <Typography
                        variant="h3"
                        component="p"
                        sx={{
                            textAlign: "end",
                        }}
                    >
                        We create
                    </Typography>
                    <Typography
                        variant="h3"
                        component="p"
                        sx={{
                            textAlign: "end",
                        }}
                    >
                        websites that
                    </Typography>
                    <Typography
                        variant="h3"
                        component="p"
                        className="text-accent"
                        sx={{
                            color: primary.palette.custom.accent,
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
                    lg={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderLeft: primary.border,
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", lg: "block" },
                        }}
                    >
                        <BlockQuote quote={quote} />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", lg: "flex" },
                            marginBottom: ".5rem",
                        }}
                    >
                        <NavBar />
                    </Box>
                    <Box
                        className="flex-center"
                        sx={{
                            display: { xs: "flex", lg: "none" },
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
                                display: { xs: "block", lg: "none" },
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
