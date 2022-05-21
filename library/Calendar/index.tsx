// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    onDateChange?: (date: Date | null) => any;
};

// ICONS
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';

// DEPENDENCIES
import {
    startOfToday,
    format,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    isToday,
    isSameMonth,
    isEqual,
    parse,
    add,
    getDay,
    startOfWeek
} from 'date-fns';

// STYLES
import styles from './Calendar.module.scss';

const Calendar: React.FC<Props> = ({ className, style, onDateChange }) => {
    const today = startOfToday();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedMonth, setSelectedMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayOfCurrentMonth = parse(selectedMonth, 'MMM-yyyy', new Date());

    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth), { weekStartsOn: 1 })
    });

    const setMonth: (month: number) => void = month => {
        let firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: month });
        setSelectedMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
    };

    const selectDate: (date: Date) => void = date => {
        if (!selectedDate || !isEqual(selectedDate, date)) {
            onDateChange!(date);
            return setSelectedDate(date);
        }
        onDateChange!(null);
        return setSelectedDate(null);
    };

    return (
        <div className={`${styles.calendar} ${className}`} style={{ ...style }} current-date={`${selectedDate}`}>
            <div className={styles.header}>
                <div className={styles.monthWrapper}>
                    <button onClick={() => setMonth(-1)}>
                        <ChevronLeftIcon />
                    </button>
                    <h4 className={styles.month}>{format(firstDayOfCurrentMonth, 'MMM')}</h4>
                    <button onClick={() => setMonth(1)}>
                        <ChevronRightIcon />
                    </button>
                </div>
                <div className={styles.yearWrapper}>
                    <button onClick={() => setMonth(-12)}>
                        <ChevronLeftIcon />
                    </button>
                    <h4 className={styles.year}>{format(firstDayOfCurrentMonth, 'yyyy')}</h4>
                    <button onClick={() => setMonth(12)}>
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
            <div className={styles.content}>
                <ul className={styles.week}>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>
                <div className={`${styles.dates} `}>
                    {days.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => selectDate(day)}
                            style={{ gridColumnStart: getDay(day) !== 0 ? getDay(day) : 7 }}
                            className={`${styles.date} ${
                                selectedDate && isEqual(day, selectedDate) ? styles.selected : ''
                            } ${isToday(day) ? styles.isToday : ''} ${
                                isSameMonth(day, firstDayOfCurrentMonth)
                                    ? styles.isCurrentMonth
                                    : styles.isDifferentMonth
                            }`}
                        >
                            {format(day, 'd')}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

Calendar.defaultProps = {
    className: '',
    onDateChange: () => null
};

export default Calendar;
