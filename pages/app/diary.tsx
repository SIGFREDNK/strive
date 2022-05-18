// COMPONENTS
import App from 'layouts/App';
import Typography from 'components/Typography';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

// ICONS
import SaveIcon from '@mui/icons-material/Save';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';
import DateIcon from '@mui/icons-material/AccessTimeFilledRounded';

// STYLES
import styles from 'styles/Diary.module.scss';

const Diary: NextPageWithLayout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.diary}>
                <div>
                    <div className={styles.header}>
                        <span className={styles.date}>
                            <DateIcon />
                            01-01-2022
                        </span>
                        <span className={styles.weekday}>Friday</span>
                    </div>
                    <div>
                        <Input type="text" label="Title" placeholder="Title" name="title" className={styles.title} />
                    </div>
                    <div>
                        <Typography text="Text" variant="subtitle2" className={styles.textTitle} />
                        <Textarea className={styles.textarea} placeholder="How has your day been?" />
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button
                        variant="filled"
                        text="Save"
                        className={styles.button}
                        backgroundColor="#1c4b67"
                        color="#ffffff"
                        startIcon={<SaveIcon />}
                    />
                </div>
            </div>
        </div>
    );
};

Diary.getLayout = function getLayout(page) {
    return (
        <App title="Today" selected="DIARY">
            {page}
        </App>
    );
};

export default Diary;
