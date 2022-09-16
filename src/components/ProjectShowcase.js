// import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const ProjectShowcase = ({ project, reversed }) => {
    return (
        <Box>
            <Grid
                container
                // spacing={6}
                direction={reversed ? "row-reverse" : "row"}
            >
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: primary.custom.spacing.quote,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            borderTop: primary.border,
                            borderLeft: {
                                xs: "none",
                                md: reversed ? primary.border : "none",
                            },
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ textAlign: reversed ? "left" : "right" }}
                            >
                                {project.type}
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: reversed ? "left" : "right",
                                    marginBottom: ".25em",
                                }}
                            >
                                {project.name}
                            </Typography>
                            {/* <br /> */}
                            <Typography
                                sx={{ textAlign: reversed ? "left" : "right" }}
                            >
                                {project.description}
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: reversed ? "start" : "end",
                                }}
                            >
                                <Button
                                    endIcon={<ArrowRightAltIcon />}
                                    variant="outlined"
                                    size="large"
                                    href={project.href}
                                >
                                    visit site
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            minHeight: "15rem",
                            height: "100%",
                            width: "100%",
                            transition: "00ms",
                            filter: "sepia(70%)",
                            borderLeft: {
                                xs: "none",
                                md: !reversed ? primary.border : "none",
                            },
                            borderTop: primary.border,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectShowcase;
