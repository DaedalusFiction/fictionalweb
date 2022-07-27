import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                position: "sticky",
                                top: "5rem",
                                padding: "2rem 0",
                            }}
                        >
                            <Typography variant="h2">
                                Show, don't tell.
                            </Typography>
                            <Typography variant="subtitle1">
                                It applies to more than just writing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            borderLeft: { xs: "none", md: primary.border },
                            padding: "1em",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ marginBottom: "5em", maxWidth: "40ch" }}
                        >
                            Convincing customers and clients to like you isn't
                            always easy. You can't just come out and tell them
                            that you're trustworthy--you have to <em>show</em>{" "}
                            them. How do you do that? You let them know you mean
                            business by shelling out for a fancy website, that's
                            how.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ maxWidth: "40ch" }}>
                                Except it can be a whole lot more affordable
                                than you might think. Just don't tell anyone
                                that.
                            </Typography>
                            <Button
                                size="large"
                                endIcon={<ArrowRightAltIcon />}
                                variant="outlined"
                            >
                                Services
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
