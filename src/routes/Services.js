import { Box } from "@mui/material";
import React from "react";
import ServicesShowcase from "../components/ServicesShowcase";
import TextBreak from "../components/TextBreak";

const services = [
    {
        title: "Template",
        price: "$399",
        content:
            "Choose from one of several templates, all of which are built by us from the ground up in React and MUI. Select a color scheme and provide your own images and text.",
        button: {
            href: "/templates",
            text: "view templates",
            variant: "outlined",
        },
        features: [
            {
                name: "Customized Photo Gallery",
                description:
                    "Determine your own categories and sub-categories.",
            },
            {
                name: "Custom Color Scheme",
                description: "Select your own primary and secondary colors.",
            },
            {
                name: "Selection of Hero Sections",
                description:
                    "Choose from one of our stylish landing page layouts.",
            },

            {
                name: "Social Media Links",
                description:
                    "High-quality SVG Icon links to your external profiles.",
            },

            {
                name: "2hrs first-month revisions",
                description: "Adjust image location, text, and color scheme.",
            },
        ],
    },
    {
        title: "Hybrid",
        price: "$799",
        content:
            "Start from a template, but get more control over the layout and style of your website. Select your own fonts, rearrange sections, and design customized components. ",
        button: {
            href: "/contact",
            text: "Start with hybrid",
            variant: "outlined",
        },
        features: [
            {
                name: "All Template Features",
                description:
                    "Start with a template, then customize from there.",
            },
            {
                name: "Custom Pages",
                description: "Create informational pages to suit your needs.",
            },
            {
                name: "Custom Page Layouts",
                description: "Organize images, text, and buttons.",
            },
            {
                name: "Unique Hero Section",
                description:
                    "Impress visitors with a custom-designed landing page.",
            },
            {
                name: "Font Selection",
                description:
                    "Choose from any Google Font, or provide your own.",
            },
            {
                name: "Animated elements",
                description: "Text and images that slide, fade, and/or expand.",
            },
            {
                name: "4hrs first-month revisions",
                description:
                    "Change everything from fonts to component layouts.",
            },
        ],
    },
    {
        title: "Custom",
        price: "$1500",
        content:
            "Get a completely unique website, built from scratch just for you. We'll design a personalized theme and craft a website to suit your precise individual needs.",
        button: {
            href: "/contact",
            text: "Get started with custom",
            variant: "outlined",
        },
        features: [
            {
                name: "Custom Design",
                description:
                    "Completely new design to fit your style or brand.",
            },
            {
                name: "Custom Architecture",
                description: "Highly optimized routing and layout.",
            },
            {
                name: "Unique Functionality",
                description: "Design your own interactive elements and forms.",
            },
            {
                name: "Comments and message board",
                description: "Engage visitors by creating discussions.",
            },
            {
                name: "Custom admin panel",
                description: "Control how content appears on your website.",
            },

            {
                name: "Unlimited first-month revisions",
                description: "Change whatever you like, as often as you like.",
            },
        ],
    },
];

const Services = () => {
    return (
        <Box>
            <TextBreak />
            <ServicesShowcase services={services} />
            <TextBreak />
        </Box>
    );
};

export default Services;
