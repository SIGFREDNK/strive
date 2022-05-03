import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* DEFAULT SETUP */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                {/* PROGRESSIVE WEB APP SETUP */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="mobile-web-app-capable" content="yes" />
                {/* FAVICON */}
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                {/* THEME */}
                <meta name="theme-color" content="#06323a" />
                {/* APPLICATION NAME */}
                <meta name="application-name" content="Strive" />
                {/* APPLE */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Strive" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                {/* SAFARI */}
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#06323a" />
                {/* MICROSOFT */}
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="msapplication-tap-highlight" content="no" />
                {/* TWITTER */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://www.mystrive.com" />
                <meta name="twitter:title" content="Strive" />
                <meta
                    name="twitter:description"
                    content="Track your progress - Achieve your goals"
                />
                <meta
                    name="twitter:image"
                    content="https://www.mystrive.com/icons/icon-512x512.png"
                />
                <meta name="twitter:creator" content="@SigfredFNK" />
                {/* OPEN GRAPH */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Strive" />
                <meta
                    property="og:description"
                    content="Track your progress - Achieve your goals"
                />
                <meta property="og:site_name" content="MyStrive" />
                <meta property="og:url" content="https://www.mystrive.com" />
                <meta
                    property="og:image"
                    content="https://www.mystrive.com/icons/apple-touch-icon.png"
                />
                <meta property="og:locale" content="en_GB" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
