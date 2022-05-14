// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    defaultValue: number;
};

// STYLES
import styles from './counter.module.scss';

const Counter: React.FC<Props> = ({ defaultValue }) => {
    const [count, setCount] = useState(defaultValue);
    return <>{count !== 0 && <span className={styles.counter}>{count}</span>}</>;
};

export default Counter;
