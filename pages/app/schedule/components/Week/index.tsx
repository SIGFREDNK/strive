// REACT
import React, { useRef, useState } from 'react';

// COMPONENTS
import Card from 'components/Card';
import Swiper from 'components/Swiper';
import Slide from 'components/Slide';
import DragContext from 'components/DragContext';
import Droppable from 'components/Droppable';
import Draggable from 'components/Draggable';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
};

// STYLES
import styles from './Week.module.scss';

const Week: React.FC<Props> = ({ className, style }) => {
    const slideCounter = useRef(3);
    const page = useRef<number>(0);
    const [currentPage, updateCurrentPage] = useState<number>(0);
    const swiperBoundingBox = useRef<DOMRect>();
    const counterRight = useRef<number>(0);
    const counterLeft = useRef<number>(0);

    function inRange(x: number, min: number, max: number) {
        return (x - min) * (x - max) <= 0;
    }

    const whileDragging: (xPosition: number, yPosition: number) => void = (xPosition, yPosition) => {
        const { right, left } = swiperBoundingBox.current!;
        if (inRange(right - xPosition, -40, 40)) counterRight.current++;
        if (inRange(left - xPosition, -40, 40)) counterLeft.current++;
        if (counterRight.current > 20) {
            counterRight.current = 10;
            console.log('RIGHT');
            updateCurrentPage(currentPage => currentPage + 1);
        }

        if (counterLeft.current > 20) {
            counterLeft.current = 10;
            updateCurrentPage(currentPage => currentPage - 1);
        }
    };

    const breakpoints = [
        { slidesOnDisplay: 2, width: 1200 },
        { slidesOnDisplay: 1, width: 1000 }
    ];

    const onSwipe: (pageNumber: number) => void = pageNumber => {
        page.current = pageNumber;
        console.log(pageNumber);
    };

    const onChange: (slideCount: number, boundingBox: DOMRect) => any = (slideCount, boundingBox) => {
        slideCounter.current = slideCount;
        swiperBoundingBox.current = boundingBox;
    };

    return (
        <DragContext
            whileDragging={whileDragging}
            dragEnd={() => {
                counterRight.current = 0;
                counterLeft.current = 0;
            }}
            className={`${className} ${styles.week}`}
            style={style}
        >
            <Swiper
                slidesOnDisplay={3}
                breakpoints={breakpoints}
                onSwipe={onSwipe}
                onChange={onChange}
                page={page.current}
                updatePage={currentPage}
            >
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Monday</h4>
                    <Droppable>
                        <Draggable>
                            <Card>1</Card>
                        </Draggable>
                        <Draggable>
                            <Card>2</Card>
                        </Draggable>
                        <Draggable>
                            <Card>3</Card>
                        </Draggable>
                    </Droppable>
                </Slide>
            </Swiper>
        </DragContext>
    );
};

export default Week;
