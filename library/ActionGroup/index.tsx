// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

// STYLES
import styles from './Actiongroup.module.scss';

const ActionGroup: React.FC<Props> = ({ children, className, style }) => {
    return (
        <div className={`${styles.group} ${className}`} style={style}>
            {children}
        </div>
    );
};

export default ActionGroup;
