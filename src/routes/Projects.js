import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import ProjectsComponent from "../components/ProjectsComponent";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";

const Projects = () => {
    return (
        <Box sx={{ backgroundColor: primary.palette.custom.light }}>
            <Header />
            <TextBreak />
            <Box sx={{ borderBottom: primary.border }}>
                <ProjectsComponent />
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Projects;
