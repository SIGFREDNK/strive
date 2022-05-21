// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Habits.module.scss';

const Habits: NextPageWithLayout = () => {
    return <div>Habits</div>;
};

Habits.getLayout = function getLayout(page) {
    return (
        <App title="Habits" selected="HABITS">
            {page}
        </App>
    );
};

export default Habits;
