// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// COMPONENTS
import Logo from 'components/Logo';

// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
// import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayRounded';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesRounded';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
// import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

// CONFIG
import { navItems } from 'config';

// STYLES
import styles from './Nav.module.scss';

// TYPES
type props = {
    open: boolean;
    selected: number;
    toggleNavigation: (navState: boolean) => void;
};

const Nav: React.FC<props> = ({ open, selected, toggleNavigation }) => {
    const icons = [
        <HomeOutlinedIcon key={0} className={styles.icon} />,
        <WbSunnyOutlinedIcon key={1} className={styles.icon} />,
        <DateRangeOutlinedIcon key={2} className={styles.icon} />,
        <TodayOutlinedIcon key={3} className={styles.icon} />,
        <AssignmentOutlinedIcon key={4} className={styles.icon} />,
        <WorkspacesOutlinedIcon key={5} className={styles.icon} />,
        <FolderOutlinedIcon key={6} className={styles.icon} />,
        <AutoModeOutlinedIcon key={7} className={styles.icon} />,
        <GradeOutlinedIcon key={8} className={styles.icon} />,
        <StoreOutlinedIcon key={9} className={styles.icon} />,
        <BookOutlinedIcon key={10} className={styles.icon} />,
        <GroupsOutlinedIcon key={11} className={styles.icon} />,
        <SwitchAccountRoundedIcon key={12} className={styles.icon} />
    ];
    return (
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <div className={styles.header}>
                <Logo />
                <button onClick={() => toggleNavigation(false)}>
                    <ArrowBackIcon className={`${styles.arrow} ${open ? styles.rotate : ''}`} />
                </button>
            </div>
            <div className={styles.navigation}>
                {navItems.map((navItem, index) => (
                    <Link key={index} href={navItem.path} passHref>
                        <a className={`${styles.link} ${selected === index ? styles.selected : ''}`}>
                            {icons[index]}
                            {navItem.value}
                            {navItem.fold && <KeyboardArrowDownOutlinedIcon className={styles.fold} />}
                            <AddOutlinedIcon className={`${navItem.fold ? '' : styles.margin} ${styles.add}`} />
                        </a>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
