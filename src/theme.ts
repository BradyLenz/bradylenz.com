import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const themeBase = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#039be5',
        },
        secondary: {
            main: '#e64a19',
        },
        background: {
            default: '#161616',
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.7)',
            secondary: '#fff',
        },
    },
    typography: {
        h1: {
            fontWeight: 500,
        },
        h2: {
            fontWeight: 400,
        },
    },
});

export const theme = responsiveFontSizes(themeBase);
