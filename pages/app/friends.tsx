// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Friends.module.scss';

const Friends: NextPageWithLayout = () => {
    return <div>Friends</div>;
};

Friends.getLayout = function getLayout(page) {
    return (
        <App title="Friends" selected="FRIENDS">
            {page}
        </App>
    );
};

export default Friends;
