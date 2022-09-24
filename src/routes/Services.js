import { Box } from "@mui/material";
import React from "react";
import ServicesShowcase from "../components/ServicesShowcase";
import TextBreak from "../components/TextBreak";
import { services } from "../siteInfo";

const Services = () => {
    return (
        <Box>
            <TextBreak />
            <ServicesShowcase services={services} />
            <TextBreak />
        </Box>
    );
};

export default Services;
