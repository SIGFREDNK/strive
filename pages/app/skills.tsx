// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import 'styles/Skills.module.scss';

const Skills: NextPageWithLayout = () => {
    return <div>Skills</div>;
};

Skills.getLayout = function getLayout(page) {
    return (
        <App title="Skills" selected="SKILLS">
            {page}
        </App>
    );
};

export default Skills;
