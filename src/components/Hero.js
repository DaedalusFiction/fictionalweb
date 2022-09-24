import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import rose from "../images/rose2.webp";

const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                padding: { xs: "15vh 1em 55vh 1em", md: "20vh 1em 50vh 1em" },
                background: `url(${rose})`,
                backgroundSize: { xs: "cover", md: "cover" },
                backgroundPosition: { xs: "60% 0%", md: "center" },
            }}
        >
            <Box>
                <Typography className="fade" variant="h1" component="p">
                    FICTIONAL
                </Typography>
                <Typography
                    variant="h1"
                    component="p"
                    className="fade-slow"
                    sx={{
                        lineHeight: ".85em",
                        color: primary.palette.custom.accent,
                        textAlign: "end",
                    }}
                >
                    WEB.
                </Typography>
            </Box>
            <Typography className="fade-slow" sx={{ textAlign: "end" }}>
                Creative sites for creative people.
            </Typography>
        </Box>
    );
};

export default Hero;
