// COMPONENTS
import App from 'layouts/App';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import './Projects.module.scss';

const Projects: NextPageWithLayout = () => {
    return <div>Projects</div>;
};

Projects.getLayout = function getLayout(page) {
    return (
        <App title="Projects" selected="PROJECTS">
            {page}
        </App>
    );
};

export default Projects;
