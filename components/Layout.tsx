// REACT
import React from 'react';

// NEXT
import Head from 'next/head';

// PALETTE
import palette from 'palette.module.scss';

// TYPES
type props = {
    title: string;
    background?: string;
    style?: object;
    children?: React.ReactNode;
};

// STYLES
const styles = { root: { display: 'flex', minHeight: '100vh' } };

const Layout: React.FC<props> = ({ title, background, style, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Track your progress - Achieve your goals!"
                />
                <meta name="keywords" content="Planning Productivity" />
            </Head>
            <div style={{ ...styles.root, background, ...style }}>
                {children}
            </div>
        </>
    );
};

Layout.defaultProps = {
    background: palette.primary
};

export default Layout;
