// REACT
import React from 'react';

// TYPES
interface DragContextType {
    enableDrag: boolean;
    enableMouse: boolean;
    enableTouch: boolean;
}

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

// STYLES
import styles from './Droppable.module.scss';

// HELPERS
import { dragEnter, dragOver, dragLeave, drop, place } from 'helpers/drag-and-drop';

// CONFIG
import { dragAndDrop } from 'config';

const Droppable: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div
            onDragEnter={event => {
                dragAndDrop.enableDrag ? dragEnter(event) : null;
            }}
            onDragOver={event => {
                dragAndDrop.enableDrag ? dragOver(event) : null;
            }}
            onDragLeave={event => {
                dragAndDrop.enableDrag ? dragLeave(event) : null;
            }}
            onDrop={event => {
                dragAndDrop.enableDrag ? drop(event, 'DROPPABLE') : null;
            }}
            onTouchEnd={event => {
                dragAndDrop.enableTouch ? place(event) : null;
            }}
            onMouseUp={event => {
                dragAndDrop.enableTouch ? place(event) : null;
            }}
            className={`${styles.droppable} ${className} droppable`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Droppable;
