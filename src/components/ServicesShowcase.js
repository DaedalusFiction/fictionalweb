import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";
import CheckIcon from "@mui/icons-material/Check";

const ServicesShowcase = ({ services, isPreview }) => {
    return (
        <Box>
            <Container>
                <Grid container>
                    {services.map((service, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "100%",
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
                                            variant="subtitle2"
                                            sx={{ textAlign: "center" }}
                                        >
                                            starting at
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                textAlign: "center",
                                                color: primary.palette.custom
                                                    .accent,
                                                marginBottom: ".5em",
                                            }}
                                        >
                                            {service.price}
                                        </Typography>
                                        {isPreview && (
                                            <Typography
                                                sx={{
                                                    textAlign: "center",
                                                    color: primary.palette
                                                        .custom.darkMuted,
                                                }}
                                            >
                                                {service.content}
                                            </Typography>
                                        )}
                                        {!isPreview && (
                                            <Box>
                                                {service.features.map(
                                                    (feature, index) => {
                                                        return (
                                                            <Box
                                                                key={index}
                                                                sx={{
                                                                    padding:
                                                                        ".25rem 0",
                                                                    display:
                                                                        "flex",
                                                                    gap: ".5rem",
                                                                }}
                                                            >
                                                                <CheckIcon
                                                                    sx={{
                                                                        transform:
                                                                            "translateY(3px)",
                                                                    }}
                                                                />
                                                                <Box>
                                                                    <Typography variant="h6">
                                                                        {
                                                                            feature.name
                                                                        }
                                                                    </Typography>
                                                                    <Typography variant="caption">
                                                                        {
                                                                            feature.description
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        );
                                                    }
                                                )}
                                            </Box>
                                        )}
                                    </Box>
                                    <Box sx={{ marginTop: "4rem" }}>
                                        <Link
                                            to={service.button.href}
                                            onClick={() => {
                                                navigateToTop();
                                            }}
                                        >
                                            <Button
                                                onClick={() => {
                                                    navigateToTop();
                                                }}
                                                variant={service.button.variant}
                                            >
                                                {service.button.text}
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesShowcase;
