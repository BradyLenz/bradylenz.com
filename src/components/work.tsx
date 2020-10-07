import React, { useState } from 'react';
import { Container, createStyles, Link, makeStyles, Tab, Tabs, Theme, Typography } from '@material-ui/core';

import { workData } from '../data';
import { withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            marginBottom: '50px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '10px',
            },
        },
        contentContainer: {
            paddingTop: '50px',
        },
        logo: {
            width: '100%',
            filter: 'grayscale(100%)',
            transitionDuration: '500ms',
            '&:hover': {
                filter: 'grayscale(0%)',
            },
        },
    })
);

const WorkSectionBase: React.FC = () => {
    const sharedClasses = useSharedStyles();
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    
    const onTabChange = (_: React.ChangeEvent<{}>, newTab: number) => {
        setTabValue(newTab);
    }

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
                    <div key={idx} hidden={tabValue !== idx} className={classes.contentContainer}>
                        <Typography
                            component={Link}
                            href={job.url}
                            target='_blank'
                            rel='noopener'
                            variant='h3'
                            color='primary'
                        >
                            {job.company}
                        </Typography>
                        <Typography variant='h4'>
                            {job.title}
                        </Typography>
                        <Typography variant='h6'>
                            {job.duration}
                        </Typography>
                        <Typography variant='h6'>
                            {job.location}
                        </Typography>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export const WorkSection = withScrolling(WorkSectionBase);
