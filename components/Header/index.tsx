// REACT
import React from 'react';
import { useState } from 'react';

// NEXT
import Link from 'next/link';
import Image from 'next/image';

// STYLES
import styles from './Header.module.scss';

// MATERIAL UI
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// CONFIG
import { navItems } from 'config';

// TYPES
type props = {
    selected: number;
    toggleNavigation: (navState: boolean) => void;
    title: string;
    open: boolean;
};

const Header: React.FC<props> = ({ selected, toggleNavigation, title, open }) => {
    const [profile, setProfile] = useState(null);
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <button className={styles.hamburger} onClick={() => toggleNavigation(true)}>
                    <WidgetsIcon />
                </button>
                <h2 className={`${styles.title} ${open ? styles.push : ''}`}>{title}</h2>
            </div>
            <h2 className={`${styles.title2} ${open ? styles.push : ''}`}>{title}</h2>
            <div className={styles.other}>
                <div className={styles.container}>
                    <input type="text" className={styles.searchbar} placeholder="Search" />
                    <SearchRoundedIcon className={styles.search} />
                </div>
                <button className={styles.bell}>
                    <NotificationsIcon />
                </button>
                <button className={styles.cog}>
                    <SettingsIcon />
                </button>
                <div className={styles.profile}>
                    <Image src="/profile.png" layout="fill" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
