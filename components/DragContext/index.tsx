// REACT
import React, { useState, createContext, PropsWithChildren } from 'react';

// TYPES
interface Props extends PropsWithChildren<any> {
    style?: React.CSSProperties;
    className?: string;
}

// STYLES
import styles from './dragcontext.module.scss';

// HELPERS
import { move, place } from 'helpers/drag-and-drop';

// CONFIG
import { dragAndDrop } from 'config';

const DragContext: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div
            onTouchMove={event => {
                dragAndDrop.enableTouch ? move(event) : null;
            }}
            onTouchEnd={event => {
                dragAndDrop.enableTouch ? place(event) : null;
            }}
            onMouseMove={event => {
                dragAndDrop.enableMouse ? move(event) : null;
            }}
            onMouseUp={event => {
                dragAndDrop.enableMouse ? place(event) : null;
            }}
            className={`${styles.dragcontext} ${className} dragcontext`}
            style={style}
        >
            {children}
        </div>
    );
};

export default DragContext;
