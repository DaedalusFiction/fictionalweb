import { Chip, Grid, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import forumScreencap from "../images/forumScreencap.webp";
import pfddScreencap from "../images/pfddScreencap.webp";
import sicktoothScreencap from "../images/sicktoothScreencap.webp";
import streamerizeScreencap from "../images/streamerizeScreencap.webp";
import { primary } from "../themes/primary";

const projects = [
    {
        name: "SICKTOOTH",
        url: "https://www.sicktooth.com",
        image: sicktoothScreencap,
        description: "Literary Journal",
        technologies: ["React", "MUI", "Firebase", "Markdown"],
    },
    {
        name: "Streamerize",
        url: "https://www.streamerize.com",
        image: streamerizeScreencap,
        description:
            "Displays random twitch.tv streams with fewer than ten viewers",
        technologies: ["React", "MUI", "Netlify Serverless Functions"],
    },
    {
        name: "The Forums",
        url: "https://customforum.netlify.app",
        image: forumScreencap,
        description: "Customizeable Message Board Template",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "KDA PFDD",
        url: "https://www.kdapfdd.net",
        image: pfddScreencap,
        description: "Event page for Patient-Focused Drug Development",
        technologies: ["React", "MUI", "Email.js"],
    },
];

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [photoActive, setPhotoActive] = useState(true);

    const handleClick = (project) => {
        if (project.name === currentProject.name) {
            return;
        }
        setPhotoActive(false);
        setTimeout(() => {
            setCurrentProject(project);
        }, 300);
    };

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={4}>
                    {projects.map((project, index) => {
                        return (
                            <Box
                                key={index}
                                tabIndex={1}
                                onClick={() => {
                                    handleClick(project);
                                }}
                                sx={{
                                    // marginBottom: ".5em",
                                    padding: ".5em .75em",
                                    border:
                                        project.name === currentProject.name
                                            ? primary.border
                                            : "1px solid " +
                                              primary.palette.background
                                                  .default,
                                    "&:hover": {
                                        border: primary.border,
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <Typography variant="h6">
                                    {project.name}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {project.description}
                                </Typography>
                                {project.technologies.map((technology) => {
                                    return (
                                        <Chip
                                            key={technology}
                                            color="secondary"
                                            label={technology}
                                            sx={{
                                                margin: ".5em .5em .5em 0",
                                                cursor: "pointer",
                                            }}
                                        />
                                    );
                                })}
                                {currentProject.name === project.name && (
                                    <Box
                                        sx={{
                                            overflow: "hidden",
                                            borderRadius: primary.borderRadius,
                                            display: {
                                                xs: "flex",
                                                md: "none",
                                            },
                                        }}
                                    >
                                        <Slide
                                            direction="down"
                                            timeout={{ enter: 550 }}
                                            in={
                                                photoActive &&
                                                project.name ===
                                                    currentProject.name
                                            }
                                        >
                                            <a href={project.url}>
                                                <img
                                                    className="screencap"
                                                    src={project.image}
                                                    alt="project screenshot"
                                                />
                                            </a>
                                        </Slide>
                                    </Box>
                                )}
                            </Box>
                        );
                    })}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        overflow: "hidden",
                    }}
                >
                    <Box className="flex-center">
                        {currentProject && (
                            <Slide direction="left" in={photoActive}>
                                <a
                                    href={currentProject.url}
                                    target="_BLANK"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="screencap"
                                        onLoad={() => {
                                            setPhotoActive(true);
                                        }}
                                        src={currentProject.image}
                                        alt={`Screenshot of ${currentProject.name} website`}
                                    />
                                </a>
                            </Slide>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Projects;
