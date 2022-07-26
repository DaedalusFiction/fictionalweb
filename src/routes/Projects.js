import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BlockQuote from "../components/BlockQuote";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import sicktoothScreencap from "../images/sicktoothScreencap.webp";
import pfddScreencap from "../images/pfddScreencap.webp";
import joshScreencap from "../images/joshScreencap.webp";
import cosimaScreencap from "../images/cosimaScreencap.webp";
import ProjectsShowcase from "../components/ProjectsShowcase";
import { replaceDumbQuote } from "../utils/utils";

const quote = {
    author: "William Faulkner",
    body: "If a story is in you, it has to come out.",
};

const projects = [
    {
        name: "SICKTOOTH",
        type: "Literary Journal",
        description:
            "Quarterly literary journal, publishing short-form fiction, creative non-fiction, and poetry.",
        technologies: ["React", "MUI", "Markdown", "Firebase"],
        href: "https://sicktooth.com",
        image: sicktoothScreencap,
        alt: "sicktooth website screenshot",
    },
    {
        name: "COSIMA HEWES",
        type: "Artist Portfolio",
        description: "Portfolio website for pastoral artist Cosima Hewes",
        technologies: ["React", "MUI", "Firebase"],
        href: "https://cosimahewes.com",
        image: cosimaScreencap,
        alt: "cosima hewes website screenshot",
    },
    {
        name: "JOSH STEHLE",
        type: "Author Portfolio",
        description:
            "Portfolio page for author and autism advocate Josh Stehle. Handles newsletter sign-up through email.js.",
        technologies: ["React", "MUI", "Email.js"],
        href: "https://joshstehle.com",
        image: joshScreencap,
        alt: "joshStehle website scrrenshot",
    },

    {
        name: "KDA PFDD",
        type: "Event Page",
        description: replaceDumbQuote(
            "Event page providing information and sign-up to participate in the 2022 Kennedy's Disease Association's Patient-Focused Drug Development Conference and Study."
        ),
        technologies: ["React", "MUI", "Firebase", "OAuth 2.0"],
        href: "https://kdapfdd.net",
        image: pfddScreencap,
        alt: "kda pfdd website scrrenshot",
    },
];

const Projects = () => {
    return (
        <Box sx={{ backgroundColor: primary.palette.custom.light }}>
            <TextBreak />
            <Box
                sx={{ borderBottom: primary.border, borderTop: primary.border }}
            >
                <Grid container>
                    <Grid
                        order={{ xs: 2, md: 1 }}
                        item
                        xs={12}
                        md={6}
                        sx={{
                            borderBottom: primary.border,
                            borderRight: { xs: "none", md: primary.border },
                            padding: primary.custom.spacing.paragraph,
                            display: "flex",
                            justifyContent: "end",
                            paddingBottom: { xs: "8rem", md: "25rem" },
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    textAlign: { xs: "left", md: "right" },
                                }}
                            >
                                <Typography>
                                    Your website should continue to grow as you
                                    do. That&rsquo;s why when you go with
                                    Fictional Web, you aren&rsquo;t just getting
                                    a website.
                                </Typography>
                                <br />
                                <Typography>
                                    You&rsquo;re getting a partnership.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        order={{ xs: 1, md: 2 }}
                        className="gradient"
                        item
                        xs={12}
                        md={6}
                        sx={{
                            borderBottom: primary.border,
                            padding: primary.custom.spacing.paragraph,
                        }}
                    >
                        <Box>
                            <Typography variant="h1" sx={{ maxWidth: "10rem" }}>
                                All writing is{" "}
                                <span className="text-accent">rewriting.</span>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {/* <ProjectsComponent /> */}
                <ProjectsShowcase projects={projects} />
                <Box
                    className="flex-center"
                    sx={{
                        borderTop: primary.border,
                    }}
                >
                    <BlockQuote quote={quote} />
                </Box>
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Projects;
