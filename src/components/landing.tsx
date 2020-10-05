import React from 'react';
import { Button, Container, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { DescriptionOutlined } from '@material-ui/icons';

import { GitHubIcon } from './icons';
import { globals, landingSectionData } from '../data';
import { useStyles as useSectionStyles } from './styles';
import { withScrolling } from './hocs';

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

const LandingSectionBase: React.FC = () => {
    const sectionClasses = useSectionStyles();
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={sectionClasses.section}>
            <div className={classes.root}>
                <Typography
                    variant='h3'
                    align='center'
                    gutterBottom
                >
                    {landingSectionData.greeting}
                </Typography>
                <Typography
                    variant='h1'
                    align='center'
                    color='primary'
                    gutterBottom
                >
                    {globals.name}.
                </Typography>
                <Typography
                    variant='h2'
                    align='center'
                    color='textSecondary'
                    gutterBottom
                >
                    {landingSectionData.message}
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
        </Container>
    )
}

export const LandingSection = withScrolling(LandingSectionBase);
