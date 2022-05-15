// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Today.module.scss';

const Today: NextPageWithLayout = () => {
    return <div>Today</div>;
};

Today.getLayout = function getLayout(page) {
    return (
        <App title="Today" selected="TODAY">
            {page}
        </App>
    );
};

export default Today;
