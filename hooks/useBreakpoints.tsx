// REACT
import { useState, useEffect } from 'react';

// INTERFACE
import Breakpoint from '../interfaces/Breakpoint';

const useBreakpoints: (defaultValue: number, breakpoints: Breakpoint[]) => number = (defaultValue, breakpoints) => {
    const [slideCount, setSlideCount] = useState(defaultValue);

    let mediaQueries: MediaQueryList[] = [];
    let slideCountOfPreviousBreakpoint: number;
    let matches: number[] = [];

    useEffect(() => {
        breakpoints.sort((a: Breakpoint, b: Breakpoint) => b.width - a.width);

        breakpoints.map(breakpoint => {
            const handleChange = (event: MediaQueryListEvent) =>
                setSlideCount(event.matches ? breakpoint.slidesOnDisplay : breakpoint.nextSlideValue);

            breakpoint.nextSlideValue = slideCountOfPreviousBreakpoint ? slideCountOfPreviousBreakpoint : defaultValue;

            slideCountOfPreviousBreakpoint = breakpoint.slidesOnDisplay;

            const mediaQuery = window.matchMedia(`(max-width: ${breakpoint.width}px)`);

            if (mediaQuery.matches) matches.push(breakpoint.slidesOnDisplay);

            mediaQuery.addEventListener('change', handleChange);

            mediaQueries.push(mediaQuery);

            return () => mediaQueries.map(el => el.removeEventListener('change', handleChange));
        });
        if (matches.length > 0) setSlideCount(Math.min(...matches));
    }, [breakpoints, defaultValue]);
    return slideCount;
};

export default useBreakpoints;
