// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
};

// UI COMPONENT
import Calendar from 'library/Calendar';
import IconButton from 'library/IconButton';

// ICONS
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';

// STYLES
import styles from './CalendarButton.module.scss';

const CalendarButton: React.FC<Props> = ({ className, style, disabled }) => {
    const [displayCalendar, setDisplayCalendar] = useState(false);
    const [active, setActive] = useState(false);

    const dateChangeHandler: (date: Date | null) => void = date => {
        setDisplayCalendar(false);
        setActive(date !== null);
    };

    return (
        <div className={`${styles.calendarWrapper} ${className}`} style={{ ...style }}>
            <IconButton
                className={`${styles.calendarButton} ${active ? styles.active : styles.inactive}`}
                icon={<CalendarIcon />}
                onClick={() => setDisplayCalendar(displayCalendar ? false : true)}
                disabled={disabled}
            />

            <Calendar
                className={`${styles.calendar} ${displayCalendar ? styles.show : styles.hidden}`}
                onDateChange={date => dateChangeHandler(date)}
            />
        </div>
    );
};

CalendarButton.defaultProps = {
    className: '',
    disabled: false
};

export default CalendarButton;
