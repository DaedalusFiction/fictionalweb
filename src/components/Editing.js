import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
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
                            Writer's Block?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: "43ch",
                                textAlign: { xs: "start", md: "end" },
                            }}
                        >
                            My background in newspaper and fiction editing has
                            given me an ear for language. If you know what you
                            want to tell people but aren't sure quite how to
                            word it, I can help.
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
                            sx={{ tabIndex: "-1" }}
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
                            You won't know what your story is about until it's
                            finished.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Showcase;
