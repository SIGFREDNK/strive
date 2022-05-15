// REACT
import { useState, useEffect } from 'react';

const useKeyPress: (target: string) => boolean = targetKey => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const downHandler: (key: any) => void = ({ key }) => setKeyPressed(key === targetKey);

        const upHandler: (key: any) => void = ({ key }) => setKeyPressed(key === targetKey);

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
        };
    }, [targetKey]);

    return keyPressed;
};

export default useKeyPress;
