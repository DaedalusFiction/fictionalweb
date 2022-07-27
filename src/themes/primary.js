import { createTheme } from "@mui/material";
import oxanium from "../fonts/oxanium.ttf";
import poiret from "../fonts/poiret.ttf";
import yeseva from "../fonts/yeseva.ttf";
import forum from "../fonts/forum.ttf";
import calistoga from "../fonts/calistoga.ttf";
import rakkas from "../fonts/rakkas.ttf";
import baskerville from "../fonts/baskerville.ttf";

let primary = createTheme({
    palette: {
        background: {
            default: "#FFFAE2",
            // default: "#291F1E",
        },
        text: {
            primary: "#19180A",
            // primary: "#82D173",
            secondary: "#3d3a19",
            // secondary: "#ABFAA9",
        },
        primary: {
            main: "#F64740",
        },
        secondary: {
            main: "#3A86FF",
        },
        custom: {
            light: "white",
            decorative: "#949494",
            // lightMuted: "#e2e2e2",
            lightMuted: "#f2f2f2",
            dark: "#2d2d2d",
            darkMuted: "#4f4f4f",
        },
    },
    typography: {
        primary: {
            accent: "Yeseva",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Poiret';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Poitret'), local('Poiret-regular'), url(${poiret}) format('truetype');
        }
        @font-face {
          font-family: 'Yeseva';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Yeseva'), local('Yeseva-regular'), url(${yeseva}) format('truetype');
        }
        @font-face {
          font-family: 'Calistoga';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Calistoga'), local('Calistoga-regular'), url(${calistoga}) format('truetype');
        }
        @font-face {
          font-family: 'Rakkas';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Rakkas'), local('Rakkas-regular'), url(${rakkas}) format('truetype');
        }
        @font-face {
          font-family: 'Forum';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Forum'), local('Forum-regular'), url(${forum}) format('truetype');
        }
        @font-face {
          font-family: 'Baskerville';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Baskerville'), local('Baskerville-regular'), url(${baskerville}) format('truetype');
        }
      `,
        },
    },
});

primary = createTheme(primary, {
    border: "1px solid red",
    typography: {
        h1: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
            lineHeight: ".85em",
            fontSize: "clamp(4rem, 9vw, 10rem)",
        },
        h2: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
            fontSize: "clamp(3rem, 5vw, 10rem)",
        },
        h3: {
            fontFamily: primary.typography.primary.accent,
        },
        h5: {
            color: primary.palette.text.secondary,
            fontWeight: "bold",
            // fontSize: "clamp(1rem, 2vw, 5rem)",
        },
        h6: {
            fontWeight: "bold",
        },
        subtitle1: {
            color: primary.palette.custom.darkMuted,
        },
        subtitle2: {
            color: primary.palette.custom.darkMuted,
        },
        body1: {
            fontSize: "1.5rem",
            lineHeight: "1.25em",
            color: primary.palette.custom.darkMuted,
        },
        body2: {
            fontSize: "1.5rem",
            lineHeight: "1.75em",
            color: primary.palette.custom.decorative,
        },
    },
});

export { primary };
