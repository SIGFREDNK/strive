// REACT
import React, { useState } from 'react';

// TYPES
type Selected =
    | 'HOME'
    | 'MY_DAY'
    | 'SCHEDULE'
    | 'DIARY'
    | 'FRIENDS'
    | 'PROJECTS'
    | 'LISTS'
    | 'HABITS'
    | 'SKILLS'
    | 'TEAMS';

type Props = {
    title: string;
    selected: Selected;
    children?: React.ReactNode;
};

// COMPONENTS
import Setup from 'components/Setup';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Profile from 'components/Profile';
import NavList from 'components/NavList';
import NavItem from 'components/NavItem';
import Counter from 'components/Counter';

// ICONS
import HomeIcon from '@mui/icons-material/HomeRounded';
import MyDayIcon from '@mui/icons-material/WbSunnyRounded';
import ScheduleIcon from '@mui/icons-material/WatchLaterRounded';
import DiaryIcon from '@mui/icons-material/BookRounded';
import FriendsIcon from '@mui/icons-material/GroupRounded';

import ProjectsIcon from '@mui/icons-material/FolderRounded';
import ListsIcon from '@mui/icons-material/AssignmentRounded';
import HabitsIcon from '@mui/icons-material/AutoModeRounded';
import SkillsIcon from '@mui/icons-material/GradeRounded';
import TeamsIcon from '@mui/icons-material/WorkspacesRounded';

import DropDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// STYLES
import styles from './applayout.module.scss';

const AppLayout: React.FC<Props> = ({ title, selected, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Setup title={title}>
            <Header open={open} title={title} />
            <Navigation open={open}>
                <Profile name="Sigfred Knudsen" tag="#SigfredFNK" onClick={() => setOpen(open ? false : true)} />
                <NavList title="Menu">
                    <NavItem
                        icon={<HomeIcon />}
                        title="Home"
                        path="/app"
                        selected={selected === 'HOME' ? true : false}
                    />
                    <NavItem
                        icon={<MyDayIcon />}
                        title="My Day"
                        path="/app/my-day"
                        action={<Counter defaultValue={1} />}
                        selected={selected === 'MY_DAY' ? true : false}
                    />
                    <NavItem
                        icon={<ScheduleIcon />}
                        title="Schedule"
                        path="/app/schedule"
                        selected={selected === 'SCHEDULE' ? true : false}
                    />
                    <NavItem
                        icon={<DiaryIcon />}
                        title="Diary"
                        path="/app/diary"
                        selected={selected === 'DIARY' ? true : false}
                    />
                    <NavItem
                        icon={<FriendsIcon />}
                        title="Friends"
                        path="/app/friends"
                        action={<Counter defaultValue={0} />}
                        selected={selected === 'FRIENDS' ? true : false}
                    />
                </NavList>
                <NavList title="Categories">
                    <NavItem
                        icon={<ProjectsIcon />}
                        title="Projects"
                        path="/app/projects"
                        action={
                            <div className="dropdown">
                                <DropDownIcon />
                            </div>
                        }
                        selected={selected === 'PROJECTS' ? true : false}
                    />
                    <NavItem
                        icon={<ListsIcon />}
                        title="Lists"
                        path="/app/lists"
                        action={
                            <div className="dropdown">
                                <DropDownIcon />
                            </div>
                        }
                        selected={selected === 'LISTS' ? true : false}
                    />
                    <NavItem
                        icon={<HabitsIcon />}
                        title="Habits"
                        path="/app/habits"
                        action={
                            <div className="dropdown">
                                <DropDownIcon />
                            </div>
                        }
                        selected={selected === 'HABITS' ? true : false}
                    />
                    <NavItem
                        icon={<SkillsIcon />}
                        title="Skills"
                        path="/app/skills"
                        action={
                            <div className="dropdown">
                                <DropDownIcon />
                            </div>
                        }
                        selected={selected === 'SKILLS' ? true : false}
                    />
                    <NavItem
                        icon={<TeamsIcon />}
                        title="Teams"
                        path="/app/teams"
                        action={
                            <div className="dropdown">
                                <DropDownIcon />
                            </div>
                        }
                        selected={selected === 'TEAMS' ? true : false}
                    />
                </NavList>
            </Navigation>
            <div className={`${styles.layout} ${open ? styles.open : styles.closed}`}>
                <div className={styles.children}>{children}</div>
            </div>
        </Setup>
    );
};

export default AppLayout;
