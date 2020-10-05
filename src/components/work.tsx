import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { workData } from '../data';
import { useStyles as useSectionStyles } from './styles';
import { withScrolling } from './hocs';

const WorkSectionBase: React.FC = () => {
    const sectionClasses = useSectionStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <Typography variant='h3' align='center' color='primary'>
                {workData.header}
            </Typography>
        </Container>
    )
}

export const WorkSection = withScrolling(WorkSectionBase);
