import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { educationData } from '../data';
import { withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';

const EducationSectionBase: React.FC = () => {
    const sharedClasses = useSharedStyles();

    return (
        <Container maxWidth='lg' className={sharedClasses.section}>
            <div className={sharedClasses.contentContainer}>
                <Typography
                    variant='h3'
                    align='center'
                    color='primary'
                    className={sharedClasses.hr}
                >
                    {educationData.header}
                </Typography>
            </div>
        </Container>
    )
}

export const EducationSection = withScrolling(EducationSectionBase);
