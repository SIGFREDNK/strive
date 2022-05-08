// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';
import ListItem from 'components/ListItem';
import Swiper from 'components/Swiper';
import SwiperSlide from 'components/SwiperSlide';
import Section from 'components/Section';

// STYLES
import styles from 'styles/today.module.scss';

const Schedule: NextPage = () => {
    return (
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
                            <ListItem>
                                <span>1</span>
                            </ListItem>
                            <ListItem>
                                <span>2</span>
                            </ListItem>
                            <ListItem>
                                <span>3</span>
                            </ListItem>
                        </Section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Section>
                            <h4 className={styles.title}>Tomorrow</h4>
                            <ListItem>
                                <span>1</span>
                            </ListItem>
                            <ListItem>
                                <span>2</span>
                            </ListItem>
                            <ListItem>
                                <span>3</span>
                            </ListItem>
                        </Section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Section>
                            <h4 className={styles.title}>Habits</h4>
                            <ListItem>
                                <span>1</span>
                            </ListItem>
                            <ListItem>
                                <span>2</span>
                            </ListItem>
                            <ListItem>
                                <span>3</span>
                            </ListItem>
                        </Section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Section>
                            <h4 className={styles.title}>Completed</h4>
                            <ListItem>
                                <span>1</span>
                            </ListItem>
                            <ListItem>
                                <span>2</span>
                            </ListItem>
                            <ListItem>
                                <span>3</span>
                            </ListItem>
                        </Section>
                    </SwiperSlide>
                </Swiper>
            </div>
        </AppLayout>
    );
};

export default Schedule;
