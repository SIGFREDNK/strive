// REACT
import React, { PropsWithChildren } from 'react';

// TYPES
interface Props extends PropsWithChildren<any> {
    style?: React.CSSProperties;
    className?: string;
    whileDragging?: (fingerXPosition: number, fingerYPosition: number, target: Element | null) => any;
    dragEnd?: () => any;
}

// STYLES
import styles from './dragcontext.module.scss';

// HELPERS
import { dragEnd, move, place } from 'helpers/drag-and-drop';

// CONFIG
import { dragAndDrop } from 'config';

const DragContext: React.FC<Props> = ({ children, style, className, whileDragging, dragEnd }) => {
    return (
        <div
            onTouchMove={event => {
                dragAndDrop.enableTouch ? move(event, whileDragging) : null;
            }}
            onTouchEnd={event => {
                dragAndDrop.enableTouch
                    ? (event: React.TouchEvent<Element>) => {
                          place(event);
                          if (dragEnd) dragEnd();
                      }
                    : null;
            }}
            onMouseMove={event => {
                dragAndDrop.enableMouse ? move(event, whileDragging) : null;
            }}
            onMouseUp={event => {
                dragAndDrop.enableMouse
                    ? (event: React.MouseEvent<Element>) => {
                          place(event);
                          if (dragEnd) dragEnd();
                      }
                    : null;
            }}
            className={`${styles.dragcontext} ${className} dragcontext`}
            style={style}
        >
            {children}
        </div>
    );
};

export default DragContext;
