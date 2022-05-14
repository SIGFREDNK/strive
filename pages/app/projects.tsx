// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/app/Projects.module.scss';

const Projects: NextPage = () => {
    return (
        <AppLayout title="Today" selected="PROJECTS">
            <div>Projects</div>
        </AppLayout>
    );
};

export default Projects;
