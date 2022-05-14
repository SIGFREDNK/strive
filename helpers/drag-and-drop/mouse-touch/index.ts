// REACT
import React from 'react';

// UTILITIES
import {
    removeDragoverStyles,
    getCurrentXPosition,
    getCurrentYPosition,
    moveDraggableToFingerPosition,
    detectWhichHalfOfTargetIsClosest,
    resetDragged
} from '../core';

// VARIABLES
let dragged: any;

const pickup: (event: React.MouseEvent | React.TouchEvent) => void = event => {
    if (event instanceof TouchEvent) event.preventDefault();

    dragged = event.currentTarget;

    dragged.classList.add('dragging');

    dragged.style.width = `${dragged.getBoundingClientRect().width}px`;

    dragged.style.pointerEvents = 'none';

    const passiveDraggables = document.querySelectorAll<HTMLElement>('.draggable:not(.dragging)');
    passiveDraggables.forEach(draggable => draggable.classList.add('inactive'));
};

const move: (
    event: React.MouseEvent | React.TouchEvent,
    cb:
        | undefined
        | ((
              fingerXPosition: number,
              fingerYPosition: number,
              target: Element | null
          ) => any | void | unknown | undefined)
) => void = (event, cb) => {
    if (!dragged) return;

    removeDragoverStyles();

    dragged.style.position = 'fixed';

    const fingerXPosition = getCurrentXPosition(event);
    const fingerYPosition = getCurrentYPosition(event);

    moveDraggableToFingerPosition(fingerXPosition, fingerYPosition, dragged);

    const target = document.elementFromPoint(fingerXPosition, fingerYPosition);

    if (cb) cb(fingerXPosition, fingerYPosition, target);

    if (!target?.classList.contains('droppable') && !target?.classList.contains('draggable')) return;

    target.classList.add('dragover');

    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            if (target.classList.contains('droppable')) return target.lastElementChild?.classList.add('after');
            target.classList.add('after');
        },
        () => {
            if (target.classList.contains('droppable')) return target.firstElementChild?.classList.add('before');
            target.classList.add('before');
        },
        target
    );
};

const place: (event: React.MouseEvent | React.TouchEvent) => void = event => {
    if (!dragged) return;

    const fingerXPosition = getCurrentXPosition(event);
    const fingerYPosition = getCurrentYPosition(event);

    // TODO: ADD FUNCTION
    const target = document.elementFromPoint(fingerXPosition, fingerYPosition);

    if (!target?.classList.contains('droppable') && !target?.classList.contains('draggable'))
        return (dragged = resetDragged(dragged));

    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            if (target?.classList.contains('droppable')) target.append(dragged);
            if (target?.classList.contains('draggable')) target.insertAdjacentElement('afterend', dragged);
        },
        () => {
            if (target?.classList.contains('droppable')) target.prepend(dragged);
            if (target?.classList.contains('draggable')) target.insertAdjacentElement('beforebegin', dragged);
        }
    );

    dragged = resetDragged(dragged);
};

export { pickup, move, place };
