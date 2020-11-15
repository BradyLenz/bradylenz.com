import React from 'react';
import ReactGA from 'react-ga';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { LinkedIn, MailOutline } from '@material-ui/icons';

import { contactData, globals } from '../data';
import { useStyles as useSharedStyles } from './shared/styles';
import { withFade } from './shared';
import { AnalyticsCategory, AnalyticsLabel } from '../models';


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
            textAlign: 'center',
        },
        button: {
            margin: theme.spacing(2),
            width: '100px',
        },
    }),
);

const ContactSectionBase: React.FC = () => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const onClickLinkedIn = () => {
        ReactGA.event({
            category: AnalyticsCategory.Link,
            action: 'Navigated to LinkedIn',
            label: AnalyticsLabel.Contact,
        });
    };

    const onClickEmail = () => {
        ReactGA.event({
            category: AnalyticsCategory.Email,
            action: 'Started an Email',
            label: AnalyticsLabel.Contact,
        });
    };

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
                        onClick={onClickLinkedIn}
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
                        onClick={onClickEmail}
                        className={classes.button}
                    >
                        <MailOutline />
                        Email
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export const ContactSection = withFade(ContactSectionBase);
