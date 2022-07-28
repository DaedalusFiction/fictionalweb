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
                <Grid container sx={{ height: "30rem" }}>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            padding: "1em",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="body1" sx={{ maxWidth: "43ch" }}>
                            My background in newspaper and fiction editing has
                            given me an eye for language. If you know what you
                            want to tell people but aren't sure quite how to
                            word it, I can help.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "2em",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ maxWidth: "45ch" }}>
                                Schedule a complementary strategy session today:
                            </Typography>
                            <Button
                                size="large"
                                endIcon={<ArrowRightAltIcon />}
                                variant="outlined"
                            >
                                Contact
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ borderLeft: { xs: "none", md: primary.border } }}
                    >
                        <Box
                            sx={{
                                position: "sticky",
                                top: "5rem",

                                padding: "2rem 0",
                                textAlign: "end",
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
