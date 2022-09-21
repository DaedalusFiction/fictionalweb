import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import bike from "../images/bike.webp";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleInterestChange = (e) => {
        setInterest(e.target.value);
    };

    const handleSendEmail = () => {
        var templateParams = {
            website: "Fictional Web",
            email: email,
            interest: interest,
        };

        emailjs
            .send(
                "service_tmo76bn",
                "template_pfang7n",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(function () {
                setEmailSent(true);
            });
    };
    return (
        <Box>
            <TextBreak />
            <Box
                sx={{ borderTop: primary.border, borderBottom: primary.border }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            borderBottom: primary.border,
                            padding: primary.custom.spacing.paragraph,
                        }}
                    >
                        <Typography variant="h1" align="center">
                            Tell us your story.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                padding: primary.custom.spacing.paragraph,
                                textAlign: { xs: "left", md: "right" },
                            }}
                        >
                            Schedule a free consultation and share with us{" "}
                            <span className="text-accent">your vision.</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            gap: "1em",
                            borderLeft: { xs: "none", md: primary.border },
                        }}
                    >
                        <Box
                            sx={{
                                padding: primary.custom.spacing.paragraph,
                                marginBottom: "8rem",
                            }}
                        >
                            <Typography>
                                Email: <strong>hello@fictionalweb.com</strong>
                            </Typography>
                            <br />
                            <Typography>or</Typography>
                            <br />
                            {!emailSent && (
                                <Box sx={{ maxWidth: "20rem" }}>
                                    <Typography>
                                        What service are you interested in?
                                    </Typography>
                                    <br />
                                    <FormControl fullWidth>
                                        <InputLabel
                                            sx={{
                                                "&.MuiInputLabel-root": {
                                                    marginLeft: "0",
                                                },
                                            }}
                                            id="demo-simple-select-label"
                                        >
                                            Service
                                        </InputLabel>
                                        <Select
                                            labelId="interest-select-label"
                                            id="interest-select"
                                            value={interest}
                                            label=""
                                            variant="standard"
                                            onChange={handleInterestChange}
                                        >
                                            <MenuItem value={"template"}>
                                                Template
                                            </MenuItem>
                                            <MenuItem value={"hybrid"}>
                                                Hybrid
                                            </MenuItem>
                                            <MenuItem value={"custom"}>
                                                Custom
                                            </MenuItem>
                                            <MenuItem value={"unsure"}>
                                                Not sure
                                            </MenuItem>
                                            <MenuItem value={"other"}>
                                                Other
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            )}
                            <br />
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "end",
                                    flexWrap: "wrap",
                                    gap: "1em",
                                }}
                            >
                                {!emailSent ? (
                                    <>
                                        <FormControl>
                                            <TextField
                                                id="email"
                                                required
                                                label="Email"
                                                placeholder="dante@gmail.com"
                                                variant="standard"
                                                onChange={handleEmailChange}
                                                fullWidth
                                            />
                                        </FormControl>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            onClick={handleSendEmail}
                                            endIcon={<SendIcon />}
                                        >
                                            SEND
                                        </Button>
                                    </>
                                ) : (
                                    <Typography>
                                        Thanks! We'll be in touch soon
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            borderTop: primary.border,
                            display: {
                                xs: "none",
                                md: "flex",
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Box>
                            <img src={bike} alt="bike on the street" />
                        </Box>
                        <Typography
                            variant="subtitle2"
                            align="right"
                            sx={{ marginRight: "1em" }}
                        >
                            Photo by Norbert Levajsics on Unsplash
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Contact;
