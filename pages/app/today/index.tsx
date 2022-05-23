// REACT
import { useState } from 'react';

// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// PAGE COMPONENTS
import TaskList from 'components/TodoList';

// DATABASE
import data from 'database/tasks';

// STYLES
import styles from './Today.module.scss';
import Typography from 'library/Typography';

const Today: NextPageWithLayout = () => {
    const [tasks, setTasks] = useState(data.filter(task => task.type === 'TASK'));
    const [habits, setHabits] = useState(data.filter(habit => habit.type === 'HABIT'));
    const [skills, setSkills] = useState(data.filter(skill => skill.type === 'SKILL'));
    const [lessons, setLessons] = useState(data.filter(lesson => lesson.type === 'LESSON'));

    const update: (type: 'TASK' | 'HABIT' | 'SKILL' | 'LESSON', id: string) => void = (type, id) => {
        if (type === 'TASK') setTasks(tasks.filter(task => task.name !== id));
        if (type === 'HABIT') setHabits(tasks.filter(habit => habit.name !== id));
        if (type === 'SKILL') setSkills(tasks.filter(skill => skill.name !== id));
        if (type === 'LESSON') setLessons(tasks.filter(lesson => lesson.name !== id));
    };

    return (
        <div className={styles.page}>
            <Typography text="Tasks" variant="subtitle1" className={styles.title} />
            <TaskList className={styles.tasklist} tasks={tasks} update={update} />
            <Typography text="Habits" variant="subtitle1" className={styles.title} />
            <TaskList className={styles.tasklist} tasks={habits} update={update} />
            <Typography text="Skills" variant="subtitle1" className={styles.title} />
            <TaskList className={styles.tasklist} tasks={skills} update={update} />
            <Typography text="Lessons" variant="subtitle1" className={styles.title} />
            <TaskList className={styles.tasklist} tasks={lessons} update={update} />
        </div>
    );
};

Today.getLayout = function getLayout(page) {
    return (
        <App title="Today" selected="TODAY">
            {page}
        </App>
    );
};

export default Today;
