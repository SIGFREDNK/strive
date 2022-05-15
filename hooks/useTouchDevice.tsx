// REACT
import { useState, useEffect } from 'react';

const useTouchDevice: () => boolean = () => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const handleChange: () => void = () => setIsTouch(mediaQuery.matches);

        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsTouch(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    return isTouch;
};

export default useTouchDevice;
