import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Showcase = () => {
    return (
        <Box
            sx={{
                borderTop: primary.border,
                borderBottom: primary.border,
            }}
        >
            <Grid container>
                <Grid
                    className="gradient"
                    item
                    xs={12}
                    md={4}
                    sx={{
                        borderBottom: {
                            xs: primary.border,
                            md: "none",
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "sticky",
                            top: "7rem",
                            padding: "1rem",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: { xs: "center", md: "end" },
                            }}
                        >
                            Show, don't tell.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        borderLeft: { xs: "none", md: primary.border },
                        padding: "1rem",
                        display: "flex",
                        gap: "8em",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body1" sx={{ maxWidth: "40ch" }}>
                        Convincing customers and clients to like you isn't
                        always easy. You can't just come out and tell them that
                        you're trustworthy--you have to <em>show</em> them. How
                        do you do that? You let them know you mean business by
                        shelling out for a fancy website, that's how.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "2em",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ maxWidth: "40ch" }}>
                            Except it can be a whole lot more affordable than
                            you might think. Just don't tell anyone that.
                        </Typography>
                        <Button
                            size="large"
                            endIcon={<ArrowRightAltIcon />}
                            variant="outlined"
                        >
                            Services
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    className="flex-center"
                    item
                    xs={12}
                    sx={{ borderTop: primary.border, padding: "3rem 1rem" }}
                >
                    <Box sx={{ maxWidth: "45ch" }}>
                        <Typography
                            gutterBottom
                            sx={{ textAlign: { xs: "center", md: "start" } }}
                        >
                            “If only there could be an invention that bottled up
                            a memory, like scent. And it never faded, and it
                            never got stale. And then, when one wanted it, the
                            bottle could be uncorked, and it would be like
                            living the moment all over again.”
                        </Typography>
                        <Typography sx={{ textAlign: "end" }}>
                            --Daphne du Maurier, Rebecca
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Showcase;
