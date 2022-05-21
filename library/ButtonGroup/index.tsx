// REACT
import React, { useState, useEffect, createContext } from 'react';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (selected: number) => any;
};

// CONTEXT
export const SelectedButton = createContext<any>(null);

// STYLES
import styles from './ButtonGroup.module.scss';

const ButtonGroup: React.FC<Props> = ({ className, style, children, onChange }) => {
    const [selected, setSelected] = useState<any>(null);

    useEffect(() => {
        if (onChange) onChange(selected);
    }, [selected]); // eslint-disable-line

    return (
        <div className={`${styles.group} ${className}`} style={{ ...style }} role="group">
            <SelectedButton.Provider value={{ selected, setSelected }}>{children}</SelectedButton.Provider>
        </div>
    );
};

ButtonGroup.defaultProps = {
    className: '',
    onChange: () => null
};

export default ButtonGroup;
