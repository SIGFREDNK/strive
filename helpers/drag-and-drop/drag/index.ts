// REACT
import React from 'react';

// UTILITIES
import { detectWhichHalfOfTargetIsClosest } from '../core';

const dragStart: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.add('dragging'); // add dragging class to the selected draggable

    event.dataTransfer.effectAllowed = 'move'; // allows for the draggable to be moved to a new location

    event.dataTransfer.setData('text/plain', event.currentTarget.id); // stores the id of the draggable
};

const dragEnter: (event: React.DragEvent) => void = event => {
    event.preventDefault(); // allow for drop
    event.currentTarget.classList.add('dragover'); // add class to the droppable the draggable is hovering over
};

const dragOver: (event: React.DragEvent) => void = event => {
    event.preventDefault(); // allow for drop
    event.stopPropagation(); // stop redirect in certain browsers
    // detect which half of the draggable the selected draggable is hovering over
    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            // in case of bottom half
            if (event.currentTarget.classList.contains('droppable')) {
                event.currentTarget.lastElementChild?.classList.add('after');
                return false;
            }
            event.currentTarget.classList.add('after'); // show that the draggable will be inserted after the draggable that we are hovering over
            if (event.currentTarget.classList.contains('before')) event.currentTarget.classList.remove('before'); // remove class for showing styling before if present
        },
        () => {
            // top half
            if (event.currentTarget.classList.contains('droppable')) {
                event.currentTarget.firstElementChild?.classList.add('before');
                return false;
            }
            event.currentTarget.classList.add('before'); // show that the draggable will be inserted before the draggable that we are hovering over
            if (event.currentTarget.classList.contains('after')) event.currentTarget.classList.remove('after'); // remove class for showing styling after if present
        }
    );

    return false; // best practice
};

const dragLeave: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.remove('dragover'); // remove dragover class when leaving droppable

    if (!event.currentTarget.classList.contains('droppable')) {
        if (event.currentTarget.classList.contains('after')) event.currentTarget.classList.remove('after');
        if (event.currentTarget.classList.contains('before')) event.currentTarget.classList.remove('before');
        return;
    }

    if (event.currentTarget.firstElementChild?.classList.contains('before'))
        event.currentTarget.firstElementChild.classList.remove('before');

    if (event.currentTarget.firstElementChild?.classList.contains('after'))
        event.currentTarget.firstElementChild.classList.remove('after');

    if (event.currentTarget.lastElementChild?.classList.contains('before'))
        event.currentTarget.lastElementChild.classList.remove('before');

    if (event.currentTarget.lastElementChild?.classList.contains('after'))
        event.currentTarget.lastElementChild.classList.remove('after');
};

const dragEnd: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.remove('dragging'); // remove dragging class from selected draggable
};

const drop: (event: React.DragEvent, place: 'DROPPABLE' | 'DRAGGABLE') => void = (event, place) => {
    event.stopPropagation(); // stop redirect in certain browsers
    event.preventDefault(); // allow for drop

    event.currentTarget.classList.remove('dragover'); // remove dragover style from target

    document.querySelectorAll<HTMLElement>('.before').forEach(element => element.classList.remove('before'));
    document.querySelectorAll<HTMLElement>('.before').forEach(element => element.classList.remove('after'));

    const id = event.dataTransfer.getData('text/plain'); // get the stored id of the selected draggable
    const draggable = document.getElementById(id); // get the selected draggable as a HTMLElement

    // detect which half of the draggable the selected draggable is hovering over
    detectWhichHalfOfTargetIsClosest(
        event,
        () => {
            // in case of bottom half
            if (place === 'DROPPABLE') {
                // if the target is a droppable append the selected draggable to the droppable
                event.currentTarget.appendChild(draggable!);
            } else {
                // if the target is a draggable insert the selected draggable after the target
                event.currentTarget.insertAdjacentElement('afterend', draggable!);
            }
        },
        () => {
            // in case of top half
            if (place === 'DROPPABLE') {
                // if the target is a droppable prepend the selected draggable to the droppable
                event.currentTarget.prepend(draggable!);
            } else {
                // if the target is a draggable insert the selected draggable before the target
                event.currentTarget.insertAdjacentElement('beforebegin', draggable!);
            }
        }
    );

    return false; // best practice
};

export { dragStart, dragEnter, dragOver, dragEnd, dragLeave, drop };
