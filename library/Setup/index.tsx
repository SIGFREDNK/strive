// REACT
import React from 'react';

// NEXT
import Head from 'next/head';

// TYPES
type Props = {
    title: string;
    description: string;
    keywords: string;
    style?: object;
    children?: React.ReactNode;
    className?: string;
};

// STYLES
import styles from './Setup.module.scss';

const Setup: React.FC<Props> = ({ title, description, keywords, style, children, className }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
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
