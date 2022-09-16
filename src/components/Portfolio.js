import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sicktoothScreencap from "../images/sicktoothScreencap.webp";
import streamerizeScreencap from "../images/streamerizeScreencap.webp";
import pfddScreencap from "../images/pfddScreencap.webp";
import forumScreencap from "../images/forumScreencap.webp";
import artistScreencap from "../images/artistScreencap.webp";
import designerScreencap from "../images/designerScreencap.webp";
import { primary } from "../themes/primary";
import BlockQuote from "./BlockQuote";
import { navigateToTop } from "../utils/utils";
import { Link } from "react-router-dom";
import ImageGallery from "./ImageGallery";

const quote = {
    body: "There have been great societies that did not use the wheel, but there have been no societies that did not tell stories.",
    author: "Ursula le Guin",
};

const projects = [
    {
        name: "ARTIST TEMPLATE",
        href: "https://fictionalweb-artist.netlify.app",
        image: artistScreencap,
    },
    {
        name: "SICKTOOTH",
        href: "https://sicktooth.com",
        image: sicktoothScreencap,
    },
    {
        name: "STREAMERIZE",
        href: "https://streamerize.com",
        image: streamerizeScreencap,
    },
    {
        name: "KDA PFDD",
        href: "https://kdapfdd.net",
        image: pfddScreencap,
    },
    {
        name: "DESIGNER TEMPLATE",
        href: "https://fictionalweb-designer.netlify.app",
        image: designerScreencap,
    },
    {
        name: "CUSTOM FORUM",
        href: "https://customforum.netlify.app",
        image: forumScreencap,
    },
];

const Portfolio = () => {
    return (
        <Box sx={{ borderTop: primary.border, borderBottom: primary.border }}>
            <Grid container>
                <Grid
                    className="gradient"
                    item
                    xs={12}
                    sx={{
                        borderBottom: primary.border,
                        padding: "5rem 0",
                    }}
                >
                    <Container maxWidth="xl">
                        <Typography variant="h1" component="h2" align="center">
                            Our <span className="text-accent">work.</span>
                        </Typography>
                    </Container>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        padding: primary.custom.spacing.paragraph,
                        borderRight: { xs: "none", md: primary.border },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "start",
                    }}
                >
                    <Box
                        sx={{
                            position: { xs: "static", md: "sticky" },
                            top: "7rem",
                            marginBottom: "3rem",
                        }}
                    >
                        <Typography variant="h3">Start to Finish.</Typography>
                        <br />
                        <Typography>
                            When we build your website, we take care of the
                            entire process. We design, develop, deploy, and
                            maintain everything ourselves without any outside
                            contracts.
                        </Typography>
                        <br />
                        <Typography>
                            And because we maintain everything we create,
                            changing something is as easy as letting us know
                            what you'd like changed.
                        </Typography>
                        <br />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: { xs: "center", md: "end" },
                        }}
                    >
                        <Link
                            to="/projects"
                            onClick={() => {
                                navigateToTop();
                            }}
                        >
                            <Button
                                size="large"
                                endIcon={<ArrowRightAltIcon />}
                                variant="outlined"
                                tabIndex={-1}
                            >
                                See All Projects
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: primary.palette.background.decorative,
                        borderTop: { xs: primary.border, md: "none" },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            margin: "2rem",
                            color: primary.palette.background.default,
                            textAlign: { xs: "center", md: "right" },
                        }}
                    >
                        PROJECTS
                    </Typography>
                    <ImageGallery images={projects} />
                    <Box>
                        <BlockQuote
                            quote={quote}
                            color={primary.palette.background.default}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;
