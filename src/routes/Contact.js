import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";

const Contact = () => {
    return (
        <Box>
            <Header />
            <TextBreak />
            <Box
                sx={{ borderTop: primary.border, borderBottom: primary.border }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h1" align="center">
                            Tell me your story.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h3"
                            sx={{
                                padding: primary.custom.spacing.paragraph,
                                textAlign: { xs: "left", md: "right" },
                            }}
                        >
                            Schedule a free consultation and show us your
                            vision.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Contact;
