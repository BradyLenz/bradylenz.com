import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { educationData } from '../data';
import { withScrolling } from './hocs';
import { useStyles as useSectionStyles } from './styles';

const EducationSectionBase: React.FC = () => {
    const sectionClasses = useSectionStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <Typography variant='h3' align='center' color='primary'>
                {educationData.header}
            </Typography>
        </Container>
    )
}

export const EducationSection = withScrolling(EducationSectionBase);
