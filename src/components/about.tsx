import React from 'react';
import { Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

import { aboutMeData } from '../data';
import { withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    const sharedClasses = useSharedStyles();

    return (
        <Container maxWidth='md' className={sharedClasses.section}>
            <div className={sharedClasses.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    gutterBottom
                    className={`${classes.header} ${sharedClasses.hr}`}
                >
                    {aboutMeData.header}
                </Typography>
                <Grid container spacing={2}>
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
