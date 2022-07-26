import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";
import truck from "../images/truck.webp";

const About = () => {
    return (
        <>
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
                            variant="h1"
                            align="right"
                            sx={{
                                margin: primary.custom.spacing.paragraph,
                            }}
                        >
                            Write for your audience.
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
                                maxWidth: "45ch",
                            }}
                        >
                            <Typography>
                                The tagline <em>websites that tell stories </em>
                                is a little misleading--in the real world,
                                everything tells a story.
                            </Typography>
                            <br />
                            <Typography>
                                If you&rsquo;re a chef, your menu tells the
                                story of your heritage and your taste. If
                                you&rsquo;re a photographer, your portfolio
                                tells the story of how you see the world and how
                                that vision has changed and changes over time.
                                If you&rsquo;re a novelist... Well, you just
                                tell stories.
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
                                sx={{
                                    marginBottom: "5rem",
                                    position: { xs: "static", md: "sticky" },
                                    top: "7rem",
                                }}
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
                                    The truth is that there&rsquo;s no way to
                                    separate your story from how you tell it.
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
                        <Typography
                            variant="subtitle2"
                            align="right"
                            sx={{ marginRight: "1em" }}
                        >
                            Photo by Morash on Unsplash
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </>
    );
};

export default About;
