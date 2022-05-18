// REACT
import React, { Children, useEffect, useRef, useState } from 'react';

// STYLES
import styles from './Swiper.module.scss';

// TYPES
import Breakpoint from 'interfaces/Breakpoint';

type Props = {
    children: React.ReactNode;
    slidesOnDisplay: number;
    style?: object;
    className?: string;
    breakpoints?: Breakpoint[];
    onSwipe?: (pageNumber: number) => any;
    onChange?: (slideCount: number, boundingBox: DOMRect) => any;
    page: number;
    updatePage?: number;
};

// HOOKS
import useKeyPress from 'hooks/useKeyPress';
import useBreakpoints from 'hooks/useBreakpoints';
import useTouchDevice from 'hooks/useTouchDevice';
import useWidth from 'hooks/useWidth';

const Swiper: React.FC<Props> = ({
    children,
    slidesOnDisplay,
    style,
    className,
    breakpoints,
    onSwipe,
    onChange,
    page,
    updatePage
}) => {
    // DOM ELEMENTS
    const swiper = useRef<HTMLDivElement>(null);

    // CUSTOM HOOKS
    const slideCount: number = useBreakpoints(slidesOnDisplay, breakpoints!);
    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');
    const isTouch = useTouchDevice();
    const width = useWidth();

    // REFS
    const [currentPage, setCurrentPage] = useState(page);
    const prevOffset = useRef(0);
    const currentOffset = useRef(0);
    const slideWidth = useRef(0);

    // VARIABLES
    let fingerStartingXPosition: number = 0;
    let mousePressed: boolean = false;
    let moveX: number = 0;

    // OTHER
    const childCount: number = Children.count(children);

    // FUNCTIONS
    const setPage: (pageNumber: number, behavior: 'auto' | 'smooth') => void = (pageNumber, behavior) => {
        slideWidth.current = swiper.current!.clientWidth / slideCount;

        setCurrentPage(pageNumber);

        currentOffset.current = -(slideWidth.current * pageNumber);

        swiper.current!.scroll({ left: -currentOffset.current, behavior });

        prevOffset.current = currentOffset.current;

        if (onSwipe) onSwipe(pageNumber);
    };

    const move: (event: React.MouseEvent) => void = event => {
        currentOffset.current = moveX - fingerStartingXPosition + prevOffset.current;
        if (swiper.current) swiper.current.scrollLeft = -currentOffset.current;
    };

    const start: (event: React.MouseEvent) => void = event => {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (target?.classList.contains('swiper-disabled')) return;
        mousePressed = true;
        fingerStartingXPosition = event.clientX;
    };

    const use: (event: React.MouseEvent) => void = event => {
        if (!mousePressed) return;
        moveX = event.pageX;
        move(event);
    };

    const stop: (event: React.MouseEvent) => void = event => {
        slideWidth.current = swiper.current!.clientWidth / slideCount;
        setPage(Math.round((currentOffset.current / slideWidth.current) * -1), 'smooth');

        mousePressed = false;
        moveX = 0;
        fingerStartingXPosition = 0;
    };

    useEffect(() => {
        if (!arrowLeftPressed) return;
        if (currentPage === 0) return;

        setPage(currentPage - 1, 'auto');
    }, [arrowLeftPressed]); // eslint-disable-line

    useEffect(() => {
        if (!arrowRightPressed) return;
        if (currentPage >= childCount - slideCount) return;

        setPage(currentPage + 1, 'auto');
    }, [arrowRightPressed]); // eslint-disable-line

    useEffect(() => {
        setPage(0, 'auto');
    }, [isTouch]); // eslint-disable-line

    useEffect(() => {
        if (!onChange) return;
        onChange(slideCount, swiper.current?.getBoundingClientRect()!);
    }, [slideCount, onChange, width]);

    useEffect(() => {
        setPage(updatePage!, 'smooth');
    }, [updatePage]); // eslint-disable-line

    console.log('RENDER');

    return (
        <>
            {slideCount && (
                <div className={`${styles.grid}`}>
                    <div
                        className={`${styles.swiper} ${className} swiper ${isTouch ? styles.snap : ''}`}
                        style={style}
                        onMouseDown={start}
                        onMouseMove={use}
                        onMouseUp={stop}
                        onMouseLeave={stop}
                        onTouchEnd={() => {
                            const page = Math.round(swiper.current?.scrollLeft! / slideWidth.current);
                            setCurrentPage(page);
                            prevOffset.current = page * slideWidth.current;
                            console.log(page);
                            if (onSwipe) onSwipe(page);
                        }}
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
                </div>
            )}
            {!slideCount && 'Loading...'}
        </>
    );
};

Swiper.defaultProps = {
    page: 0
};

export default Swiper;
