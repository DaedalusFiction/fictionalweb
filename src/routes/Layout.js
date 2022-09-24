import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { primary } from "../themes/primary";

const sections = [
    {
        name: "Pages.",
        items: [
            {
                text: "Home",
                href: "/",
            },
            {
                text: "About",
                href: "/about",
            },
            {
                text: "Projects",
                href: "/projects",
            },
            {
                text: "Contact",
                href: "/contact",
            },
        ],
    },
    {
        name: "Templates.",
        items: [
            {
                text: "Artist",
                href: "https://fictionalweb-artist.netlify.app",
            },
            {
                text: "Designer",
                href: "https://designer-template.netlify.app",
            },
            {
                text: "Forum",
                href: "https://customforum.netlify.app",
            },
        ],
    },
    {
        name: "Media.",
        items: [
            {
                text: "Facebook",
                href: "https://customforum.netlify.app",
            },
            {
                text: "Twitter",
                href: "https://sicktooth.com",
            },
            {
                text: "Instagram",
                href: "https://streamerize.com",
            },
            {
                text: "LinkedIn",
                href: "https://snackbarband.com",
            },
        ],
    },
];

const Layout = () => {
    const location = useLocation();
    useEffect(() => {
        return () => {};
    }, [location]);

    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                borderLeft: primary.border,
                borderRight: primary.border,
                borderBottom: primary.border,
            }}
        >
            {location.pathname === "/" && <Hero />}
            <Header />
            <Outlet />
            <Footer sections={sections} />
        </Container>
    );
};

export default Layout;
