// REACT
import React, { useState } from 'react';

// STYLES
import styles from './Header.module.scss';

// MATERIAL UI
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// TYPES
type Props = {
    open: boolean;
    title: string;
};

const Header: React.FC<Props> = ({ open, title }) => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch: () => void = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className={`${styles.header} ${open ? styles.open : styles.closed}`}>
            <div className={styles.widget}>
                <button onClick={handleSearch}>
                    <SearchRoundedIcon className={styles.search} />
                </button>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cta}>
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
