// REACT
import { useState } from 'react';

// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// PAGE COMPONENTS
import TaskList from 'components/TaskList';

// DATABASE
import data from 'database/tasks';

// STYLES
import styles from './Today.module.scss';

const Today: NextPageWithLayout = () => {
    const [tasks, setTasks] = useState(data);

    return <TaskList tasks={tasks} />;
};

Today.getLayout = function getLayout(page) {
    return (
        <App title="Today" selected="TODAY">
            {page}
        </App>
    );
};

export default Today;
