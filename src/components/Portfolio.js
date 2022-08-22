import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sicktoothScreencap from "../images/sicktoothScreencap.webp";
import { primary } from "../themes/primary";
import BlockQuote from "./BlockQuote";
import { navigateToTop } from "../utils/utils";
import { Link } from "react-router-dom";

const quote = {
    body: "There have been great societies that did not use the wheel, but there have been no societies that did not tell stories.",
    author: "Ursula le Guin",
};

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
                            Show them what{" "}
                            <span className="text-accent">you're made</span> of.
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
                        <Typography>
                            We could tell you all about the websites we build,
                            how they're all custom designed from the ground up,
                            how they're all built in the latest JavaScript and
                            CSS frameworks, and how they consistently score 97+
                            on Google Lighthouse's desktop analytics.
                        </Typography>
                        <br />
                        <Typography>Or we could just show you.</Typography>
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
                                See Projects
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
                        borderTop: { xs: primary.border, md: "none" },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            margin: "2rem",
                            textAlign: { xs: "center", md: "right" },
                        }}
                    >
                        SICKTOOTH
                    </Typography>
                    <a
                        href="https://sicktooth.com"
                        target="_BLANK"
                        rel="noreferrer"
                    >
                        <img
                            style={{ objectFit: "cover" }}
                            src={sicktoothScreencap}
                            alt="sicktooth website screenshot"
                        />
                    </a>
                    <Box>
                        <BlockQuote quote={quote} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;
