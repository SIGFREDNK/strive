// INTERFACES
import NavItem from 'interfaces/NavItem';

// CONFIGURATIONS
export const navItems: NavItem[] = [
    { value: 'Home', path: '/app', fold: false },
    { value: 'Today', path: '/app/today', fold: false },
    { value: 'Week', path: '/app/week', fold: false },
    { value: 'Calendar', path: '/app/calendar', fold: false },
    { value: 'Lists', path: '/app/lists', fold: true },
    { value: 'Shared', path: '/app/shared', fold: true },
    { value: 'Projects', path: '/app/projects', fold: true },
    { value: 'Habits', path: '/app/habits', fold: true },
    { value: 'Skills', path: '/app/skills', fold: true },
    { value: 'Businesses', path: '/businesses', fold: true },
    { value: 'Diary', path: '/app/diary', fold: false },
    { value: 'Teams', path: '/app/teams', fold: true },
    { value: 'Friends', path: '/app/friends', fold: true }
];

export const applicationName = 'Strive';

export const applicationDescription = 'Track your progress - Achieve your goals';

export const dragAndDrop = { enableDrag: false, enableMouse: true, enableTouch: true };
