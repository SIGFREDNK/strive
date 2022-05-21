// REACT
import React, { createContext } from 'react';

// STYLES
import styles from './Navigation.module.scss';

// TYPES
type Props = {
    open: boolean;
    children: React.ReactNode;
};

// CONTEXT
export const OpenContext = createContext(true);

const Navigation: React.FC<Props> = ({ open, children }) => {
    return (
        <OpenContext.Provider value={open}>
            <nav className={`${styles.nav} ${open ? styles.open : styles.closed}`}>{children}</nav>
        </OpenContext.Provider>
    );
};

Navigation.defaultProps = {
    open: true
};

export default Navigation;
