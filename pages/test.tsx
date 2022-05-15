// REACT
import React from 'react';

import Swiper from 'components/Swiper';
import SwiperSlide from 'components/SwiperSlide';

const Test = () => {
    return (
        <div style={{ width: '100%', height: '8rem', backgroundColor: 'orange' }}>
            <Swiper
                slidesOnDisplay={3}
                breakpoints={[
                    { width: 1000, slidesOnDisplay: 2 },
                    { width: 800, slidesOnDisplay: 1 }
                ]}
                page={0}
            >
                <SwiperSlide style={{ backgroundColor: 'red' }}>
                    <div>1</div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'green' }}>
                    <div>2</div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'blue' }}>
                    <div>3</div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'purple' }}>
                    <div>4</div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'yellow' }}>
                    <div>5</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Test;
