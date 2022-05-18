// REACT
import React from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
};

// STYLES
import styles from './TaskList.module.scss';

const TaskList: React.FC<Props> = ({ className, style }) => {
    return (
        <div className={`${className} ${styles.tasklist}`} style={{ ...style }}>
            TaskList
        </div>
    );
};

export default TaskList;
