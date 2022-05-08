// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

// STYLES
import styles from './droppable.module.scss';

// HELPERS
import { dragEnter, dragOver, dragLeave, drop } from 'helpers/drag';

const Droppable: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div
            onDragEnter={event => dragEnter(event)}
            onDragOver={event => dragOver(event)}
            onDragLeave={event => dragLeave(event)}
            onDrop={event => drop(event, 'DROPPABLE')}
            className={`${styles.droppable} ${className} droppable`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Droppable;
