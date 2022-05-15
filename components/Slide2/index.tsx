// REACT
import React from 'react';

// STYLES
import styles from './slide.module.scss';

// TYPES
type Props = {
    children: React.ReactNode;
};

const Slide: React.FC<Props> = ({ children }) => {
    return <div className={`${styles.slide}`}>{children}</div>;
};

export default Slide;
