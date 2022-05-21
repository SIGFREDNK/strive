// REACT
import React, { useEffect, useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    toggle?: boolean;
};

// STYLES
import styles from './Flyout.module.scss';

const Flyout: React.FC<Props> = ({ className, style, children, toggle }) => {
    return (
        <div className={`${className} ${styles.flyout} ${toggle ? styles.open : styles.closed}`} style={{ ...style }}>
            {children}
        </div>
    );
};

Flyout.defaultProps = {
    toggle: false
};

export default Flyout;
