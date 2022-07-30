import { Box, Typography } from "@mui/material";
import React from "react";

const BlockQuote = ({ quote }) => {
    return (
        <Box sx={{ maxWidth: "45ch" }}>
            <Typography
                gutterBottom
                sx={{ textAlign: { xs: "center", md: "start" } }}
            >
                {quote.body}
            </Typography>
            <Typography sx={{ textAlign: "end" }}>--{quote.author}</Typography>
        </Box>
    );
};

export default BlockQuote;
