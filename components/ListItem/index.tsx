// REACT
import React from 'react';

// TYPES
type Props = {
    children: React.ReactNode;
};

// STYLES
import styles from './listitem.module.scss';

const ListItem: React.FC<Props> = ({ children }) => {
    return <div className={styles.item}>{children}</div>;
};

export default ListItem;
