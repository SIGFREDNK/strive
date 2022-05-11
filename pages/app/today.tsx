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
                                    <Draggable className="swiper-disabled" id="1">
                                        <ListItem>
                                            <span>Today 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="2">
                                        <ListItem>
                                            <span>Today 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="3">
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
                                    <Draggable className="swiper-disabled" id="4">
                                        <ListItem>
                                            <span>Tomorrow 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="5">
                                        <ListItem>
                                            <span>Tomorrow 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="6">
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
                                    <Draggable className="swiper-disabled" id="7">
                                        <ListItem>
                                            <span>Habits 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="8">
                                        <ListItem>
                                            <span>Habits 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="9">
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
                                    <Draggable className="swiper-disabled" id="10">
                                        <ListItem>
                                            <span>Completed 1</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="11">
                                        <ListItem>
                                            <span>Completed 2</span>
                                        </ListItem>
                                    </Draggable>
                                    <Draggable className="swiper-disabled" id="12">
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
