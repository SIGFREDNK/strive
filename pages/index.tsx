// NEXT
import type { NextPage } from 'next';
import Link from 'next/link';

// COMPONENTS
import Setup from 'components/Setup';
import Button from 'components/Button';
import Typography from 'components/Typography';

// STYLES
import styles from 'styles/Landing.module.scss';

const Index: NextPage = () => {
    return (
        <Setup title="Strive" background="#5d86ff" classes={styles.page}>
            <div className={styles.wrapper}>
                <Typography text="Strive" variant="title1" component="h1" />
                <Typography text="Track your progress - Achieve your goals" variant="subtitle1" component="h4" />
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
