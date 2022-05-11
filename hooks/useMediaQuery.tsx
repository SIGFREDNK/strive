// REACT
import { useState, useEffect } from 'react';

// INTERFACE
import Breakpoint from 'interfaces/Breakpoint';

const useMediaQuery: (breakpoint: Breakpoint) => void = breakpoint => {
    const [queryResult, setQueryResult] = useState(false);

    useEffect(() => {
        const handleChange: (event: MediaQueryListEvent) => void = event => setQueryResult(event.matches);

        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint.width}px)`);

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [breakpoint]);

    return queryResult;
};

export default useMediaQuery;
