import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const Hero = () => {
    return (
        <Box
            sx={{
                height: "90vh",
                overflow: "hidden",
            }}
        >
            <Box className="hero" id="spacer"></Box>
            <Box className="hero" id="inset" sx={{ padding: "0 1rem 0 1rem" }}>
                <Typography variant="h1" component="p">
                    FICTIONAL
                </Typography>
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
            </Box>
        </Box>
    );
};

export default Hero;
