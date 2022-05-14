// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    backgroundColor?: string;
};

// STYLES
import styles from './Actiongroup.module.scss';

const ActionGroup: React.FC<Props> = ({ children, className, style, backgroundColor }) => {
    return (
        <div className={`${styles.group} ${className}`} style={{ ...style, backgroundColor }}>
            {children}
        </div>
    );
};

ActionGroup.defaultProps = {
    backgroundColor: '#ffffff'
};

export default ActionGroup;
