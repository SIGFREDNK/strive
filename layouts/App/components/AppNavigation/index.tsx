// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import Navigation from 'library/Navigation';
import Profile from 'library/Profile';
import NavList from 'library/NavList';
import NavItem from 'library/NavItem';
import Counter from 'library/Counter';

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

// TYPES
import Selected from '../../interfaces/selected';

type Props = {
    open: boolean;
    setOpen: (boolean: boolean) => any;
    selected: Selected;
};

// STYLES
import styles from './AppNavigation.module.scss';

const AppNavigation: React.FC<Props> = ({ open, setOpen, selected }) => {
    const [folders, openFolders] = useState(false);

    useEffect(() => {
        const keyDown: (event: KeyboardEvent) => void = event => {
            if (event.key.toLowerCase() === 'f') {
                event.preventDefault();
                if (!event.shiftKey) return openFolders(true);
                openFolders(false);
            }
        };

        document.addEventListener('keydown', keyDown);

        return () => document.removeEventListener('keydown', keyDown);
    }, [folders]);

    return (
        <Navigation open={open}>
            <Profile
                name="Sigfred Knudsen"
                tag="#SigfredFNK"
                onArrowClick={() => setOpen(open ? false : true)}
                onProfileClick={() => null}
            />
            <NavList title="Menu">
                <NavItem
                    icon={<HomeIcon />}
                    title="Home"
                    path="/app/home"
                    selected={selected === 'HOME' ? true : false}
                />
                <NavItem
                    icon={<MyDayIcon />}
                    title="Today"
                    path="/app/today"
                    actionIcon={<Counter defaultValue={1} />}
                    selected={selected === 'TODAY' ? true : false}
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
                    actionIcon={<Counter defaultValue={0} />}
                    selected={selected === 'FRIENDS' ? true : false}
                />
            </NavList>
            <NavList title="Categories">
                <NavItem
                    icon={<ProjectsIcon />}
                    title="Projects"
                    path="/app/projects"
                    dropdown={true}
                    selected={selected === 'PROJECTS' ? true : false}
                    sublist={[{ name: 'Strive', path: '/app/projects/my-projects/strive' }]}
                    isOpen={folders}
                />
                <NavItem
                    icon={<ListsIcon />}
                    title="Lists"
                    path="/app/lists"
                    dropdown={true}
                    selected={selected === 'LISTS' ? true : false}
                    sublist={[{ name: 'Domestics', path: '/app/projects/my-lists/domestics' }]}
                    isOpen={folders}
                />
                <NavItem
                    icon={<HabitsIcon />}
                    title="Habits"
                    path="/app/habits"
                    dropdown={true}
                    selected={selected === 'HABITS' ? true : false}
                    sublist={[{ name: 'Water', path: '/app/projects/my-habits/water' }]}
                    isOpen={folders}
                />
                <NavItem
                    icon={<SkillsIcon />}
                    title="Skills"
                    path="/app/skills"
                    dropdown={true}
                    selected={selected === 'SKILLS' ? true : false}
                    sublist={[{ name: 'Guitar', path: '/app/projects/my-skills/guitar' }]}
                    isOpen={folders}
                />
                <NavItem
                    icon={<TeamsIcon />}
                    title="Teams"
                    path="/app/teams"
                    dropdown={true}
                    selected={selected === 'TEAMS' ? true : false}
                    sublist={[{ name: 'Sima ApS', path: '/app/projects/my-teams/sima-aps' }]}
                    isOpen={folders}
                />
            </NavList>
        </Navigation>
    );
};

export default AppNavigation;
