import React from 'react';
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import { contactData } from '../data';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
        },
        contentContainer: {
            paddingTop: '20vh',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '10vh',
            },
        },
    })
);

export const ContactSection: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant='h3' align='center' color='primary'>
                    {contactData.header}
                </Typography>
            </div>
        </Container>
    )
}
