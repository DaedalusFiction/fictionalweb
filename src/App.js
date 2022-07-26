import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { primary } from "./themes/primary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Templates from "./routes/Templates";
import Services from "./routes/Services";
import ReactGA from "react-ga";

function App() {
    // Google Analytics Set Up
    const gaTrackingId = "G-N9QVT2Q8LE"; // enter your Tracking ID
    ReactGA.initialize(gaTrackingId);
    ReactGA.pageview("/");
    return (
        <ThemeProvider theme={primary}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="templates" element={<Templates />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
