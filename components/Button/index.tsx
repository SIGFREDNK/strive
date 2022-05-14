// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// TYPES
type CommonProps = {
    backgroundColor?: string;
    color?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'round' | 'square' | 'rounded';
    variant?: 'filled' | 'outlined';
    type?: 'link' | 'button';
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
};

type TypeProps = { type?: 'link'; path: string } | { type?: string; path?: never };

type TextProps = { text?: undefined; children: React.ReactNode } | { text?: string; children?: never };

type Props = CommonProps & TypeProps & TextProps;

// FRAMER MOTION
import { motion } from 'framer-motion';

// STYLES
import styles from './Button.module.scss';

const Button: React.FC<Props> = ({
    text,
    backgroundColor,
    color,
    style,
    onClick,
    className,
    size,
    shape,
    variant,
    type,
    path,
    startIcon,
    endIcon,
    children
}) => {
    let padding = size === 'large' ? '1rem 4rem' : '0.75rem 1rem';
    if (size === 'small') padding = '0.3rem 0.9rem';

    let borderRadius = shape === 'round' ? '1rem' : '0.4rem';
    if (shape === 'square') borderRadius = '0';

    let fontSize = size === 'large' ? '1.2rem' : '0.9rem';
    if (size === 'small') fontSize = '0.9rem';

    return (
        <>
            {type === 'link' && (
                <Link href={path!} passHref>
                    <motion.button
                        className={`${styles.button} ${className}`}
                        style={{
                            ...style,
                            backgroundColor: variant === 'filled' ? backgroundColor : 'transparent',
                            border: variant === 'outlined' ? `1px solid ${backgroundColor}` : 'none',
                            color,
                            padding,
                            borderRadius,
                            fontSize
                        }}
                        onClick={event => onClick!(event)}
                        whileHover={{ scale: 1.035 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.05 }}
                    >
                        {startIcon && startIcon}
                        {text ? <span>{text}</span> : children}
                        {endIcon && endIcon}
                    </motion.button>
                </Link>
            )}
            {type === 'button' && (
                <motion.button
                    className={`${styles.button} ${className}`}
                    style={{
                        ...style,
                        backgroundColor: variant === 'filled' ? backgroundColor : 'transparent',
                        border: variant === 'outlined' ? `1px solid ${backgroundColor}` : 'none',
                        color,
                        padding,
                        borderRadius,
                        fontSize,
                        boxShadow: '0 0 3px rgba(255, 255, 255, 0.2)'
                    }}
                    onClick={event => onClick!(event)}
                    whileHover={{ scale: 1.035 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.05 }}
                >
                    {startIcon && startIcon}
                    {text ? <span>{text}</span> : children}
                    {endIcon && endIcon}
                </motion.button>
            )}
        </>
    );
};

Button.defaultProps = {
    onClick: () => null,
    color: '#000000',
    backgroundColor: '#ffffff',
    size: 'medium',
    variant: 'filled',
    shape: 'rounded',
    type: 'button'
};

export default Button;
