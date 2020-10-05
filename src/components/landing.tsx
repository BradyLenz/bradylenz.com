import React, { useRef } from 'react';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { DescriptionOutlined } from '@material-ui/icons';

import { GitHubIcon } from './icons';
import { globals, landingPageData } from '../data';
import { useStyles as useSectionStyles } from './styles';
import { ScrollFab } from './scroll-fab';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            top: '20%',
            [theme.breakpoints.down('sm')]: {
                top: '15%',
            },
        },
        buttonContainer: {
            width: '100%',
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(2),
            width: '100px',
        },
        gitHubIcon: {
            marginRight: '4px',
        },
    })
);

export const LandingSection: React.FC = () => {
    const sectionClasses = useSectionStyles();
    const classes = useStyles();
    const scrollRef = useRef<HTMLDivElement>(null);

    const onScrollDownClick = () => {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    }

    return (
        <>
            <Container maxWidth='lg' className={sectionClasses.section}>
                <div className={classes.root}>
                    <Typography
                        variant='h3'
                        align='center'
                        gutterBottom
                    >
                        {landingPageData.greeting}
                    </Typography>
                    <Typography
                        variant='h1'
                        align='center'
                        color='primary'
                        gutterBottom
                    >
                        {globals.name}
                    </Typography>
                    <Typography
                        variant='h2'
                        align='center'
                        color='textSecondary'
                        gutterBottom
                    >
                        {landingPageData.message}
                    </Typography>
                    <div className={classes.buttonContainer}>
                            <Button 
                                variant='contained'
                                color='primary'
                                size='large'
                                className={classes.button}
                            >
                                <DescriptionOutlined />
                                Resume
                            </Button>
                            <Button
                                href={globals.githubUrl}
                                target='_blank'
                                rel='noopener'
                                variant='contained'
                                color='primary'
                                size='large'
                                className={classes.button}
                            >
                                <GitHubIcon className={classes.gitHubIcon} />
                                Github
                            </Button>
                    </div>
                </div>
                <ScrollFab direction='down' onClick={onScrollDownClick} />
            </Container>
            <div ref={scrollRef} />
        </>
    )
}
