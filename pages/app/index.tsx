// LAYOUT
import App from 'layouts/App';

// COMPONENTS
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import Stat from 'components/Stat';

// ICONS
import ProjectsIcon from '@mui/icons-material/FolderRounded';
import ListsIcon from '@mui/icons-material/AssignmentRounded';
import HabitsIcon from '@mui/icons-material/AutoModeRounded';
import SkillsIcon from '@mui/icons-material/GradeRounded';
import TeamsIcon from '@mui/icons-material/WorkspacesRounded';
import StatsIcon from '@mui/icons-material/EqualizerRounded';

import DiaryIcon from '@mui/icons-material/BookRounded';
import TaskIcon from '@mui/icons-material/AssignmentTurnedInRounded';

import ArrowIcon from '@mui/icons-material/ArrowForwardIosRounded';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import styles from 'styles/Home.module.scss';

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.options}>
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
                <Button
                    text="Stats"
                    startIcon={<StatsIcon />}
                    endIcon={<ArrowIcon className={styles.end} />}
                    size="medium"
                    type="link"
                    path="/app/stats"
                    className={styles.option}
                />
            </div>
            <Carousel className={styles.carousel}>
                <Stat
                    title="Tasks Completed"
                    value={4}
                    actionType="link"
                    path="/app/stats/tasks"
                    banner={true}
                    actionTitle="View all"
                    icon={<TaskIcon />}
                    growth="+8"
                    className={styles.stat}
                />
                <Stat
                    title="Projects Completed"
                    value={4}
                    actionType="link"
                    path="/app/stats/tasks"
                    banner={true}
                    actionTitle="View all"
                    icon={<ProjectsIcon />}
                    growth="+8"
                    className={styles.stat}
                />
                <Stat
                    title="Habits Completed"
                    value={4}
                    actionType="link"
                    path="/app/stats/tasks"
                    banner={true}
                    actionTitle="View all"
                    icon={<HabitsIcon />}
                    growth="+8"
                    className={styles.stat}
                />
                <Stat
                    title="Diary Entries"
                    value={4}
                    actionType="link"
                    path="/app/stats/tasks"
                    banner={true}
                    actionTitle="View all"
                    icon={<DiaryIcon />}
                    growth="+8"
                    className={styles.stat}
                />
                <Stat
                    title="Skills Trained"
                    value={4}
                    actionType="link"
                    path="/app/stats/tasks"
                    banner={true}
                    actionTitle="View all"
                    icon={<SkillsIcon />}
                    growth="+8"
                    className={styles.stat}
                />
            </Carousel>
        </div>
    );
};

Home.getLayout = function getLayout(page) {
    return (
        <App title="Home" selected="HOME">
            {page}
        </App>
    );
};

export default Home;
