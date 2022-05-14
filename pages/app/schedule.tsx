// NEXT
import type { NextPage } from 'next';

// REACT
import { useRef, useState } from 'react';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';
import Card from 'components/Card';
import Swiper from 'components/Swiper';
import SwiperSlide from 'components/SwiperSlide';
import DragContext from 'components/DragContext';
import Droppable from 'components/Droppable';
import Draggable from 'components/Draggable';

// STYLES
import styles from 'styles/app/Schedule.module.scss';

const Schedule: NextPage = () => {
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
        if (inRange(right - xPosition, -20, 20)) counterRight.current++;
        if (inRange(left - xPosition, -20, 20)) counterLeft.current++;
        if (counterRight.current > 40) {
            counterRight.current = 10;
            console.log('RIGHT');
            updateCurrentPage(currentPage => currentPage + 1);
        }

        if (counterLeft.current > 40) {
            counterLeft.current = 10;
            updateCurrentPage(currentPage => currentPage - 1);
        }
    };

    const breakpoints = [
        { slidesOnDisplay: 2, width: 1100 },
        { slidesOnDisplay: 1, width: 900 }
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
        >
            <AppLayout title="Weekly Schedule" selected="SCHEDULE">
                <div className={styles.page}>
                    <Swiper
                        slidesOnDisplay={3}
                        breakpoints={breakpoints}
                        onSwipe={onSwipe}
                        onChange={onChange}
                        page={page.current}
                        updatePage={currentPage}
                    >
                        <SwiperSlide>
                            <h4 className={styles.title}>Monday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Monday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Monday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Monday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Tuesday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Tuesday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Tuesday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Tuesday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Wednesday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Wednesday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Wednesday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Wednesday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Thursday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Thursday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Thursday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Thursday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Friday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Friday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Friday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Friday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Saturday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Saturday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Saturday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Saturday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4 className={styles.title}>Sunday</h4>
                            <Droppable className={`swiper-disabled`}>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Sunday 1</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Sunday 2</span>
                                    </Card>
                                </Draggable>
                                <Draggable className="swiper-disabled">
                                    <Card>
                                        <span>Sunday 3</span>
                                    </Card>
                                </Draggable>
                            </Droppable>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </AppLayout>
        </DragContext>
    );
};

export default Schedule;
