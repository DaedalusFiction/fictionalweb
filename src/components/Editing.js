import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Showcase = () => {
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    sx={{
                        height: { xs: "25rem", md: "30rem" },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            padding: "3.5rem 1em",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "end",
                        }}
                    >
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

                        <Button
                            size="large"
                            endIcon={<ArrowRightAltIcon />}
                            variant="outlined"
                        >
                            Contact
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: { xs: "none", md: "block" },
                            borderLeft: { xs: "none", md: primary.border },
                        }}
                    >
                        <Box
                            sx={{
                                position: "sticky",
                                top: "5rem",
                                padding: "2rem 0 0 1rem",
                            }}
                        >
                            <Typography variant="h2">
                                Writer's block?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
