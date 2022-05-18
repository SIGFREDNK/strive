// REACT
import { useState } from 'react';

// LAYOUT
import App from 'layouts/App';

// PAGE COMPONENTS
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';
import Week from './components/Week';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// COMPONENTS
import ActionGroup from 'components/ActionGroup';

// STYLES
import styles from './Schedule.module.scss';

const Schedule: NextPageWithLayout = () => {
    const [subpage, setSubpage] = useState(0);

    return (
        <div className={styles.page}>
            <div className={styles.widgets}>
                <div className={styles.format}>F</div>
                <ActionGroup className={styles.daypicker}>
                    <button className={subpage === 0 ? styles.selected : ''} onClick={() => setSubpage(0)}>
                        T
                    </button>
                    <button className={subpage === 1 ? styles.selected : ''} onClick={() => setSubpage(1)}>
                        C
                    </button>
                    <button className={subpage === 2 ? styles.selected : ''} onClick={() => setSubpage(2)}>
                        W
                    </button>
                </ActionGroup>
                <div className={styles.filter}>F</div>
            </div>
            {subpage === 0 && <TaskList className={styles.tasklist} />}
            {subpage === 1 && <Calendar className={styles.calendar} />}
            {subpage === 2 && <Week className={styles.week} />}
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
