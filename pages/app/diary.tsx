// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Diary.module.scss';

const Diary: NextPageWithLayout = () => {
    return <div>Diary</div>;
};

Diary.getLayout = function getLayout(page) {
    return (
        <App title="Today" selected="DIARY">
            {page}
        </App>
    );
};

export default Diary;
