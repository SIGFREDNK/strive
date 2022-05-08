// REACT
import React from 'react';

// NEXT
import Head from 'next/head';

// TYPES
type Props = {
    title: string;
    style?: object;
    background?: string;
    children?: React.ReactNode;
    classes?: string;
};

// STYLES
import styles from './Setup.module.scss';

const Setup: React.FC<Props> = ({ title, style, background, children, classes }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Track your progress - Achieve your goals!" />
                <meta name="keywords" content="Planning Productivity" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                />
            </Head>
            <main className={`${styles.root} ${classes}`} style={{ ...style, background }}>
                {children}
            </main>
        </>
    );
};

Setup.defaultProps = {
    background: '#f3f4f6',
    classes: ''
};

export default Setup;
