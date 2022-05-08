// REACT
import React from 'react';

// TYPES
type props = {
    text?: string;
    backgroundColor?: string;
    color?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent) => void;
    children?: React.ReactNode;
    className?: string;
};

// FRAMER MOTION
import { motion } from 'framer-motion';

// STYLES
import styles from './Button.module.scss';

const Button: React.FC<props> = ({ text, backgroundColor, color, style, onClick, children, className }) => {
    return (
        <motion.button
            className={`${styles.button} ${className}`}
            style={{
                ...style,
                backgroundColor,
                color,
                boxShadow: ' 0 1px 1px #626566'
            }}
            onClick={event => onClick!(event)}
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.05 }}
        >
            {text && !children && text}
            {children && children}
        </motion.button>
    );
};

Button.defaultProps = {
    onClick: () => null,
    color: '#000000',
    backgroundColor: '#ffffff'
};

export default Button;
