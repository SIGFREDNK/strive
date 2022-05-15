// REACT
import React, { useContext, useEffect } from 'react';

// STYLES
import styles from './Navlist.module.scss';

// TYPES
type Props = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    title: string;
};

// CONTEXT
import { OpenContext } from 'components/Navigation';

const NavList: React.FC<Props> = ({ children, className, title, style }) => {
    const open = useContext(OpenContext);

    return (
        <div className={`${styles.list} ${className} ${open ? styles.open : styles.closed}`} style={style}>
            <h4 className={styles.subtitle}>{title}</h4>
            <ul className={styles.section}>{children}</ul>
        </div>
    );
};

export default NavList;
