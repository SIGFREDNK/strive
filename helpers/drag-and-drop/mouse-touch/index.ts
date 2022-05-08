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
    dragged = event.currentTarget; // store the draggable the user is dragging

    dragged.classList.add('dragging'); // add class dragging to draggable the user is dragging for styling

    dragged.style.width = `${dragged.getBoundingClientRect().width}px`; // set the width in px instead of % so it remains after we make the draggables position fixed

    dragged.style.pointerEvents = 'none'; // makes us able to select the element underneath the active draggable

    const passiveDraggables = document.querySelectorAll<HTMLElement>('.draggable:not(.dragging)'); // select all the inactive draggables
    passiveDraggables.forEach(draggable => draggable.classList.add('inactive')); // make their content unselectable, so we are more easily able to hit the droppables/draggables when placing the active draggable
};

const move: (event: React.MouseEvent | React.TouchEvent) => void = event => {
    if (!dragged) return; // return if we have not selected a draggable at the start of the touch session

    removeDragoverStyles(); // remove any previous styles given to the target or previous target

    dragged.style.position = 'fixed'; // makes us able to move the active draggable

    const fingerXPosition = getCurrentXPosition(event); // gets the current x position of the finger
    const fingerYPosition = getCurrentYPosition(event); // gets the current y position of the finger

    moveDraggableToFingerPosition(fingerXPosition, fingerYPosition, dragged); // moves the draggable to where the finger currently is

    const target = document.elementFromPoint(fingerXPosition, fingerYPosition); // get the element right under the users finger

    if (!target?.classList.contains('droppable') && !target?.classList.contains('draggable')) return; // return if there is no valid target

    target.classList.add('dragover'); // add class to target for highlighting

    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            // in case of bottom
            if (target.classList.contains('droppable')) return target.lastElementChild?.classList.add('after');
            target.classList.add('after'); // show placement indicator below target
        },
        () => {
            // in case of top
            if (target.classList.contains('droppable')) return target.firstElementChild?.classList.add('before');
            target.classList.add('before'); // show placement indicator above target
        },
        target
    );
};

const place: (event: React.MouseEvent | React.TouchEvent) => void = event => {
    if (!dragged) return; // return if we have not selected a draggable at the start of the touch session

    const fingerXPosition = getCurrentXPosition(event); // gets the current x position of the finger
    const fingerYPosition = getCurrentYPosition(event); // gets the current y position of the finger

    // TODO: ADD FUNCTION
    const target = document.elementFromPoint(fingerXPosition, fingerYPosition); // get the element right under the users finger

    if (!target?.classList.contains('droppable') && !target?.classList.contains('draggable'))
        return (dragged = resetDragged(dragged)); // reset if there is no valid target;

    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            console.log('Append');
            if (target?.classList.contains('droppable')) target.append(dragged);
            if (target?.classList.contains('draggable')) target.insertAdjacentElement('afterend', dragged);
        },
        () => {
            console.log('Prepend');
            if (target?.classList.contains('droppable')) target.prepend(dragged);
            if (target?.classList.contains('draggable')) target.insertAdjacentElement('beforebegin', dragged);
        }
    );

    dragged = resetDragged(dragged); // resets active draggables styling, the passive draggables styling, removes dragging class from active draggable and sets dragged variable equal to null
};

export { pickup, move, place };
