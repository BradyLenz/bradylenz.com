import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let themeBase = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#039be5',
        },
        secondary: {
            main: "#e64a19",
        }
    },
    typography: {
        h1: {
            fontWeight: 500,
        },
    },
});

export const theme = responsiveFontSizes(themeBase);
