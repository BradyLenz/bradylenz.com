import React, { useState } from 'react';
import { Container, createStyles, Link, makeStyles, Tab, Tabs, Theme, Typography, Hidden, Chip } from '@material-ui/core';

import { workData } from '../data';
import { withFade, withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';
import { KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            marginBottom: '50px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '10px',
            },
        },
        jobHeader: {
            paddingTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
        },
        jobTextContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
        centeredContentContainer: {
            paddingTop: '25px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        descriptorContainer: {
            maxWidth: '600px',
            display: 'flex',
            alignItems: 'center',
        },
        descriptorArrow: {
            alignSelf: 'start',
        },
        desciptor: {
            display: 'inline-block',
            verticalAlign: 'center',
        },
        chipContainer: {
            marginTop: '25px',
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },
        chip: {
            margin: '4px',
        },
    }),
);

const randomSort = () => {
    return 0.5 - Math.random();
};

const WorkSectionBase: React.FC = () => {
    const sharedClasses = useSharedStyles();
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    
    const onTabChange = (_: React.ChangeEvent<Record<string, unknown>>, newTab: number) => {
        setTabValue(newTab);
    };

    return (
        <Container maxWidth='md' className={sharedClasses.section}>
            <div className={sharedClasses.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    className={`${sharedClasses.hr} ${classes.header}`}
                >
                    {workData.header}
                </Typography>
                <Tabs
                    value={tabValue}
                    onChange={onTabChange}
                    variant='fullWidth'
                    scrollButtons='auto'
                >
                    {workData.jobs.map((job, idx) => (
                        <Tab key={idx} label={job.abbreviation || job.company} />
                    ))}
                </Tabs>
                {workData.jobs.map((job, idx) => (
                    <div key={idx} hidden={tabValue !== idx}>
                        <div className={classes.jobHeader}>
                            <div className={classes.jobTextContainer}>
                                <Hidden xsDown>
                                    <Typography variant={'h3'} color='textPrimary'>
                                        {job.title}{',\u00A0'}
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        href={job.url}
                                        target='_blank'
                                        rel='noopener'
                                        variant={'h3'}
                                        color='primary'
                                    >
                                        {job.company}
                                    </Typography>
                                </Hidden>
                                <Hidden smUp>
                                    <Typography variant={'h4'} color='textPrimary'>
                                        {job.title}{',\u00A0'}
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        href={job.url}
                                        target='_blank'
                                        rel='noopener'
                                        variant={'h4'}
                                        color='primary'
                                    >
                                        {job.company}
                                    </Typography>
                                </Hidden>
                            </div>
                            <Typography variant='h6'>
                                {job.duration}
                            </Typography>
                            <Typography variant='h6'>
                                {job.location}
                            </Typography>
                        </div>
                        <div className={classes.centeredContentContainer}>
                            <div>
                                {job.descriptors.map((descriptor) => (
                                    <div key={descriptor} className={classes.descriptorContainer}>
                                        <KeyboardArrowRight color='primary' className={classes.descriptorArrow} />
                                        <Typography>
                                            {descriptor}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={classes.chipContainer}>
                            <div>
                                {job.skills.sort(randomSort).map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        color='secondary'
                                        className={classes.chip}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export const WorkSection = withFade(withScrolling(WorkSectionBase));
