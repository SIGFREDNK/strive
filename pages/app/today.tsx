// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/Today.module.scss';

const Today: NextPage = () => {
    return (
        <AppLayout title="Today" selected="TODAY">
            <div>Today</div>
        </AppLayout>
    );
};

export default Today;
