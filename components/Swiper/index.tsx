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

type Slide = number | null;

// HELPERS
import mediaQuery from 'helpers/mediaQuery';

// HOOKS
import useWidth from 'hooks/useWidth';
import useKeyPress from 'hooks/useKeyPress';

const Swiper: React.FC<Props> = ({ children, slidesOnDisplay, style, className, breakpoints }) => {
    const [currentOffset, setCurrentOffset] = useState(0); // this stores the offset while swiping
    const [prevOffset, setPrevOffset] = useState(0); // this stores the final offset of the previous swipe session
    const [startX, setStartX] = useState(0); // this stores the start of the cursor/finger at the start of the mouse/touch event
    const [mousePressed, setMousePressed] = useState(false); // true = mouse is pressed on swiper | false = mouse is not pressed on swiper
    const childCount = Children.count(children); // is equal to the number of children of the swiper
    const [slides, setSlides] = useState<Slide>(null);

    const width = useWidth();
    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');

    useEffect(() => {
        if (breakpoints) {
            setSlides(mediaQuery(window.innerWidth, breakpoints, slidesOnDisplay));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breakpoints, slidesOnDisplay]);

    useEffect(() => {
        if (arrowLeftPressed) {
            setCurrentOffset(prevValue => prevValue + 20);
            console.log('arrowLeftPressed');
        }
    }, [arrowLeftPressed]);

    useEffect(() => {
        if (arrowRightPressed) {
            setCurrentOffset(prevValue => prevValue - 20);
            console.log('arrowRightPressed');
        }
    }, [arrowRightPressed]);

    let moveX: number; // stores the current x position of the cursor/touch

    if (breakpoints && width !== 0) {
        let currentSlideCount = mediaQuery(width, breakpoints, slidesOnDisplay); // calculates the correct number of slides for the current browser width
        if (slides !== currentSlideCount) {
            // if the number of current slides is not correct update it
            setSlides(currentSlideCount);
            setCurrentOffset(0);
        }
    }

    const alignToNearestSlide: (target: EventTarget & Element) => void = target => {
        const slideWidth = target.clientWidth / slides!; // the width of the slider divided by the number of slides on display equals the width of a single slide

        const slide = Math.round(currentOffset / slideWidth); // the final offset of the slider divided by the width of a single slider when rounded equals the left-most slide on display

        setCurrentOffset(slideWidth * slide); // finally we can set the offset to be exactly the width of a single slide times the index of the left-most slide. this aligns the slide perfectly

        setPrevOffset(slideWidth * slide); // we set the previous offset, so the slider doesn't reset its position, when we use it again
    };

    const getSliderLengthOfScreen: (swiperWidth: number) => number = swiperWidth => {
        const slideLength = swiperWidth / slides!; // the width of the swiper divided by the number of slides on display gives us the length of a single slide
        return slideLength * -(childCount - slides!); // the number of pixels of screen is equal to the width of a slide times the number of slides of screen (the minus is because we move in the negative x direction)
    };

    const move: (event: React.TouchEvent | React.MouseEvent) => void = event => {
        let currentTransform = moveX - startX + prevOffset; // we take the current x position of the cursor/finger and subtracts the initial, we then add the initial offset of the slider

        const sliderLength = getSliderLengthOfScreen(event.currentTarget.clientWidth); // gets the length of the slider

        if (currentTransform > 0) return setCurrentOffset(0); // stops us from swiping before slide 1

        if (currentTransform < sliderLength) return setCurrentOffset(sliderLength); // stops us from scrolling after the last slide

        setCurrentOffset(currentTransform); // sets the current offset of the slider
    };

    const touchStart: (event: React.TouchEvent) => void = event => {
        const target = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
        if (target?.classList.contains('swiper-disabled')) return;

        setStartX(event.touches[0].clientX); // store the initial x position of the touch
    };

    const touchMove: (event: React.TouchEvent) => void = event => {
        moveX = event.touches[0].clientX; // stores the current position of the touch
        move(event);
    };

    const touchEnd: (event: React.TouchEvent) => void = event => {
        alignToNearestSlide(event.currentTarget); // align perfectly to the nearest slide
    };

    const dragStart: (event: React.MouseEvent) => void = event => {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (target?.classList.contains('swiper-disabled')) return;

        setMousePressed(true); // is true when the mouse is pressed on the swiper otherwise its false
        setStartX(event.pageX); // store the initial x position of the mouse
    };

    const dragMove: (event: React.MouseEvent) => void = event => {
        if (!mousePressed) return; // stops the move from counting when the mouse is not pressed on the swiper
        moveX = event.pageX; // stores the current position of the mouse
        move(event);
    };

    const dragEnd: (event: React.MouseEvent) => void = event => {
        setMousePressed(false); // sets the mouse presse to false stopping any move on the swiper from counting
        alignToNearestSlide(event.currentTarget); // align perfectly to the nearest slide
    };

    return (
        <>
            {slides && (
                <div
                    className={`${styles.swiper} ${className}`}
                    style={style}
                    onTouchStart={event => touchStart(event)}
                    onTouchMove={event => touchMove(event)}
                    onTouchEnd={event => touchEnd(event)}
                    onMouseDown={event => dragStart(event)}
                    onMouseMove={event => dragMove(event)}
                    onMouseUp={event => dragEnd(event)}
                >
                    <div
                        className={styles.slider}
                        style={{
                            width: `${(100 / slides!) * childCount}%`,
                            transform: `translateX(${currentOffset}px)`
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            {!slides && 'Loading...'}
        </>
    );
};

export default Swiper;
