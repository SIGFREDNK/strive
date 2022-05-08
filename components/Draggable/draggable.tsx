// REACT
import React, { useContext } from 'react';

// TYPES
import Props from './props';

// STYLES
import styles from './draggable.module.scss';

// HELPERS
import uid from 'helpers/uid';
import { dragStart, dragEnd, dragEnter, dragLeave, dragOver, drop, pickup } from 'helpers/drag-and-drop';

// CONFIG
import { dragAndDrop } from 'config';

const Draggable: React.FC<Props> = ({ children, className, style, id }) => {
    return (
        <div
            onDragStart={event => {
                dragAndDrop.enableDrag ? dragStart(event) : null;
            }}
            onDragEnd={event => {
                dragAndDrop.enableDrag ? dragEnd(event) : null;
            }}
            onDragEnter={event => {
                dragAndDrop.enableDrag ? dragEnter(event) : null;
            }}
            onDragLeave={event => {
                dragAndDrop.enableDrag ? dragLeave(event) : null;
            }}
            onDragOver={event => {
                dragAndDrop.enableDrag ? dragOver(event) : null;
            }}
            onDrop={event => {
                dragAndDrop.enableDrag ? drop(event, 'DRAGGABLE') : null;
            }}
            onTouchStart={event => {
                dragAndDrop.enableTouch ? pickup(event) : null;
            }}
            onMouseDown={event => {
                dragAndDrop.enableMouse ? pickup(event) : null;
            }}
            className={`${styles.draggable} ${className} draggable`}
            style={style}
            draggable={dragAndDrop.enableDrag}
            id={id ? id : uid()}
        >
            {children}
        </div>
    );
};

export default Draggable;
