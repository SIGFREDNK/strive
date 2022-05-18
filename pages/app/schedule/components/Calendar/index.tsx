// REACT
import React from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
};

// STYLES
import styles from './Calendar.module.scss';

const Calendar: React.FC<Props> = ({ className, style }) => {
    return (
        <div className={`${className} ${styles.calendar}`} style={{ ...style }}>
            Calendar
        </div>
    );
};

export default Calendar;
