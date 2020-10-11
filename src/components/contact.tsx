import React from 'react';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { LinkedIn, MailOutline } from '@material-ui/icons';

import { contactData, globals } from '../data';
import { useStyles as useSharedStyles } from './shared/styles';
import { withFade } from './shared';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 'calc(100vh - 128px)',
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

const ContactSectionBase: React.FC = () => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    return (
        <Container maxWidth='sm' className={classes.root}>
            <div className={sharedClasses.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    className={`${classes.marginBottom} ${sharedClasses.hr}`}
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

export const ContactSection = withFade(ContactSectionBase);
