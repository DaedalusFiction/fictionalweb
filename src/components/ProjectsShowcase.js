import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import ProjectShowcase from "./ProjectShowcase";

const ProjectsShowcase = ({ projects }) => {
    return (
        <Box>
            <Box sx={{ padding: "3em 0" }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{ textAlign: "center" }}
                >
                    Our work:
                </Typography>
            </Box>

            {projects.map((project, index) => {
                return (
                    <ProjectShowcase
                        key={index}
                        project={project}
                        //every other project will be reversed
                        reversed={index % 2 === 1}
                    />
                );
            })}
        </Box>
    );
};

export default ProjectsShowcase;
