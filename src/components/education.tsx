import React from 'react';
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import { educationData } from '../data';
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
    })
);


const EducationSectionBase: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant='h3' align='center' color='primary'>
                    {educationData.header}
                </Typography>
            </div>
        </Container>
    )
}

export const EducationSection = withScrolling(EducationSectionBase);
