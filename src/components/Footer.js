import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const Footer = ({ sections }) => {
    return (
        <Box>
            <Grid container>
                {sections.map((section) => {
                    return (
                        <Grid
                            className="gradient"
                            item
                            key={section.name}
                            xs={12}
                            md={3.8}
                            sx={{
                                padding: "2em",
                                borderTop: primary.border,
                                borderLeft: { xs: "none", md: primary.border },
                            }}
                        >
                            <Typography variant="h3" component="h6">
                                {section.name}
                            </Typography>
                            <br />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".5em",
                                }}
                            >
                                {section.name === "Pages." &&
                                    section.items.map((link) => {
                                        return (
                                            <Link
                                                to={link.href}
                                                key={link.text}
                                                onClick={() => {
                                                    navigateToTop();
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    {link.text}
                                                </Typography>
                                            </Link>
                                        );
                                    })}
                                {section.name !== "Pages." &&
                                    section.items.map((link) => {
                                        return (
                                            <a
                                                key={link.text}
                                                className="link-footer"
                                                href={link.href}
                                                target="_BLANK"
                                                rel="noreferrer"
                                            >
                                                <Typography>
                                                    {link.text}
                                                </Typography>
                                            </a>
                                        );
                                    })}
                            </Box>
                        </Grid>
                    );
                })}
                <Grid item xs={12} md={0.6}>
                    <Box
                        className="gradient"
                        sx={{
                            height: "100%",
                            borderTop: primary.border,
                            padding: ".5rem",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{
                                writingMode: {
                                    xs: "inherit",
                                    md: "vertical-rl",
                                },
                                textOrientation: "mixed",
                            }}
                        >
                            <span style={{ fontSize: "1.2rem" }}>&copy;</span>{" "}
                            2022 Fictional Web (obv)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
