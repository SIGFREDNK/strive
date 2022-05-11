// REACT
import React, { Children, useState, useEffect } from 'react';

// STYLES
import styles from './swiper.module.scss';

// TYPES
import Breakpoint from 'interfaces/Breakpoint';

type Props = {
    children: React.ReactNode;
    slidesOnDisplay: number;
    style?: object;
    className?: string;
    breakpoints?: Breakpoint[];
};

// HELPERS
import SwiperLogic from 'helpers/swiper';

// HOOKS
import useKeyPress from 'hooks/useKeyPress';
import useBreakpoints from 'hooks/useBreakpoints';

const Swiper: React.FC<Props> = ({ children, slidesOnDisplay, style, className, breakpoints }) => {
    const childCount: number = Children.count(children);
    const slideCount: number = useBreakpoints(slidesOnDisplay, breakpoints!);
    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');
    const [isTouch, setIsTouch] = useState(false);

    let swiper = new (SwiperLogic as any)(slidesOnDisplay);

    console.log('RENDER');

    useEffect(() => {
        const handleChange: (event: MediaQueryListEvent) => void = event => setIsTouch(mediaQuery.matches);

        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsTouch(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (arrowLeftPressed) {
            console.log('arrowLeftPressed');
        }
    }, [arrowLeftPressed]);

    useEffect(() => {
        if (arrowRightPressed) {
            console.log('arrowRightPressed');
        }
    }, [arrowRightPressed]);

    return (
        <>
            {slideCount && (
                <div
                    className={`${styles.swiper} ${className} swiper ${isTouch ? styles.snap : ''}`}
                    style={style}
                    onMouseDown={event => swiper.start(event)}
                    onMouseMove={event => swiper.use(event)}
                    onMouseUp={event => swiper.stop(event)}
                >
                    <div
                        className={`${styles.slider} slider`}
                        style={{
                            width: `${(100 / slideCount) * childCount}%`
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            {!slideCount && 'Loading...'}
        </>
    );
};

export default Swiper;
