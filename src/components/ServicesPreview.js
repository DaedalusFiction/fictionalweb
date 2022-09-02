import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const services = [
    {
        title: "Template",
        price: "$399-499",
        content:
            "Choose from one of several templates, all of which are built by us from the ground up in React and MUI. Select a color scheme and provide your own images and text.",
        button: {
            href: "/contact",
            text: "Start with a template",
            variant: "outlined",
        },
    },
    {
        title: "Hybrid",
        price: "$799+",
        content:
            "Start from a template, but get more control over the layout and style of your website. Select your own fonts, rearrange sections, and design customized components. ",
        button: {
            href: "/contact",
            text: "Start with hybrid",
            variant: "outlined",
        },
    },
    {
        title: "Custom",
        price: "Variable",
        content:
            "Get a completely unique website, built from scratch just for you. We'll design a personalized theme and craft a website to suit your precise individual needs.",
        button: {
            href: "/contact",
            text: "Get started with custom",
            variant: "outlined",
        },
    },
];

const ServicesPreview = () => {
    return (
        <Container>
            <Grid container>
                {services.map((service, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "4rem 1rem",
                                    borderLeft: {
                                        xs: "none",
                                        md:
                                            index === 1
                                                ? primary.border
                                                : "none",
                                    },
                                    borderRight: {
                                        xs: "none",
                                        md:
                                            index === 1
                                                ? primary.border
                                                : "none",
                                    },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            color: primary.palette.custom
                                                .accent,
                                        }}
                                    >
                                        {service.price}
                                    </Typography>
                                    <br />
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            color: primary.palette.custom
                                                .darkMuted,
                                        }}
                                    >
                                        {service.content}
                                    </Typography>
                                    <br />
                                    <br />
                                    <br />
                                </Box>
                                <Link
                                    to={service.button.href}
                                    onClick={() => {
                                        navigateToTop();
                                    }}
                                >
                                    <Button variant={service.button.variant}>
                                        {service.button.text}
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default ServicesPreview;
