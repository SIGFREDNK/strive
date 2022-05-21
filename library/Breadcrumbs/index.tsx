// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// ICONS
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// STYLES
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: React.FC = () => {
    return (
        <div className={styles.breadcrumbs}>
            <Link href="/app">
                <a className={styles.home}>
                    <HomeRoundedIcon />
                </a>
            </Link>
            <ChevronRightRoundedIcon className={styles.arrow} />
            <Link href="/app/schedule">
                <a>Schedule</a>
            </Link>
        </div>
    );
};

export default Breadcrumbs;
