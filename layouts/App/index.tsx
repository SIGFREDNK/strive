// REACT
import React, { useState, useEffect } from 'react';

// NEXT
import { useRouter } from 'next/router';

// TYPES
import Selected from './interfaces/selected';

type Props = {
    title: string;
    selected: Selected;
    children?: React.ReactNode;
};

// COMPONENTS
import Setup from 'components/Setup';

// LAYOUT COMPONENTS
import AppNavigation from './components/AppNavigation';
import AppHeader from './components/AppHeader';

// FRAMER MOTION
import { motion, AnimatePresence } from 'framer-motion';

// STYLES
import styles from './app.module.scss';

const App: React.FC<Props> = ({ title, selected, children }) => {
    const [open, setOpen] = useState(true);

    const router = useRouter();

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
    }, [open]);

    return (
        <Setup title={title} className={styles.setup}>
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
