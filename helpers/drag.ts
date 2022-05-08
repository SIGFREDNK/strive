// REACT
import React from 'react';

const dragStart: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', event.currentTarget.id);
};

const dragEnd: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.remove('dragging');
};

const dragEnter: (event: React.DragEvent) => void = event => {
    event.preventDefault();
    event.currentTarget.classList.add('dragover');
};

const dragLeave: (event: React.DragEvent) => void = event => {
    event.currentTarget.classList.remove('dragover');
    if (event.currentTarget.classList.contains('before')) event.currentTarget.classList.remove('before');
    if (event.currentTarget.classList.contains('after')) event.currentTarget.classList.remove('after');
};

const dragOver: (event: React.DragEvent) => void = event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.currentTarget.classList.contains('droppable')) return false;

    detectWhichHalfIsTargeted(
        event,
        () => {
            // bottom half
            event.currentTarget.classList.add('after');
            if (event.currentTarget.classList.contains('before')) event.currentTarget.classList.remove('before');
        },
        () => {
            // top half
            event.currentTarget.classList.add('before');
            if (event.currentTarget.classList.contains('after')) event.currentTarget.classList.remove('after');
        }
    );

    return false;
};

// const dragOver: (event: React.DragEvent) => void = event => {
//     event.preventDefault();
//     event.stopPropagation();
// };

const drop: (event: React.DragEvent, place: 'DROPPABLE' | 'DRAGGABLE') => void = (event, place) => {
    event.stopPropagation();
    event.preventDefault();

    event.currentTarget.classList.remove('dragover');
    if (event.currentTarget.classList.contains('before')) event.currentTarget.classList.remove('before');
    if (event.currentTarget.classList.contains('after')) event.currentTarget.classList.remove('after');

    const id = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    detectWhichHalfIsTargeted(
        event,
        () => {
            // bottom half
            if (place === 'DROPPABLE') {
                event.currentTarget.appendChild(draggable!);
                console.log('BOTTOM HALF');
            } else {
                event.currentTarget.insertAdjacentElement('afterend', draggable!);
            }
        },
        () => {
            // top half
            if (place === 'DROPPABLE') {
                // console.log(event.currentTarget);
                // const firstChild = event.currentTarget.firstElementChild;
                // event.currentTarget.insertBefore(draggable!, firstChild);
                event.currentTarget.prepend(draggable!);
                console.log('TOP HALF');
                console.log(place);
            } else {
                event.currentTarget.insertAdjacentElement('beforebegin', draggable!);
            }
        }
    );

    return false;
};

// const drop: (event: React.DragEvent) => void = event => {
//     event.preventDefault();
//     event.stopPropagation();

//     event.currentTarget.classList.remove(styles.dragover);

//     const id = event.dataTransfer.getData('text/plain');
//     const draggable = document.getElementById(id);
//     event.currentTarget.appendChild(draggable!);
// };

const detectWhichHalfIsTargeted: (event: React.DragEvent, after: () => void, before: () => void) => void = (
    event,
    after,
    before
) => {
    const target = event.currentTarget;
    const boundingBox = target.getBoundingClientRect();
    const cursorY = event.pageY;
    const distanceFromTop = (boundingBox.top - cursorY) * -1;
    const distanceFromBottom = boundingBox.bottom - cursorY;

    if (distanceFromBottom < distanceFromTop) {
        after();
    }
    if (distanceFromBottom >= distanceFromTop) {
        before();
    }
};

export { dragStart, dragEnter, dragOver, dragLeave, dragEnd, drop };
