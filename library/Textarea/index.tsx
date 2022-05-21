// REACT
import React from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    placeholder?: string;
};

// STYLES
import styles from './Textarea.module.scss';

const Textarea: React.FC<Props> = ({ className, style, placeholder }) => {
    return <textarea className={`${className} ${styles.textarea}`} style={{ ...style }} placeholder={placeholder} />;
};

export default Textarea;
