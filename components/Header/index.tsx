// NEXT JS
import { useRouter } from 'next/router';

// REACT
import React from 'react';

// STYLES
import styles from './header.module.scss';

// MATERIAL UI
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import BackIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// TYPES
type Props = {
    open: boolean;
    title: string;
};

const Header: React.FC<Props> = ({ open, title }) => {
    const router = useRouter();

    return (
        <header className={`${styles.header} ${open ? styles.open : styles.closed}`}>
            <div className={styles.widget}>
                <button
                    onClick={event => {
                        event.preventDefault();
                        router.back();
                    }}
                >
                    <BackIcon />
                </button>
                <SettingsIcon className={styles.cog} />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cta}>
                <SearchRoundedIcon />
                <div className={styles.bell}>
                    <NotificationsIcon />
                    <span className={styles.counter}>0</span>
                </div>
                <SettingsIcon className={styles.cog} />
            </div>
        </header>
    );
};

export default Header;
