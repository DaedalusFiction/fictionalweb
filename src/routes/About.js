import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
const About = () => {
    return (
        <>
            <Header />
            <Box sx={{ borderBottom: primary.border }}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={7}
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
                                CONFESSION:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    margin: primary.custom.spacing.paragraph,
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <TextBreak />
        </>
    );
};

export default About;
