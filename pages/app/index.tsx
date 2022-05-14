// NEXT
import type { NextPage } from 'next';

// LAYOUT
import AppLayout from 'layouts/AppLayout';

// COMPONENTS
import Button from 'components/Button';

// ICONS
import ProjectsIcon from '@mui/icons-material/FolderRounded';
import ListsIcon from '@mui/icons-material/AssignmentRounded';
import HabitsIcon from '@mui/icons-material/AutoModeRounded';
import SkillsIcon from '@mui/icons-material/GradeRounded';
import TeamsIcon from '@mui/icons-material/WorkspacesRounded';

import ArrowIcon from '@mui/icons-material/ArrowForwardIosRounded';

// STYLES
import styles from 'styles/app/home.module.scss';

const Home: NextPage = () => {
    return (
        <AppLayout title="Home" selected="HOME">
            <div className={styles.page}>
                <Button
                    text="Projects"
                    startIcon={<ProjectsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/projects"
                    className={styles.option}
                />
                <Button
                    text="Lists"
                    startIcon={<ListsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/projects"
                    className={styles.option}
                />
                <Button
                    text="Habits"
                    startIcon={<HabitsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/projects"
                    className={styles.option}
                />
                <Button
                    text="Skills"
                    startIcon={<SkillsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/projects"
                    className={styles.option}
                />
                <Button
                    text="Teams"
                    startIcon={<TeamsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/projects"
                    className={styles.option}
                />
            </div>
        </AppLayout>
    );
};

export default Home;
