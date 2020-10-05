import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { contactData } from '../data';
import { useStyles as useSectionStyles } from './styles';

export const ContactSection: React.FC = () => {
    const sectionClasses = useSectionStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <Typography variant='h3' align='center' color='primary'>
                {contactData.header}
            </Typography>
        </Container>
    )
}
