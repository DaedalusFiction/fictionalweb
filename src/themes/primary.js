import { createTheme } from "@mui/material";
import yeseva from "../fonts/yeseva.ttf";
import inconsolataRegular from "../fonts/Inconsolata_SemiExpanded-Regular.ttf";

let primary = createTheme({
    palette: {
        background: {
            default: "#fffcea",
            decorative: "#4a4941",
        },
        text: {
            primary: "#19180A",
            secondary: "#3d3a19",
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
            accent: "#ee0e0e",
            lightMuted: "#e5e0bb",
            dark: "#4a4941",
            darkMuted: "#5e5c52",
        },
    },
    typography: {
        primary: {
            accent: "Yeseva",
            decorative: "InconsolataRegular",
            main: "InconsolataRegular",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        
        @font-face {
          font-family: 'Yeseva';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Yeseva'), local('Yeseva-regular'), url(${yeseva}) format('truetype');
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
    border: "1px solid " + primary.palette.custom.accent,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
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
        },
        h6: {
            fontWeight: "bold",
        },
        subtitle1: {
            color: primary.palette.custom.darkMuted,
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
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: primary.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: primary.typography.primary.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export { primary };
