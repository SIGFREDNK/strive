// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/Habits.module.scss';

const Habits: NextPage = () => {
    return (
        <AppLayout title="Today" selected="HABITS">
            <div>Habits</div>
        </AppLayout>
    );
};

export default Habits;
