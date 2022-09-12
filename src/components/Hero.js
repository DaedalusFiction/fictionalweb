import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import rose from "../images/rose.png";

const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                padding: "20vh 1em 50vh 1em",
                background: `url(${rose})`,
                backgroundSize: { xs: "fit", md: "cover" },
                backgroundPosition: { xs: "57% 0%", md: "center" },
            }}
        >
            <Box>
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
            </Box>
            <Typography sx={{ textAlign: "end" }}>
                Creative sites for creative people.
            </Typography>
        </Box>
    );
};

export default Hero;
