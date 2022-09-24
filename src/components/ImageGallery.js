import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const ImageGallery = ({ images, background }) => {
    return (
        <Box sx={{ padding: "1em", background: background }}>
            <Grid container spacing={2}>
                {images.map((image, index) => {
                    return (
                        <Grid item key={index} xs={6}>
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundImage: `url(${image.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "50% 50%",
                                        height: "15rem",
                                        width: "100%",
                                        transition: "00ms",
                                        filter: "sepia(70%)",
                                    }}
                                />
                                <a
                                    href={image.href}
                                    target="_BLANK"
                                    rel="noreferrer"
                                >
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "0",
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.4)",
                                            left: "0",
                                            opacity: "0",
                                            transition: "300ms",
                                            "&:hover": {
                                                opacity: "100%",
                                            },
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "white",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {image.name}
                                        </Typography>
                                    </Box>
                                </a>
                            </Box>
                            <Typography
                                variant="caption1"
                                sx={{
                                    color: primary.palette.background.default,
                                    textAlign: "center",
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {image.name}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ImageGallery;
