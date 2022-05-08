// REACT
import React, { useState, useEffect } from 'react';

const useKeyPress: (target: string) => boolean = targetKey => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const downHandler: (key: any) => void = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        };

        const upHandler: (key: any) => void = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        };

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
