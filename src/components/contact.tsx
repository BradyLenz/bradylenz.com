import React from 'react';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { LinkedIn, MailOutline } from '@material-ui/icons';

import { contactData, globals } from '../data';

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
        marginBottom: {
            marginBottom: '50px',
        },
        buttonContainer: {
            width: '100%',
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(2),
            width: '100px',
        },
    })
);

export const ContactSection: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='sm' className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    className={classes.marginBottom}
                >
                    {contactData.header}
                </Typography>
                <Typography
                    variant='body1'
                    align='center'
                    className={classes.marginBottom}
                >
                    {contactData.message}
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button 
                        href={globals.linkedinUrl}
                        target='_blank'
                        rel='noopener'
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                    >
                        <LinkedIn />
                        LinkedIn
                    </Button>
                    <Button
                        href={`mailto:${globals.email}`}
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                    >
                        <MailOutline />
                        Email
                    </Button>
                </div>
            </div>
        </Container>
    )
}
