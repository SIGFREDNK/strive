// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// COMPONENTS
import Setup from 'library/Setup';
import Form from 'library/Form';
import Typography from 'library/Typography';

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
    className?: string;
    style?: React.CSSProperties;
};

// STYLES
import styles from './auth.module.scss';

const Auth: React.FC<Props> = ({
    onSubmit,
    children,
    primary,
    secondary,
    title,
    subtitle,
    pageTitle,
    secondaryPath,
    className,
    style
}) => {
    const submitOnEnter: (key: string) => void = key => {
        if (key === 'Enter') onSubmit();
    };

    return (
        <Setup
            title={pageTitle}
            description="Track your progress - Achieve your goals!"
            keywords="Planning Productivity"
            className={styles.page}
        >
            <Form onSubmit={onSubmit} className={`${styles.entry} ${className}`} style={{ ...style }}>
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
                    <input type="submit" value={primary} onKeyDown={event => submitOnEnter(event.key)} />
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

Auth.defaultProps = {
    className: ''
};

export default Auth;
