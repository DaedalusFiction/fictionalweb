import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sicktoothScreencap from "../images/sicktoothScreencap.avif";
import { primary } from "../themes/primary";

const Portfolio = () => {
    return (
        <Grid container>
            <Grid
                className="gradient"
                item
                xs={12}
                sx={{
                    borderBottom: primary.border,
                    borderTop: primary.border,
                    padding: "5rem 0",
                }}
            >
                <Container maxWidth="xl">
                    <Typography variant="h2" align="center">
                        Write for your audience.
                    </Typography>
                </Container>
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
                    }}
                >
                    <Box
                        sx={{
                            top: "7rem",
                            marginBottom: "3rem",
                        }}
                    >
                        <Typography variant="body1">
                            People want to look at websites that are sharp and
                            fancy. If your website isn't sharp and fancy, then
                            they simply won't care.
                        </Typography>
                        <br />
                        <Typography>
                            That's why I make websites that are sharp and fancy.
                            Just look at the one in this screenshot, or this
                            one, the one you're looking at right now. Sharp and
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
                    minHeight: "15rem",
                }}
            ></Grid>
        </Grid>
    );
};

export default Portfolio;
