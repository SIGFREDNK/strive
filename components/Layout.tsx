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
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="keywords" content="Planning Productivity" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB" />
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
