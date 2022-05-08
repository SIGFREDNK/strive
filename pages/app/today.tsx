// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';
import ListItem from 'components/ListItem';
import Swiper from 'components/Swiper';
import SwiperSlide from 'components/SwiperSlide';
import Section from 'components/Section';
import DragContext from 'components/DragContext';
import Droppable from 'components/Droppable';
import Draggable from 'components/Draggable/draggable';

// STYLES
import styles from 'styles/today.module.scss';

const Schedule: NextPage = () => {
    return (
        <DragContext>
            <AppLayout title="Today" selected={0}>
                <div className={styles.page}>
                    <Swiper
                        slidesOnDisplay={3}
                        breakpoints={[
                            { slidesOnDisplay: 2, width: 1300 },
                            { slidesOnDisplay: 1, width: 1000 }
                        ]}
                    >
                        <SwiperSlide>
                            <Section>
                                <h4 className={styles.title}>Today</h4>
                                <Droppable className={`${styles.droppable} swiper-disabled`}>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Today 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Today 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Today 3</span>
                                        </ListItem>
                                    </Draggable>
                                </Droppable>
                            </Section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Section>
                                <h4 className={styles.title}>Tomorrow</h4>
                                <Droppable className={`${styles.droppable} swiper-disabled`}>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Tomorrow 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Tomorrow 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Tomorrow 3</span>
                                        </ListItem>
                                    </Draggable>
                                </Droppable>
                            </Section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Section>
                                <h4 className={styles.title}>Habits</h4>
                                <Droppable className={`${styles.droppable} swiper-disabled`}>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Habits 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Habits 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Habits 3</span>
                                        </ListItem>
                                    </Draggable>
                                </Droppable>
                            </Section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Section>
                                <h4 className={styles.title}>Completed</h4>
                                <Droppable className={`${styles.droppable} swiper-disabled`}>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Completed 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Completed 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled">
                                        <ListItem>
                                            <span>Completed 3</span>
                                        </ListItem>
                                    </Draggable>
                                </Droppable>
                            </Section>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </AppLayout>
        </DragContext>
    );
};

export default Schedule;
