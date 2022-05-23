// REACT
import { useState } from 'react';

// LAYOUT
import App from 'layouts/App';

// PAGE COMPONENTS
import TodoList from 'components/TodoList';
import Week from 'components/Week';
import CalendarButton from 'components/CalendarButton';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// UI COMPONENTS
import IconButton from 'library/IconButton';

// ICONS
import CompletedIcon from '@mui/icons-material/LibraryAddCheckRounded';
import WeekIcon from '@mui/icons-material/ViewWeekRounded';
import StarIcon from '@mui/icons-material/StarRounded';

// INTERFACES
import Todo from 'interfaces/Todo';

// DATABASE
import data from 'database/tasks';

// STYLES
import styles from './Schedule.module.scss';
import FilterButton from 'components/FilterButton';
import SortButton from 'components/SortButton';

const Schedule: NextPageWithLayout = () => {
    const [tasks, setTasks] = useState<Todo[]>(data);
    const [weekMode, setWeekMode] = useState(false);
    const [disableCalendar, setDisableCalendar] = useState(false);
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);
    const [onlyPriority, setOnlyPriority] = useState(false);

    const update = () => {};

    return (
        <div className={styles.page}>
            <div className={styles.widgets}>
                <div className={styles.controls}>
                    <IconButton
                        className={`${styles.week} ${weekMode ? styles.active : styles.inactive}`}
                        icon={<WeekIcon />}
                        onClick={() => setWeekMode(weekMode ? false : true)}
                        disabled={disableCalendar}
                    />
                    <CalendarButton disabled={weekMode} />
                </div>
                <div className={styles.controls}>
                    <IconButton
                        className={`${styles.prioritized} ${onlyPriority ? styles.active : styles.inactive}`}
                        icon={<StarIcon />}
                    />
                    <IconButton
                        className={`${styles.completed} ${onlyPriority ? styles.active : styles.inactive}`}
                        icon={<CompletedIcon />}
                        disabled={weekMode}
                        onChange={state => setDisableCalendar(state)}
                    />
                    <SortButton weekMode={weekMode} />
                    <FilterButton weekMode={weekMode} />
                </div>
            </div>
            {!weekMode && <TodoList className={styles.tasklist} tasks={tasks} update={update} />}
            {weekMode && <Week className={styles.week} />}
        </div>
    );
};

Schedule.getLayout = function getLayout(page) {
    return (
        <App title="Schedule" selected="SCHEDULE">
            {page}
        </App>
    );
};

export default Schedule;
