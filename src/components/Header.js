import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";

const routes = [
    { location: "Projects", to: "/projects" },
    { location: "About", to: "/about" },
    { location: "Testimonials", to: "/testimonials" },
    { location: "Contact", to: "/contact" },
];

const Header = () => {
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
                marginTop: "2rem",
                marginBottom: "2rem",
                position: "sticky",
                top: "-18em",
                background: primary.palette.background.default,
            }}
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        item
                        xs={0}
                        md={8}
                        sx={{
                            display: "flex",
                            flexFlow: "column",
                            justifyContent: "space-between",
                            padding: "1em 1em 0 0",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "end",
                                marginBottom: "3em",
                            }}
                        >
                            websites that tell the truth
                        </Typography>
                        <Typography variant="h3">F / W</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "end",
                            borderLeft: { xs: "none", md: primary.border },
                            padding: "0 1em",
                        }}
                    >
                        {routes.map((route) => {
                            return (
                                <Link key={route.location} to={route.to}>
                                    <Button sx={{ tabIndex: "-1" }}>
                                        {route.location}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
