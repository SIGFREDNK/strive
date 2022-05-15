// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Lists.module.scss';

const Lists: NextPageWithLayout = () => {
    return <div>Lists</div>;
};

Lists.getLayout = function getLayout(page) {
    return (
        <App title="Lists" selected="LISTS">
            {page}
        </App>
    );
};

export default Lists;
