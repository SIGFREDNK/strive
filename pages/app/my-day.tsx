// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/my-day.module.scss';

const MyDay: NextPage = () => {
    return (
        <AppLayout title="Today" selected="MY_DAY">
            <div>MyDay</div>
        </AppLayout>
    );
};

export default MyDay;
