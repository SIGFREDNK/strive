// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

// STYLES
import 'styles/Skills.module.scss';

const Skills: NextPage = () => {
    return (
        <AppLayout title="Today" selected="SKILLS">
            <div>Skills</div>
        </AppLayout>
    );
};

export default Skills;
