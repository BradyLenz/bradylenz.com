import React, { useRef } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import { ScrollFab, Props as ScrollFabProps } from '../scroll-fab';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
        },
    }),
);

type Props = Pick<ScrollFabProps, 'hideScrollFabSmDown'>;

export const withScrolling = <T extends Record<string, unknown>>(Component: React.FC<T & Props>) => {
    return (props: T & Props) => {
        const classes = useStyles();
        const scrollRef = useRef<HTMLDivElement>(null);

        const onScrollDownClick = () => {
            if (scrollRef && scrollRef.current) {
                scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        };

        return (
            <div className={classes.root}>
                <Component {...props}/>
                <ScrollFab direction='down' onClick={onScrollDownClick} hideScrollFabSmDown={props.hideScrollFabSmDown} />
                <div ref={scrollRef} />
            </div>
        );
    };
};
