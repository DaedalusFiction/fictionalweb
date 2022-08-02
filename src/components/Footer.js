import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const sections = [
    {
        name: "Pages.",
        items: [
            {
                text: "Home",
                href: "/",
            },
            {
                text: "About",
                href: "/about",
            },
            {
                text: "Projects",
                href: "/projects",
            },
            {
                text: "Contact",
                href: "/contact",
            },
        ],
    },
    {
        name: "Projects.",
        items: [
            {
                text: "The Forums",
                href: "https://customforum.netlify.app",
            },
            {
                text: "Sicktooth",
                href: "https://sicktooth.com",
            },
            {
                text: "Streamerize",
                href: "https://streamerize.com",
            },
            {
                text: "The Great Road Trip",
                href: "https://thegreatroadtrip.net",
            },
        ],
    },
    {
        name: "Media.",
        items: [
            {
                text: "Facebook",
                href: "https://customforum.netlify.app",
            },
            {
                text: "Twitter",
                href: "https://sicktooth.com",
            },
            {
                text: "Instagram",
                href: "https://streamerize.com",
            },
            {
                text: "LinkedIn",
                href: "https://snackbarband.com",
            },
        ],
    },
];

const Footer = () => {
    return (
        <Box>
            <Grid container>
                {sections.map((section) => {
                    return (
                        <Grid
                            className="gradient"
                            item
                            key={section.name}
                            xs={12}
                            md={4}
                            sx={{
                                padding: "2em",
                                borderTop: primary.border,
                                borderLeft: { xs: "none", md: primary.border },
                            }}
                        >
                            <Typography variant="h3" component="h6">
                                {section.name}
                            </Typography>
                            <br />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".5em",
                                }}
                            >
                                {section.name === "Pages." &&
                                    section.items.map((link) => {
                                        return (
                                            <Link
                                                to={link.href}
                                                key={link.text}
                                                onClick={() => {
                                                    navigateToTop();
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    {link.text}
                                                </Typography>
                                            </Link>
                                        );
                                    })}
                                {section.name !== "Pages." &&
                                    section.items.map((link) => {
                                        return (
                                            <a
                                                key={link.text}
                                                className="link-footer"
                                                href={link.href}
                                                target="_BLANK"
                                                rel="noreferrer"
                                            >
                                                <Typography>
                                                    {link.text}
                                                </Typography>
                                            </a>
                                        );
                                    })}
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Footer;
