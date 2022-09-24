import { Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import rose from "../images/rose2.webp";

const Hero = () => {
    return (
        <Fade in={true} timeout={{ enter: "500ms" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    padding: {
                        xs: "15vh 1em 55vh 1em",
                        md: "20vh 1em 50vh 1em",
                    },
                    background: `url(${rose})`,
                    backgroundSize: { xs: "cover", md: "cover" },
                    backgroundPosition: { xs: "60% 0%", md: "center" },
                }}
            >
                <Box>
                    <Fade in={true} timeout={{ enter: "1800ms" }}>
                        <Typography variant="h1" component="p">
                            FICTIONAL
                        </Typography>
                    </Fade>
                    <Fade in={true} timeout={{ enter: "2500ms" }}>
                        <div>
                            <Typography
                                variant="h1"
                                component="p"
                                sx={{
                                    lineHeight: ".85em",
                                    color: primary.palette.custom.accent,
                                    textAlign: "end",
                                }}
                            >
                                WEB.
                            </Typography>
                            <Typography sx={{ textAlign: "end" }}>
                                Creative sites for creative people.
                            </Typography>
                        </div>
                    </Fade>
                </Box>
            </Box>
        </Fade>
    );
};

export default Hero;
