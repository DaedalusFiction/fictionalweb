import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";
import forumScreencap from "../images/forumScreencap.webp";
import academicScreencap from "../images/academicScreencap.webp";
import artistScreencap2 from "../images/artistScreencap2.webp";
import artistScreencap3 from "../images/artistScreencap3.webp";
import artistScreencap4 from "../images/artistScreencap4.webp";
import designerScreencap from "../images/designerScreencap.webp";
import ImageGallery from "../components/ImageGallery";
import TextBreak from "../components/TextBreak";
import { ArrowRightAlt } from "@mui/icons-material";

const templates = [
    {
        name: "ARTIST ONE",
        href: "https://fictionalweb-artist.netlify.app",
        image: artistScreencap4,
    },
    {
        name: "ARTIST TWO",
        href: "https://fictionalweb-artist-two.netlify.app",
        image: artistScreencap2,
    },
    {
        name: "ARTIST THREE",
        href: "https://fictionalweb-artist-three.netlify.app",
        image: artistScreencap3,
    },
    {
        name: "ACADEMIC",
        href: "https://fictionalweb-academic.netlify.app",
        image: academicScreencap,
    },

    {
        name: "DESIGNER",
        href: "https://fictionalweb-designer.netlify.app",
        image: designerScreencap,
    },
    {
        name: "FORUM",
        href: "https://customforum.netlify.app",
        image: forumScreencap,
    },
];

const Templates = () => {
    return (
        <Box>
            <TextBreak />
            <Box sx={{ borderBottom: primary.border }}>
                <Typography
                    variant="h1"
                    sx={{ textAlign: "center", padding: ".5em 0" }}
                >
                    Templates<span className="text-accent">!</span>
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            padding: primary.custom.spacing.paragraph,
                            borderRight: { xs: "none", md: primary.border },
                            borderBottom: primary.border,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            gap: "1em",
                            position: "relative",
                        }}
                    >
                        <Typography
                            className="sticky"
                            sx={{ marginBottom: "3em" }}
                        >
                            All of our templates are built by us in React and
                            MUI, two of the latest JavaScript and CSS
                            frameworks. This means that your website will be
                            extremely fast, will look great on any mobile
                            device, and will be optimized for search engines and
                            accessibility.
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <Link
                                to="/contact"
                                onClick={() => {
                                    navigateToTop();
                                }}
                            >
                                <Button
                                    onClick={() => {
                                        navigateToTop();
                                    }}
                                    variant="outlined"
                                    endIcon={<ArrowRightAlt />}
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{ borderBottom: primary.border }}>
                        <ImageGallery
                            images={templates}
                            background={primary.palette.background.decorative}
                        />
                    </Box>
                </Grid>
            </Grid>
            <TextBreak />
        </Box>
    );
};

export default Templates;
