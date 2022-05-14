const detectWhichHalfOfTargetIsClosest: (
    event: any,
    before: () => void,
    after: () => void,
    target?: Element
) => void = (event, before, after, target) => {
    const eventTarget = target ? target : event.currentTarget; // get the current target

    const boundingBox = eventTarget.getBoundingClientRect(); // get the bounding box fo the target

    const cursorY = event.changedTouches ? event.changedTouches[0].clientY : event.pageY; // get the y position of the touch

    const distanceFromTop = (boundingBox.top - cursorY) * -1; // get the distance from the cursor to the top of the bounding box since we are moving in the negative direction make the result positive

    const distanceFromBottom = boundingBox.bottom - cursorY; // get the distance from the cursor to the bottom of the bounding box

    return distanceFromBottom <= distanceFromTop ? before() : after(); // closest to bottom: run before, closest to top: run after
};

// returns the current x position of the finger/cursor
const getCurrentXPosition: (event: any) => number = event => {
    return event.changedTouches ? event.changedTouches[0].clientX : event.pageX;
};

// returns the current y position of the finger
const getCurrentYPosition: (event: any) => number = event => {
    return event.changedTouches ? event.changedTouches[0].clientY : event.pageY;
};

const offsetParentTransform: (dragged: HTMLElement) => { translateX: number; translateY: number } = dragged => {
    let translateX = 0;
    let translateY = 0;
    if (dragged.closest('.transform') !== null) {
        const transformedParent: HTMLElement = dragged.closest('.transform')!;
        const { m41, m42 } = new DOMMatrixReadOnly(transformedParent.style.transform);
        translateX = m41;
        translateY = m42;
    }
    return { translateX, translateY };
};

const moveDraggableToFingerPosition: (xPosition: number, yPosition: number, dragged: HTMLElement) => void = (
    xPosition,
    yPosition,
    dragged
) => {
    const halfWidthOfDraggable = dragged.getBoundingClientRect().width / 2; // gets half the width of the active draggable (used for centering)
    const halfHeightOfDraggable = dragged.getBoundingClientRect().height / 2; // gets half the height of the active draggable (used for centering)
    const { translateX, translateY } = offsetParentTransform(dragged);
    dragged.style.left = `${xPosition - halfWidthOfDraggable + -translateX}px`; // sets the left position of the draggable to the x position of the users finger - half of the draggables width, which places it perfectly centered under the users finger horizontally
    dragged.style.top = `${yPosition - halfHeightOfDraggable + -translateY}px`; // sets the top position of the draggable to the y position of the users finger - half of the draggables height, which places it perfectly centered under the users finger vertically
};

const removeDragoverStyles: () => void = () => {
    if (document.querySelector('.dragover')) document.querySelector('.dragover')?.classList.remove('dragover');
    if (document.querySelector('.before')) document.querySelector('.before')?.classList.remove('before');
    if (document.querySelector('.after')) document.querySelector('.after')?.classList.remove('after');
};

const resetDragged: (dragged: HTMLElement) => void = dragged => {
    // reset modified styles
    dragged.style.left = '';
    dragged.style.top = '';
    dragged.style.height = '';
    dragged.style.width = '';
    dragged.style.position = '';
    dragged.style.pointerEvents = 'all';

    // make passive draggables interactive again
    const passiveDraggables = document.querySelectorAll<HTMLElement>('.draggable:not(.dragging)');
    passiveDraggables.forEach(draggable => draggable.classList.remove('inactive'));

    dragged.classList.remove('dragging'); // remove dragging class from selected draggable

    removeDragoverStyles(); // remove dragover from the last target & remove placement indicator from last target

    return null; // set the dragged variable equal to null
};

const getElementFromPosition: (xPosition: number, yPosition: number) => Element | null = (xPosition, yPosition) => {
    return document.elementFromPoint(xPosition, yPosition);
};

export {
    detectWhichHalfOfTargetIsClosest,
    getCurrentXPosition,
    getCurrentYPosition,
    moveDraggableToFingerPosition,
    removeDragoverStyles,
    resetDragged,
    getElementFromPosition
};
