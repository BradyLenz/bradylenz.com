import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let themeBase = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#039be5',
        },
    },
    typography: {
        h1: {
            fontWeight: 500,
        },
    },
});

export const theme = responsiveFontSizes(themeBase);
