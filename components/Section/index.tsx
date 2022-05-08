// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: object;
    className?: string;
};

// STYLES
import styles from './section.module.scss';

const Section: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div style={style} className={`${className} ${styles.section}`}>
            {children}
        </div>
    );
};

export default Section;
