// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
    style?: object;
    className?: string;
};

// STYLES
import styles from './Swiperslide.module.scss';

const SwiperSlide: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div className={`${styles.slide} ${className}`} style={style}>
            {children}
        </div>
    );
};

export default SwiperSlide;
