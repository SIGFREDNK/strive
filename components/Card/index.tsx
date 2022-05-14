// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
};

// STYLES
import styles from './Card.module.scss';

const Card: React.FC<Props> = ({ children }) => {
    return <div className={styles.item}>{children}</div>;
};

export default Card;
