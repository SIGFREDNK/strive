// REACT
import React, { useRef, useState } from 'react';

// UI COMPONENTS
import Swiper from 'library/Swiper';
import Slide from 'library/Slide';
import DragContext from 'library/DragContext';
import Droppable from 'library/Droppable';
import Draggable from 'library/Draggable';

// COMPONENTS
import Task from 'components/Task';

// TYPES
interface Props {
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
        if (inRange(right - xPosition, -80, 80)) counterRight.current++;
        if (inRange(left - xPosition, -80, 80)) counterLeft.current++;
        if (counterRight.current > 20) {
            counterRight.current = 10;
            console.log('RIGHT');
            updateCurrentPage(currentPage => currentPage + 1);
        }

        if (counterLeft.current > 15) {
            counterLeft.current = 5;
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
                className={styles.swiper}
            >
                <Slide>
                    <h4>Monday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Tuesday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Wednesday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Thursday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Friday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Saturday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
                <Slide>
                    <h4>Sunday</h4>
                    <Droppable className="swiper-disabled">
                        <Draggable className="swiper-disabled">
                            <Task
                                type="TASK"
                                project="Strive"
                                list="Frontend"
                                deadline={new Date()}
                                name="Kalender"
                                description="Design brugerflade til kalender"
                                priority={true}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task type="HABIT" name="Læsning" streak={2} interval="Daily" description="Bliv klogere" />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="SKILL"
                                name="Programmering"
                                interval="Thursdays"
                                description="Lær at programmere"
                                session={4}
                            />
                        </Draggable>
                        <Draggable className="swiper-disabled">
                            <Task
                                type="LESSON"
                                name="Next JS API"
                                skill="Programmering"
                                lesson={2}
                                deadline={new Date()}
                                description="Målet er at være i stand til at lave Strive-appens backend"
                            />
                        </Draggable>
                    </Droppable>
                </Slide>
            </Swiper>
        </DragContext>
    );
};

export default Week;
