import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { navigateToTop } from "../utils/utils";
import { Link } from "react-router-dom";

const Showcase = () => {
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
            }}
        >
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        padding: "1em",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "end",
                        gap: "8rem",
                    }}
                >
                    <Box
                        sx={{
                            position: { xs: "static", md: "sticky" },
                            top: "7rem",
                            marginBottom: "5rem",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{ textAlign: { xs: "center", md: "end" } }}
                            gutterBottom
                        >
                            Writer&rsquo;s Block?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: "43ch",
                                textAlign: { xs: "start", md: "end" },
                            }}
                        >
                            Our background in newspaper and fiction editing has
                            given us an ear for language. If you know what you
                            want to tell people but aren&rsquo;t sure quite how
                            to word it, we can help.
                        </Typography>
                    </Box>

                    <Link
                        to="/contact"
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
                            Contact
                        </Button>
                    </Link>
                </Grid>
                <Grid
                    className="gradient"
                    item
                    xs={12}
                    md={6}
                    sx={{
                        borderLeft: { xs: "none", md: primary.border },
                    }}
                >
                    <Box
                        sx={{
                            position: "sticky",
                            top: "5rem",
                            padding: "2rem",
                            borderTop: { xs: primary.border, md: "none" },
                        }}
                    >
                        <Typography variant="h1">
                            You won&rsquo;t know what{" "}
                            <span className="text-accent">your story</span> is
                            about until it&rsquo;s finished.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Showcase;
