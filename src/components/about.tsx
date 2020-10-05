import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { aboutMeData } from '../data';
import { useStyles as useSectionStyles } from './styles';
import { withScrolling } from './hocs';

const AboutSectionBase: React.FC = () => {
    const sectionClasses = useSectionStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <Typography variant='h3' align='center' color='primary'>
                {aboutMeData.header}
            </Typography>
        </Container>
    )
}

export const AboutSection = withScrolling(AboutSectionBase);
