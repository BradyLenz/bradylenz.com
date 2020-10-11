import { createStyles, makeStyles, Theme } from "@material-ui/core";

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
                height: 2,
                position: 'relative',
                verticalAlign: 'middle',
                width: '100%',
                marginRight: 10,
                top: 3,
            },
            '&::after': {
                backgroundColor: theme.palette.text.primary,
                content: '""',
                display: 'block',
                height: 2,
                position: 'relative',
                verticalAlign: 'middle',
                width: '100%',
                marginLeft: 10,
                top: 3,
            },
        }
    })
);
