// REACT
import React, { Children, useState, useEffect, useRef } from 'react';

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

// HOOKS
import useKeyPress from 'hooks/useKeyPress';
import useBreakpoints from 'hooks/useBreakpoints';
import useTouchDevice from 'hooks/useTouchDevice';

const Swiper: React.FC<Props> = ({ children, slidesOnDisplay, style, className, breakpoints }) => {
    // DOM ELEMENTS
    const swiper = useRef<HTMLDivElement>(null);

    // CUSTOM HOOKS
    const slideCount: number = useBreakpoints(slidesOnDisplay, breakpoints!);
    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');
    const isTouch = useTouchDevice();

    // REFS
    const page = useRef(0);
    const prevOffset = useRef(0);
    const currentOffset = useRef(0);
    const slideWidth = useRef(0);

    // VARIABLES
    let fingerStartingXPosition: number = 0;
    let mousePressed: boolean = false;
    let moveX: number = 0;

    // OTHER
    const childCount: number = Children.count(children);

    const setPage: (pageNumber: number) => void = pageNumber => {
        page.current = pageNumber;
        currentOffset.current = -(slideWidth.current * page.current);
        if (swiper.current) swiper.current.style.scrollBehavior = 'smooth';
        if (swiper.current) swiper.current.scrollLeft = -currentOffset.current;
        prevOffset.current = currentOffset.current;
        setTimeout(() => {
            if (swiper.current) swiper.current.style.scrollBehavior = 'auto';
        }, 10);
    };

    const move: (event: React.MouseEvent) => void = event => {
        let offset = moveX - fingerStartingXPosition + prevOffset.current;
        event.currentTarget.scrollLeft = -offset;
        currentOffset.current = offset;
    };

    const start: (event: React.MouseEvent) => void = event => {
        slideWidth.current = swiper.current!.clientWidth / slidesOnDisplay;
        const target = document.elementFromPoint(event.nativeEvent.clientX, event.nativeEvent.clientY);
        if (target?.classList.contains('swiper-disabled')) return;
        mousePressed = true;
        fingerStartingXPosition = event.nativeEvent.clientX;
    };

    const use: (event: React.MouseEvent) => void = event => {
        if (!mousePressed) return;
        moveX = event.nativeEvent.pageX;
        move(event);
    };

    const stop: (event: React.MouseEvent) => void = event => {
        setPage(Math.round((currentOffset.current / slideWidth.current) * -1));
        mousePressed = false;
    };

    useEffect(() => {
        if (!arrowLeftPressed) return;
        if (page.current === 0) return;

        slideWidth.current = swiper.current!.clientWidth / slidesOnDisplay;

        setPage(page.current - 1);
    }, [arrowLeftPressed, page, slidesOnDisplay]);

    useEffect(() => {
        if (!arrowRightPressed) return;
        if (page.current >= childCount - slidesOnDisplay) return;

        slideWidth.current = swiper.current!.clientWidth / slidesOnDisplay;

        setPage(page.current + 1);
    }, [arrowRightPressed, childCount, page, slideWidth, slidesOnDisplay]);

    return (
        <>
            {slideCount && (
                <div
                    className={`${styles.swiper} ${className} swiper ${isTouch ? styles.snap : ''}`}
                    style={style}
                    onMouseDown={event => start(event)}
                    onMouseMove={event => use(event)}
                    onMouseUp={event => stop(event)}
                    ref={swiper}
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
