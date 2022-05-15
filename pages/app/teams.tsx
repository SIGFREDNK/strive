// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Teams.module.scss';

const Teams: NextPageWithLayout = () => {
    return <div>Teams</div>;
};

Teams.getLayout = function getLayout(page) {
    return (
        <App title="Teams" selected="TEAMS">
            {page}
        </App>
    );
};

export default Teams;
