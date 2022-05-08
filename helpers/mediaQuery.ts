import Breakpoint from 'interfaces/Breakpoint';

const mediaQuery: (width: number, bp: Breakpoint[], defaultValue: number) => number = (width, bp, defaultValue) => {
    if (width === 0) return defaultValue;
    let filteredBreakpoints = bp.filter(breakpoint => breakpoint.width >= width);
    let sortedBreakpoints: Breakpoint[] | null | undefined;
    if (filteredBreakpoints) sortedBreakpoints = filteredBreakpoints.sort((a, b) => a.width - b.width);
    if (sortedBreakpoints && sortedBreakpoints.length > 0) {
        return sortedBreakpoints[0].slidesOnDisplay;
    } else {
        return defaultValue;
    }
};

export default mediaQuery;
