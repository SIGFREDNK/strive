// REACT
import { useState } from 'react';

// LAYOUT
import App from 'layouts/App';

// PAGE COMPONENTS
import Week from './components/Week';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// COMPONENTS
import ActionGroup from 'components/ActionGroup';

// STYLES
import styles from './Schedule.module.scss';

const Schedule: NextPageWithLayout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.widgets}>
                <div className={styles.format}>F</div>
                <ActionGroup className={styles.daypicker}>
                    <button onClick={() => null}>M</button>
                    <button onClick={() => null}>T</button>
                </ActionGroup>
                <div className={styles.filter}>F</div>
            </div>
            <Week className={styles.week} />
        </div>
    );
};

Schedule.getLayout = function getLayout(page) {
    return (
        <App title="Weekly Schedule" selected="SCHEDULE">
            {page}
        </App>
    );
};

export default Schedule;
