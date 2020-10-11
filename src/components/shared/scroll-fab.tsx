import React from 'react';
import { createStyles, Fab, Hidden, makeStyles } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

export interface Props {
    direction: 'up' | 'down';
    onClick: () => void;
    hideScrollFabSmDown?: boolean;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: (props: Props) => ({
            position: 'absolute',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            bottom: (props.direction === 'down') ? '10vh' : undefined,
            top: (props.direction === 'up') ? '10vh' : undefined,
        })
    })
);


export const ScrollFab: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);

    const onClick = () => {
        props.onClick();
    }

    return (
        <Hidden smDown={props.hideScrollFabSmDown}>
            <Fab
                color='secondary'
                className={classes.root}
                size='large'
                onClick={onClick}
            >
                {props.direction === 'up'
                    ? <KeyboardArrowUp />
                    : <KeyboardArrowDown />
                }
            </Fab>
        </Hidden>
    );
}
