import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../components/Header";
import TextBreak from "../components/TextBreak";
import { primary } from "../themes/primary";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmail = () => {
        var templateParams = {
            website: "Fictional Web",
            email: email,
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
            <Header />
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
                            Tell me your story.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h3"
                            sx={{
                                padding: primary.custom.spacing.paragraph,
                                textAlign: { xs: "left", md: "right" },
                            }}
                        >
                            Schedule a free consultation and share with me your
                            vision.
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
                                Call: <strong>434 825-5038</strong>
                            </Typography>
                            <br />
                            <Typography>
                                Email: <strong>hello@fictionalweb.com</strong>
                            </Typography>
                            <br />
                            <Typography>or</Typography>
                            <br />
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "end",
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
                                        Thanks! we'll be in touch soon
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <TextBreak />
        </Box>
    );
};

export default Contact;
