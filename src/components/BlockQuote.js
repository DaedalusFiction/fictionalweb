import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const BlockQuote = () => {
    return (
        <Box sx={{ borderTop: primary.border, borderBottom: primary.border }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid className="flex-center" item xs={12} md={6}>
                        Info
                    </Grid>
                    <Grid
                        className="flex-center"
                        item
                        xs={12}
                        md={6}
                        sx={{ borderLeft: { xs: "none", md: primary.border } }}
                    >
                        <Box>
                            <Typography sx={{ fontStyle: "italic" }}>
                                "Good fiction's job is to comfort the disturbed
                                and disturb the comforted."
                            </Typography>
                            <Typography>--David Foster Wallace</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BlockQuote;
