import React from 'react';
import ReactGA from 'react-ga';
import { createStyles, Grid, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import { DescriptionOutlined, GitHub, LinkedIn, MailOutline } from '@material-ui/icons';

import { globals } from '../data';
import { AnalyticsCategory, AnalyticsLabel } from '../models';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '128px',
            background: '#29292b',
        },
        gridContainer: {
            width: '100%',
            height: '100%',
        },
        iconContainer: {
            textAlign: 'center',
        },
        textLeft: {
            display: 'inline-block',
            marginRight: '1ch',
        },
        textRight: {
            display: 'inline-block',
        },
    }),
);

export const Footer: React.FC = () => {
    const classes = useStyles();
    
    const onClickLink = (name: string) => {
        ReactGA.event({
            category: AnalyticsCategory.Link,
            action: `Navigated to ${name}`,
            label: AnalyticsLabel.Footer,
        });
    };

    const onClickEmail = () => {
        ReactGA.event({
            category: AnalyticsCategory.Email,
            action: 'Started an Email',
            label: AnalyticsLabel.Footer,
        });
    };

    return (
        <div className={classes.root}>
            <Grid
                container
                justify='center'
                alignItems='center'
                className={classes.gridContainer}
            >
                <Grid item>
                    <div className={classes.iconContainer}>
                        <IconButton size='small' color='primary' onClick={() => onClickLink('Resume')}>
                            <Link 
                                href={globals.resume}
                                target='_blank'
                                rel='noopener'
                            >
                                <DescriptionOutlined />
                            </Link>
                        </IconButton>
                        <IconButton size='small' color='primary' onClick={() => onClickLink('GitHub')}>
                            <Link
                                href={globals.githubUrl}
                                target='_blank'
                                rel='noopener'
                            >
                                <GitHub />
                            </Link>
                        </IconButton>
                        <IconButton size='small' color='primary' onClick={() => onClickLink('LinkedIn')}>
                            <Link
                                href={globals.linkedinUrl}
                                target='_blank'
                                rel='noopener'
                            >
                                <LinkedIn />
                            </Link>
                        </IconButton>
                        <IconButton size='small' color='primary' onClick={onClickEmail}>
                            <Link href={`mailto:${globals.email}`}>
                                <MailOutline />
                            </Link>
                        </IconButton>
                    </div>
                    <Typography
                        variant='body1'
                        className={classes.textLeft}
                    >
                        Built by
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        component={Link}
                        target='_blank'
                        rel='noopener'
                        href={globals.url}
                        color='primary'
                        className={classes.textRight}
                        onClick={() => onClickLink('bradylenz.com')}
                    >
                        {globals.name}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
