import React from 'react';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { DescriptionOutlined, GitHub } from '@material-ui/icons';

import { globals, landingSectionData } from '../data';
import { withFade, withScrolling } from './shared/hocs';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
        },
        contentContainer: {
            paddingTop: '20vh',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '15vh',
            },
        },
        buttonContainer: {
            width: '100%',
            textAlign: 'center',
        },
        button: {
            margin: theme.spacing(2),
            width: '100px',
        },
        gitHubIcon: {
            marginRight: '4px',
        },
    }),
);

const LandingSectionBase: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='textSecondary'
                    gutterBottom
                >
                    {landingSectionData.greeting}
                </Typography>
                <Typography
                    variant='h1'
                    align='center'
                    color='primary'
                    gutterBottom
                >
                    {globals.name}.
                </Typography>
                <Typography
                    variant='h2'
                    align='center'
                    gutterBottom
                >
                    {landingSectionData.message}
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button
                        href={globals.resume}
                        target='_blank'
                        rel='noopener'
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                    >
                        <DescriptionOutlined />
                        Resume
                    </Button>
                    <Button
                        href={globals.githubUrl}
                        target='_blank'
                        rel='noopener'
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                    >
                        <GitHub className={classes.gitHubIcon} />
                        GitHub
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export const LandingSection = withFade(withScrolling(LandingSectionBase));
