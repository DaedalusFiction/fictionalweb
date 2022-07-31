import { createTheme } from "@mui/material";
import oxanium from "../fonts/oxanium.ttf";
import poiret from "../fonts/poiret.ttf";
import yeseva from "../fonts/yeseva.ttf";
import forum from "../fonts/forum.ttf";
import calistoga from "../fonts/calistoga.ttf";
import rakkas from "../fonts/rakkas.ttf";
import baskerville from "../fonts/baskerville.ttf";
import inconsolata from "../fonts/Inconsolata_SemiExpanded-Light.ttf";
import inconsolataMedium from "../fonts/Inconsolata_SemiExpanded-Medium.ttf";
import inconsolataRegular from "../fonts/Inconsolata_SemiExpanded-Regular.ttf";

let primary = createTheme({
    palette: {
        background: {
            // default: "#FFFAE2",
            default: "#fffcea",
            decorative: "#4a4941",
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
            light: "#fffcea",
            decorative: "#b6b19b",
            // lightMuted: "#e2e2e2",
            lightMuted: "#e5e0bb",
            // dark: "#373737",
            dark: "#4a4941", //good one
            // darkMuted: "#575757",
            darkMuted: "#5e5c52",
        },
    },
    typography: {
        primary: {
            accent: "Yeseva",
            decorative: "InconsolataRegular",
            // main: "InconsolataMedium",
            main: "InconsolataRegular",
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
        @font-face {
          font-family: 'inconsolata';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('inconsolata'), local('inconsolata'), url(${inconsolata}) format('truetype');
        }
        @font-face {
          font-family: 'inconsolataMedium';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('inconsolataMedium'), local('inconsolataMedium'), url(${inconsolataMedium}) format('truetype');
        }
        @font-face {
          font-family: 'inconsolataRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('inconsolataRegular'), local('inconsolataRegular'), url(${inconsolataRegular}) format('truetype');
        }
      `,
        },
    },
});

primary = createTheme(primary, {
    border: "1px solid red",
    custom: {
        spacing: {
            paragraph: "1em",
        },
    },
    typography: {
        h1: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
        },
        h2: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
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
            // color: "yellow",
            fontSize: "1.25rem",
        },
        subtitle2: {
            color: primary.palette.custom.darkMuted,
        },
        body1: {
            fontSize: "1.25rem",
            lineHeight: "1.25em",
            color: primary.palette.custom.darkMuted,
            fontFamily: primary.typography.primary.main,
        },
        body2: {
            fontSize: "1.5rem",
            lineHeight: "1.75em",
            color: primary.palette.custom.decorative,
            fontFamily: primary.typography.primary.decorative,
        },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                // Name of the slot
                root: {
                    backgroundColor: primary.palette.custom.dark,
                },
            },
        },
    },
});

export { primary };
