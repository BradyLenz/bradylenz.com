import React from 'react';
import ReactGA from 'react-ga';
import { Container, createStyles, Grid, Link, makeStyles, Theme, Typography } from '@material-ui/core';

import { educationData } from '../data';
import { withFade, withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';
import { AnalyticsCategory, AnalyticsLabel } from '../models';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rowContainer: {
            padding: '50px 0 0 0',
        },
        header: {
            marginBottom: '50px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '10px',
            },
        },
        contentContainer: {
            paddingLeft: '50px',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        logoContainer: {
            textAlign: 'right',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
        logo: {
            width: '100%',
            maxWidth: '400px',
            filter: 'grayscale(100%)',
            transitionDuration: '500ms',
            '&:hover': {
                filter: 'grayscale(0%)',
            },
        },
    }),
);

const EducationSectionBase: React.FC = () => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const onClickUniversityLink = (name: string) => {
        ReactGA.event({
            category: AnalyticsCategory.Link,
            action: `Navigated to University: ${name}`,
            label: AnalyticsLabel.Education,
        });
    };

    return (
        <Container maxWidth='lg' className={sharedClasses.section}>
            <div className={sharedClasses.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    className={`${sharedClasses.hr} ${classes.header}`}
                >
                    {educationData.header}
                </Typography>
                {educationData.universities.map((university, idx) => {
                    const style: React.CSSProperties = idx > 0 ? { paddingTop: '100px' } : {};

                    return (
                        <Grid
                            container
                            key={idx}
                            alignItems='center'
                            alignContent='center'
                            justify='center'
                            className={classes.rowContainer}
                            style={style}
                        >
                            <Grid
                                item
                                xs={8}
                                md={5}
                                lg={6}
                                className={classes.logoContainer}
                            >
                                <img
                                    src={university.image.src}
                                    alt={university.image.alt}
                                    className={classes.logo}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={7}
                                lg={6}
                                className={classes.contentContainer}
                            >
                                <Typography
                                    component={Link}
                                    href={university.url}
                                    target='_blank'
                                    rel='noopener'
                                    variant='h4'
                                    color='secondary'
                                    onClick={() => onClickUniversityLink(university.name)}
                                    gutterBottom
                                >
                                    {university.name}
                                </Typography>
                                <Typography variant='h6'>
                                    {university.degreeText}
                                </Typography>
                                <Typography variant='h6'>
                                    {university.duration}
                                </Typography>
                                {university.specialization &&
                                    <Typography variant='h6'>
                                        Specializing in {university.specialization}
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                    );
                })}
            </div>
        </Container>
    );
};

export const EducationSection = withFade(withScrolling(EducationSectionBase));
