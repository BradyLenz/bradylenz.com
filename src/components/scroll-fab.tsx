import React from 'react';
import { createStyles, Fab, makeStyles } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

interface Props {
    direction: 'up' | 'down',
}

const useStyles = makeStyles(() =>
    createStyles({
        root: (props: Props) => ({
            position: 'fixed',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            bottom: (props.direction === 'down') ? '10%' : undefined,
            top: (props.direction === 'up') ? '10%' : undefined,
        })
    })
);


export const ScrollFab: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);

    return (
        <Fab color='secondary' className={classes.root} size='large'>
            {props.direction === 'up'
                ? <KeyboardArrowUp />
                : <KeyboardArrowDown />
            }
        </Fab>
    );
}
