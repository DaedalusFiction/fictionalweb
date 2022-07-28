import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sicktoothScreencap from "../images/sicktoothScreencap.avif";
import { primary } from "../themes/primary";

const Portfolio = () => {
    return (
        <Grid container>
            <Grid
                className="flex-center"
                item
                xs={12}
                sx={{
                    borderBottom: primary.border,
                    borderTop: primary.border,
                    padding: "5rem 0",
                }}
            >
                <Typography variant="h2">
                    Give the people what they want.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                lg={4}
                sx={{
                    padding: "2rem",
                    borderRight: { xs: "none", lg: primary.border },
                    borderBottom: primary.border,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "start",
                        height: "35rem",
                    }}
                >
                    <Box
                        sx={{
                            position: "sticky",
                            top: "7rem",
                            marginBottom: "3rem",
                        }}
                    >
                        <Typography variant="body1">
                            People want to look at websites that are sharp and
                            fancy. If they aren't sharp and fancy, they simply
                            won't care.
                        </Typography>
                        <br />
                        <Typography>
                            That's why I make websites that are sharp and fancy.
                            Just look at the one in the screenshot, or this one,
                            the one you're looking at right now. Sharp and
                            fancy, right?
                        </Typography>
                        <br />
                        <Typography>
                            I think so. And I hope you do too.
                        </Typography>
                        <br />
                    </Box>
                    <Button
                        variant="outlined"
                        size="large"
                        endIcon={<ArrowRightAltIcon />}
                    >
                        See Projects
                    </Button>
                </Box>
            </Grid>
            <Grid
                className="flex-center"
                item
                xs={12}
                lg={8}
                sx={{
                    // backgroundImage: `url(${earth})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
  url(${sicktoothScreencap})`,
                    backgroundSize: "cover",
                }}
            ></Grid>
        </Grid>
    );
};

export default Portfolio;
