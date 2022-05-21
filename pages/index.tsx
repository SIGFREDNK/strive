// NEXT
import type { NextPage } from 'next';

// UI COMPONENTS
import Setup from 'library/Setup';
import Button from 'library/Button';
import Typography from 'library/Typography';

// STYLES
import styles from 'styles/Index.module.scss';

const Index: NextPage = () => {
    return (
        <Setup
            title="Strive"
            description="Track your progress - Achieve your goals!"
            keywords="Planning Productivity"
            className={styles.page}
        >
            <div className={styles.wrapper}>
                <Typography text="Strive" variant="title1" component="h1" color="#fff" />
                <Typography
                    text="Track your progress - Achieve your goals"
                    variant="subtitle1"
                    component="h4"
                    color="#fff"
                />
                <div className={styles.container}>
                    <div className={styles.button}>
                        <Button
                            text="Login"
                            backgroundColor="#f4f2f4"
                            color="#000000"
                            size="large"
                            style={{ width: '80vw', maxWidth: '20rem' }}
                            type="link"
                            path="/auth/login"
                        />
                    </div>
                    <div className={styles.button}>
                        <Button
                            text="Signup"
                            backgroundColor="#edd668"
                            color="#000000"
                            size="large"
                            style={{ width: '80vw', maxWidth: '20rem' }}
                            type="link"
                            path="/auth/signup"
                        />
                    </div>
                </div>
            </div>
        </Setup>
    );
};

export default Index;
