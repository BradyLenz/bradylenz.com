import React from 'react';
import { Container, createStyles, makeStyles, Typography } from "@material-ui/core"

import { globals, landingPageData } from '../data';
import { useStyles as useSectionStyles } from './shared/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
            top: '25%',
        }
    })
);

export const LandingSection: React.FC = () => {
    const sectionClasses = useSectionStyles();
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <div className={classes.root}>
                <Typography variant='h2' align='center'>
                    {landingPageData.greeting}
                </Typography>
                <Typography
                    variant='h1'
                    align='center'
                    color='primary'
                    gutterBottom
                >
                    {globals.name}
                </Typography>
                <Typography variant='h2' align='center'>
                    {landingPageData.message}
                </Typography>
            </div>
        </Container>
    )
}
