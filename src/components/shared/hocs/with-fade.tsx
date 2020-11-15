import React, { useState, useRef, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';


interface Props {
    /** defaults to 200 */
    scrollOffset?: number;
}

export const withFade = <T extends Record<string, unknown>>(Component: React.FC<T & Props>) => {
    return (props: T & Props) => {
        const offset = props.scrollOffset ?? 200;
        const currentElement = useRef<HTMLDivElement>(null);
        const [visible, setVisible] = useState(false);
        const containerStyle: React.CSSProperties = visible
            ? { opacity: 1, transitionDuration: '1000ms' }
            : { opacity: 0, transitionDuration: '1000ms'};

        const checkVisibility = useCallback(() => {
            if (!currentElement.current) {
                setVisible(false);
                return;
            }

            const rect = currentElement.current.getBoundingClientRect();
            setVisible((Math.abs(rect.top) < rect.height) && (rect.top + offset <= window.innerHeight));
        }, [offset]);

        const onScroll = throttle(checkVisibility, 100);
        
        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            checkVisibility();

            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, [checkVisibility, onScroll]);

        return (
            <div ref={currentElement} style={containerStyle}>
                <Component {...props}/>
            </div>
        );
    };
};
