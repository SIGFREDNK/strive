// REACT
import React, { useState, useEffect } from 'react';

// TYPES
import Selected from './interfaces/selected';

type Props = {
    title: string;
    selected: Selected;
    children?: React.ReactNode;
};

// UI COMPONENTS
import Setup from 'library/Setup';

// LAYOUT COMPONENTS
import AppNavigation from './components/AppNavigation';
import AppHeader from './components/AppHeader';

// CUSTOM HOOKS
import useLocalStorage from 'hooks/useLocalStorage';

// DEPENDENCIES
import { motion } from 'framer-motion';

// STYLES
import styles from './app.module.scss';

const App: React.FC<Props> = ({ title, selected, children }) => {
    const [open, setOpen] = useState<null | boolean>(null);

    useEffect(() => {
        const data = localStorage.getItem('nav-state');
        if (data) setOpen(JSON.parse(data));
        if (!data) setOpen(true);
    }, []);

    useEffect(() => {
        if (open !== null) localStorage.setItem('nav-state', JSON.stringify(open));
    }, [open]);

    useEffect(() => {
        const keyDown: (event: KeyboardEvent) => void = event => {
            if (event.key.toLowerCase() === 'c') {
                event.preventDefault();
                if (!event.shiftKey) return setOpen(true);
                setOpen(false);
            }
        };

        document.addEventListener('keydown', keyDown);

        return () => document.removeEventListener('keydown', keyDown);
    }, [open]); // eslint-disable-line

    if (open === null) return <></>;

    return (
        <Setup
            title={title}
            description="Track your progress - Achieve your goals!"
            keywords="Planning Productivity"
            className={styles.setup}
        >
            <AppHeader open={open} title={title} />
            <AppNavigation open={open} setOpen={(boolean: boolean) => setOpen(boolean)} selected={selected} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, type: 'linear' }}
                key={title}
            >
                <div className={`${styles.layout} ${open ? styles.open : styles.closed}`}>
                    <div className={styles.children}>{children}</div>
                </div>
            </motion.div>
        </Setup>
    );
};

export default App;
