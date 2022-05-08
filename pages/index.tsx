// NEXT
import type { NextPage } from 'next';
import Link from 'next/link';

// COMPONENTS
import Setup from 'components/Setup';
import Button from 'components/Button';
import Typography from 'components/Typography';

// STYLES
import styles from 'styles/index.module.scss';

const Home: NextPage = () => {
    return (
        <Setup title="Strive" background="#5d86ff" classes={styles.page}>
            <div className={styles.wrapper}>
                <Typography text="Strive" variant="title1" component="h1" />
                <Typography
                    text="Track your progress - Achieve your goals"
                    variant="subtitle1"
                    component="h4"
                />
                <div className={styles.container}>
                    <div className={styles.button}>
                        <Link href="/auth/login" passHref>
                            <a>
                                <Button text="Login" backgroundColor="#f4f2f4" color="#000000" />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.button}>
                        <Link href="/auth/signup" passHref>
                            <a>
                                <Button text="Signup" backgroundColor="#edd668" color="#000000" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Setup>
    );
};

export default Home;
