import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BlockQuote from "./BlockQuote";
import { Link } from "react-router-dom";
import { navigateToTop } from "../utils/utils";

const quote = {
    body: "If only there could be an invention that bottled up a memory, like scent. And it never faded, and it never got stale, and then, when one wanted it, the bottle could be uncorked, and it would be like living the moment all over again.",
    author: "Daphne du Maurier",
};

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
                    md={5}
                    sx={{
                        borderBottom: {
                            xs: primary.border,
                            md: "none",
                        },
                    }}
                >
                    <Box
                        className="sticky"
                        sx={{
                            padding: primary.custom.spacing.paragraph,
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                textAlign: { xs: "center", md: "end" },
                            }}
                        >
                            Write what you know.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        borderLeft: { xs: "none", md: primary.border },
                        padding: primary.custom.spacing.paragraph,
                        display: "flex",
                        gap: "8em",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body1" sx={{ maxWidth: "40ch" }}>
                        It's good advice, but it's a little limiting. A better
                        way to say it might be "Know what you write." You don't
                        have to have ten years with the Ringling Bros. to write
                        a novel about lion tamers, but if you want to really
                        engage your readers, you would do well to do your
                        research first.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "2em",
                            alignItems: "end",
                        }}
                    >
                        <Typography sx={{ maxWidth: "40ch" }}>
                            When you hire me to build a website, I'll make sure
                            I know what it is you want. Before I write a single
                            line of code I'll know exactly what your goals are
                            and what your vision for your website looks like.
                        </Typography>
                        <Link
                            to="/about"
                            onClick={() => {
                                navigateToTop();
                            }}
                        >
                            <Button
                                size="large"
                                endIcon={<ArrowRightAltIcon />}
                                variant="outlined"
                                tabIndex={-1}
                            >
                                About
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid
                    className="flex-center"
                    item
                    xs={12}
                    sx={{ borderTop: primary.border }}
                >
                    <BlockQuote quote={quote} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Showcase;
