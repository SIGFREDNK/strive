// REACT
import React from 'react';

// NEXT
import Head from 'next/head';

// TYPES
type Props = {
    title: string;
    style?: object;
    children?: React.ReactNode;
    className?: string;
};

// STYLES
import styles from './Setup.module.scss';

const Setup: React.FC<Props> = ({ title, style, children, className }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Track your progress - Achieve your goals!" />
                <meta name="keywords" content="Planning Productivity" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
            </Head>
            <main className={`${styles.root} ${className}`} style={{ ...style }}>
                {children}
            </main>
        </>
    );
};

Setup.defaultProps = {
    className: ''
};

export default Setup;
