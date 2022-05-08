// REACT
import React from 'react';
import { useState } from 'react';

// TYPES
type props = {
    title: string;
    selected: number;
    children?: React.ReactNode;
};

// COMPONENTS
import Setup from 'components/Setup';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Breadcrumbs from 'components/Breadcrumbs';

// STYLES
import styles from './applayout.module.scss';

const AppLayout: React.FC<props> = ({ title, selected, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Setup title={title}>
            <Header selected={selected} toggleNavigation={navState => setOpen(navState)} title={title} open={open} />
            <Nav open={open} selected={selected} toggleNavigation={navState => setOpen(navState)} />
            <div className={`${styles.wrapper} ${open ? styles.push : ''}`}>
                <div className={styles.bar}>
                    <Breadcrumbs />

                    <div></div>
                </div>
                <div className={styles.children}>{children}</div>
            </div>
        </Setup>
    );
};

export default AppLayout;
