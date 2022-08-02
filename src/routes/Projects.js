import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BlockQuote from "../components/BlockQuote";
import Header from "../components/Header";
import ProjectsComponent from "../components/ProjectsComponent";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";

const quote = {
    author: "William Faulkner",
    body: "If a story is in you, it has to come out.",
};

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
                                    Walt Whitman never stopped writing{" "}
                                    <em>Leaves of Grass</em>. He published it
                                    first in 1855 and then rewrote it
                                    eight(-ish) more times over the next four
                                    decades.
                                </Typography>
                                <br />
                                <Typography>
                                    Your website should continue to grow as you
                                    do. That's why when you hire Fictional Web,
                                    you aren't just getting a website.
                                </Typography>
                                <br />
                                <Typography>
                                    You're getting a partnership.
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
                        <Box className="sticky">
                            <Typography variant="h1" sx={{ maxWidth: "10rem" }}>
                                All writing is rewriting.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <ProjectsComponent />
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
