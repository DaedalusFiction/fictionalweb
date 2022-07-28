import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const links = [
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
        text: "Snack Bar",
        href: "https://snackbarband.com",
    },
];

const Footer = () => {
    return (
        <Box sx={{ borderTop: primary.border }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} md={4} sx={{ padding: "2em" }}>
                        <Typography variant="h3" component="h6">
                            Pages.
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5em",
                            }}
                        >
                            {links.map((link) => {
                                return (
                                    <a className="link-footer" href={link.href}>
                                        {link.text}
                                    </a>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ padding: "2em", borderLeft: primary.border }}
                    >
                        <Typography variant="h3" component="h6">
                            My websites.
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5em",
                            }}
                        >
                            {links.map((link) => {
                                return (
                                    <a className="link-footer" href={link.href}>
                                        {link.text}
                                    </a>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ padding: "2em", borderLeft: primary.border }}
                    >
                        <Typography variant="h3" component="h6">
                            Social media.
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5em",
                            }}
                        >
                            {links.map((link) => {
                                return (
                                    <a className="link-footer" href={link.href}>
                                        {link.text}
                                    </a>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
