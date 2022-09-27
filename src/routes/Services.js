import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ServicesShowcase from "../components/ServicesShowcase";
import TextBreak from "../components/TextBreak";
import { services } from "../siteInfo";
import { primary } from "../themes/primary";

const Services = () => {
    return (
        <Box>
            <TextBreak />
            <Grid
                container
                sx={{ borderBottom: primary.border, borderTop: primary.border }}
            >
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            padding: primary.custom.spacing.paragraph,
                        }}
                    >
                        <Typography variant="h1">Services.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            padding: primary.custom.spacing.paragraph,
                            borderLeft: { xs: "none", md: primary.border },
                        }}
                    >
                        <Typography sx={{ maxWidth: "35ch" }}>
                            Every website we build, from templates on up, is
                            created using React and MUI, two of the leading
                            JavaScript and CSS frameworks. Because of this, our
                            websites consitently score 95+ in the areas of
                            Performance, Accessibility, Best Practices, and SEO.
                        </Typography>
                        <Box
                            sx={{
                                marginTop: "8rem",
                                display: "flex",
                                justifyContent: {
                                    xs: "center",
                                    md: "space-between",
                                },
                                alignItems: "end",
                                flexWrap: "wrap",
                                gap: "2em",
                            }}
                        >
                            <Typography sx={{ maxWidth: "35ch" }}>
                                If you&rsquo;re interested in taking one for a
                                test drive, just drop us a line and we&rsquo;ll
                                hand you the keys!
                            </Typography>
                            <Link to="/contact">
                                <Button
                                    variant="outlined"
                                    size="large"
                                    endIcon={<ArrowRightAlt />}
                                >
                                    contact
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ borderBottom: primary.border }}>
                <ServicesShowcase services={services} />
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Services;
