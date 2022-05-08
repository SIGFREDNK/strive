// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// COMPONENTS
import Setup from 'components/Setup';
import Form from 'components/Form';
import Typography from 'components/Typography';

// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// TYPES
type Props = {
    onSubmit: () => void;
    children: React.ReactNode;
    primary: string;
    secondary: string;
    title: string;
    subtitle: string;
    pageTitle: string;
    secondaryPath: string;
};

// STYLES
import styles from './authlayout.module.scss';

const AuthLayout: React.FC<Props> = ({
    onSubmit,
    children,
    primary,
    secondary,
    title,
    subtitle,
    pageTitle,
    secondaryPath
}) => {
    const submitOnEnter: (key: string) => void = key => {
        if (key === 'Enter') onSubmit();
    };

    return (
        <Setup title={pageTitle} classes={styles.page}>
            <Form onSubmit={onSubmit} classes={`${styles.entry} ${styles.login}`}>
                <div className={styles.back}>
                    <Link href="/" passHref>
                        <div>
                            <ArrowBackIcon />
                            <span>Back</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.title}>
                    <Typography variant="title2" text={title} color="#000000" />
                    <Typography variant="body1" text={subtitle} color="#000000" />
                </div>
                <span className={styles.error}></span>
                <div className={styles.inputs}>
                    {children}
                    <input
                        type="submit"
                        value={primary}
                        onKeyDown={event => submitOnEnter(event.key)}
                    />
                    <span className={styles.or}>Do you already have an account?</span>
                    <div className={styles.secondary}>
                        <Link href={secondaryPath}>{secondary}</Link>
                    </div>
                    <div className={styles.conditions}>
                        <Link href="/terms-conditions">See terms and conditions</Link>
                    </div>
                </div>
            </Form>
        </Setup>
    );
};

export default AuthLayout;
