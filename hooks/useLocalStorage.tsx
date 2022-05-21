// REACT
import React, { useState, useEffect } from 'react';

const useLocalStorage: (key: string, initialValue: any) => readonly [value: any, setValue: React.Dispatch<any>] = (
    key,
    initialValue
) => {
    const [value, setValue] = useState(true);
    let currentValue: any;

    useEffect(() => {
        const data = localStorage.getItem(key);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentValue = data;
        if (data) {
            try {
                setValue(JSON.parse(data));
            } catch {
                setValue(initialValue);
            }
        }
    }, []); // eslint-disable-line

    useEffect(() => {
        if (!currentValue) localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]); // eslint-disable-line

    return [value, setValue] as const;
};

export default useLocalStorage;
