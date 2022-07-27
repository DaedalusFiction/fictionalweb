import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const Info = () => {
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
                marginTop: "1rem",
                marginBottom: "1rem",
            }}
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h2">Show, Don't Tell</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            borderLeft: { xs: "none", md: primary.border },
                            padding: "1rem",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ marginBottom: "10em", maxWidth: "40ch" }}
                        >
                            Convincing customers and clients to like you isn't
                            always easy. You can't just come out and tell them
                            that you're trustworthy--you have to <em>show</em>{" "}
                            them. How do you do that? You let them know you mean
                            business by shelling out for a fancy website, that's
                            how.
                        </Typography>
                        <Typography>
                            Except it can be a whole lot more affordable than
                            you might think. Just don't tell anyone that.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Info;
