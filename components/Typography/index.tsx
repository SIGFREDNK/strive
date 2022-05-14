// REACT
import React, { ReactElement } from 'react';

// TYPES
type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
type Variants = 'title1' | 'title2' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';

type Props = {
    component?: TypographyComponent;
    variant?: Variants;
    text: string;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
};

// STYLES
import styles from './Typography.module.scss';

const Typography: React.FC<Props> = ({ component, text, color, style, variant, className }) => {
    if (!component) {
        switch (variant) {
            case 'title1':
                component = 'h1';
                break;
            case 'title2':
                component = 'h2';
                break;
            case 'subtitle1':
                component = 'h3';
                break;
            case 'subtitle2':
                component = 'h4';
                break;
            case 'body1':
                component = 'p';
                break;
            case 'body2':
                component = 'p';
                break;
        }
    }
    return React.createElement(
        component!,
        { className: `${styles[variant!]} ${styles.typography} ${className}`, style: { ...style, color } },
        text
    );
};

Typography.defaultProps = {
    variant: 'body1'
};

export default Typography;
