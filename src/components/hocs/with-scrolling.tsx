import React, { useRef } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import { ScrollFab } from '../scroll-fab';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
        },
    })
);

export const withScrolling = <T extends {}>(Component: React.FC<T>) => {
    return (props: T) => {
        const classes = useStyles();
        const scrollRef = useRef<HTMLDivElement>(null);

        const onScrollDownClick = () => {
            if (scrollRef && scrollRef.current) {
                scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }

        return (
            <div className={classes.root}>
                <Component {...props}/>
                <ScrollFab direction='down' onClick={onScrollDownClick} />
                <div ref={scrollRef} />
            </div>
        );
    }
}
