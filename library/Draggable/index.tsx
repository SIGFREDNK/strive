// REACT
import React, { useState, useEffect } from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
};

// STYLES
import styles from './Draggable.module.scss';

// HELPERS
import uid from 'helpers/uid';
import { dragStart, dragEnd, dragEnter, dragLeave, dragOver, drop, pickup } from 'helpers/drag-and-drop';

// CONFIG
import { dragAndDrop } from 'config';

const Draggable: React.FC<Props> = ({ children, className, style, id }) => {
    const [generatedId, setGeneratedId] = useState<string | undefined>(undefined);

    useEffect(() => {
        setGeneratedId(uid());
    }, []);

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
            id={id ? id : generatedId}
        >
            {children}
        </div>
    );
};

export default Draggable;
