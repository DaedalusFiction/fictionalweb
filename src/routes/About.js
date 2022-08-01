import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";
import truck from "../images/truck.avif";

const About = () => {
    return (
        <>
            <Header />
            <TextBreak />
            <Box
                sx={{ borderTop: primary.border, borderBottom: primary.border }}
            >
                <Grid container>
                    <Grid
                        className="gradient"
                        item
                        xs={12}
                        md={6}
                        sx={{
                            borderRight: { xs: "none", md: primary.border },
                        }}
                    >
                        <Typography
                            className="sticky"
                            variant="h1"
                            align="right"
                            sx={{
                                margin: primary.custom.spacing.paragraph,
                            }}
                        >
                            Write what you know.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ borderTop: { xs: primary.border, md: "none" } }}
                    >
                        <Box
                            sx={{
                                margin: primary.custom.spacing.paragraph,
                                paddingBottom: "8em",
                            }}
                        >
                            <Typography>
                                The tagline "Websites that tell stories" is a
                                little misleading--in the real world, everything
                                tells a story.
                            </Typography>
                            <br />
                            <Typography>
                                If you're a chef, your menu tells the story of
                                your heritage and your taste. If you're a
                                photographer, your portfolio tells the story of
                                how you see the world and how that vision has
                                changed and changes over time. If you're a
                                novelist... Well, you just tell stories.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            borderRight: {
                                xs: "none",
                                md: primary.border,
                            },
                            borderTop: primary.border,
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: "45ch",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "end",
                                margin: primary.custom.spacing.paragraph,
                            }}
                        >
                            <Box
                                className="sticky"
                                sx={{ marginBottom: "5rem" }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: { xs: "left", md: "right" },
                                    }}
                                >
                                    Your website can help that story reach a
                                    wider audience. But more than that, in
                                    telling your story it becomes part of the
                                    story itself. Everything about your website
                                    colors it, from the fonts and the images to
                                    the animated elements and the use of
                                    negative space.
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: { xs: "left", md: "right" },
                                    }}
                                >
                                    The truth is that there's no way to separate
                                    your story from how you tell it.
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        textAlign: { xs: "left", md: "right" },
                                    }}
                                >
                                    So make sure you tell it well.
                                </Typography>
                            </Box>
                            <Link
                                to="/contact"
                                onClick={() => {
                                    navigateToTop();
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="large"
                                    tabIndex={-1}
                                    endIcon={<ArrowRightAlt />}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{ borderTop: primary.border }}
                    >
                        <Box>
                            <img src={truck} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </>
    );
};

export default About;
