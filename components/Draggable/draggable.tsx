// REACT
import React, { useContext } from 'react';

// TYPES
import Props from './props';

// STYLES
import styles from './draggable.module.scss';

// HELPERS
import uid from 'helpers/uid';
import { dragStart, dragEnd, dragEnter, dragLeave, dragOver, drop } from 'helpers/drag';

const Draggable: React.FC<Props> = ({ children, className, style, id }) => {
    return (
        <div
            onDragStart={event => dragStart(event)}
            onDragEnd={event => dragEnd(event)}
            onDragEnter={event => dragEnter(event)}
            onDragLeave={event => dragLeave(event)}
            onDragOver={event => dragOver(event)}
            onDrop={event => drop(event, 'DRAGGABLE')}
            onTouchStart={event => {
                event.currentTarget.style.width = `${event.currentTarget.getBoundingClientRect().width}px`;
            }}
            onTouchMove={event => {
                event.currentTarget.style.position = 'fixed';
                event.currentTarget.style.left = `${
                    event.touches[0].clientX - event.currentTarget.getBoundingClientRect().width / 2
                }px`;
                event.currentTarget.style.top = `${
                    event.touches[0].clientY - event.currentTarget.getBoundingClientRect().height / 2
                }px`;
            }}
            onTouchEnd={event => {
                console.log(event.currentTarget);
            }}
            className={`${styles.draggable} ${className} draggable`}
            style={style}
            draggable
            id={id ? id : uid()}
        >
            {children}
        </div>
    );
};

export default Draggable;
