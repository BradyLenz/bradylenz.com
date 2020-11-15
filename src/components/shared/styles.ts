import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        section: {
            minHeight: '100vh',
        },
        contentContainer: {
            paddingTop: '10vh',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '5vh',
            },
        },
        hr: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            margin: 'auto',
            '&::before': {
                backgroundColor: theme.palette.text.primary,
                content: '""',
                display: 'block',
                height: '2px',
                position: 'relative',
                verticalAlign: 'middle',
                width: '100%',
                marginRight: '10px',
                top: '3px',
            },
            '&::after': {
                backgroundColor: theme.palette.text.primary,
                content: '""',
                display: 'block',
                height: '2px',
                position: 'relative',
                verticalAlign: 'middle',
                width: '100%',
                marginLeft: '10px',
                top: '3px',
            },
        },
    }),
);
