// REACT
import React, { createContext, useEffect, useState } from 'react';

// STYLES
import styles from './navigation.module.scss';

// TYPES
type Props = {
    open: boolean;
    children: React.ReactNode;
};

// CONTEXT
export const OpenContext = createContext(true);

const Navigation: React.FC<Props> = ({ open, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <OpenContext.Provider value={isOpen}>
            <nav className={`${styles.nav} ${open ? styles.open : styles.closed} ${open ? styles.off : styles.on}`}>
                {children}
            </nav>
        </OpenContext.Provider>
    );
};

Navigation.defaultProps = {
    open: true
};

export default Navigation;
