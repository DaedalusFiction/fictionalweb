import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import BlockQuote from "../components/BlockQuote";
import Header from "../components/Header";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const quote = { author: "me", body: "writing sucks" };
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
                        md={7}
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
                            CONFESSION:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                margin: primary.custom.spacing.paragraph,
                            }}
                        >
                            <Box
                                sx={{
                                    paddingBottom: "8em",
                                }}
                            >
                                <Typography>
                                    The tagline "Websites that tell stories" is
                                    a little misleading--in the real world,
                                    everything tells a story. If you're a chef,
                                    your menu tells the story of your heritage
                                    and your taste. If you're a photographer,
                                    your portfolio tells the story of how you
                                    see the world and how that vision has
                                    changed and changes over time.
                                </Typography>
                                <br />
                                <Typography>
                                    Your website can help that story reach a
                                    wider audience. But more than that, in
                                    telling your story it becomes part of the
                                    story itself. Everything about your website
                                    colors it, from the fonts and the images to
                                    the animated elements and the use of
                                    negative space.
                                </Typography>
                                <br />
                                <Typography>
                                    The truth is that there's no way to separate
                                    your story from how you tell it.
                                </Typography>
                                <br />
                                <Typography>
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
                                    sx={{ tabIndex: "-1" }}
                                    endIcon={<ArrowRightAlt />}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            className="flex-center"
                            sx={{
                                borderRight: {
                                    xs: "none",
                                    md: primary.border,
                                },
                                borderTop: primary.border,
                            }}
                        >
                            <BlockQuote quote={quote} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                padding: primary.custom.spacing.paragraph,
                                borderTop: primary.border,
                            }}
                        ></Box>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </>
    );
};

export default About;
