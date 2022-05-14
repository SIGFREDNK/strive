// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/Teams.module.scss';

const Teams: NextPage = () => {
    return (
        <AppLayout title="Today" selected="TEAMS">
            <div>Teams</div>
        </AppLayout>
    );
};

export default Teams;
