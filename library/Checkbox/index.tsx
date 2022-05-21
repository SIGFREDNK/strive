// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => any;
};

// STYLES
import styles from './Checkbox.module.scss';

const Checkbox: React.FC<Props> = ({ className, style, title, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className={styles.label}>
            <input
                className={`${styles.checkbox} ${className}`}
                style={{ ...style }}
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    if (onChange) onChange(!isChecked);
                    setIsChecked(!isChecked);
                }}
            />
            <span className={styles.title}>{title}</span>
        </label>
    );
};

Checkbox.defaultProps = {
    className: '',
    title: '',
    checked: false,
    onChange: () => null
};

export default Checkbox;
