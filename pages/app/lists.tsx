// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/lists.module.scss';

const Lists: NextPage = () => {
    return (
        <AppLayout title="Today" selected="LISTS">
            <div>Lists</div>
        </AppLayout>
    );
};

export default Lists;