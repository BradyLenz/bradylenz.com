import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { workData } from '../data';
import { withScrolling } from './shared/hocs';
import { useStyles as useSharedStyles } from './shared/styles';

const WorkSectionBase: React.FC = () => {
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
                    {workData.header}
                </Typography>
            </div>
        </Container>
    )
}

export const WorkSection = withScrolling(WorkSectionBase);
