import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const BlockQuote = () => {
    return (
        <Box sx={{ borderTop: primary.border, borderBottom: primary.border }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        className="flex-center"
                        item
                        xs={12}
                        md={7}
                        sx={{
                            borderRight: {
                                xs: "none",
                                md: primary.border,
                            },
                            padding: "3rem",
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontStyle: "italic" }}>
                                "Good fiction's job is to comfort the disturbed
                                and disturb the comforted."
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "end" }}
                            >
                                --David Foster Wallace
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        className="flex-center"
                        item
                        xs={12}
                        md={5}
                        sx={{ padding: "1em" }}
                    >
                        <Typography variant="h3">
                            Kill your darlings.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BlockQuote;
