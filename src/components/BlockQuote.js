import { Box, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";

const BlockQuote = ({ quote, color }) => {
    return (
        <Box sx={{ maxWidth: "45ch", padding: primary.custom.spacing.quote }}>
            <Typography
                gutterBottom
                sx={{
                    color: color || "inherit",
                    textAlign: {
                        xs: "center",
                        md: "start",
                        fontStyle: "italic",
                    },
                }}
            >
                {quote.body}
            </Typography>
            <Typography sx={{ textAlign: "end", color: color || "inherit" }}>
                --{quote.author}
            </Typography>
        </Box>
    );
};

export default BlockQuote;
