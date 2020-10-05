import React from 'react';
import { Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

import { aboutMeData } from '../data';
import { withScrolling } from './shared/hocs';

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
        header: {
            marginBottom: '50px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '10px',
            }
        },
        paragraph: {
            margin: '1em 0',
        },
        portraitContainer: {
            textAlign: 'center',
        },
        portrait: {
            borderRadius: '10px',
            maxWidth: '300px',
            width: '100%',
            filter: 'grayscale(100%)',
            transitionDuration: '500ms',
            '&:hover': {
                filter: 'grayscale(0%)',
            },
        },
    })
);

const AboutSectionBase: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    gutterBottom
                    className={classes.header}
                >
                    {aboutMeData.header}
                </Typography>
                <Grid
                    container
                    alignItems='center'
                    alignContent='center'
                    spacing={2}
                >
                    <Grid item xs={12} md={8}>
                        {aboutMeData.paragraphs.map((paragraph, idx) => (
                            <Typography
                                variant='body1'
                                key={idx}
                                className={classes.paragraph}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.portraitContainer}
                    >
                        <img
                            src={aboutMeData.portrait.src}
                            alt={aboutMeData.portrait.alt}
                            className={classes.portrait}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export const AboutSection = withScrolling(AboutSectionBase);
