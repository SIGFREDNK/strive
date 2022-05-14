// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/diary.module.scss';

const Diary: NextPage = () => {
    return (
        <AppLayout title="Today" selected="DIARY">
            <div>Diary</div>
        </AppLayout>
    );
};

export default Diary;
