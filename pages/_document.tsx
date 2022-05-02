import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="da">
            <Head>
                {/* DEFAULT SETUP */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-config" content="browserconfig.xml" />
                {/* ICONS */}
                {/* apple */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                {/* favicon */}
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                {/* safari */}
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#06323a"
                />
                {/* microsoft */}
                <meta name="msapplication-TileColor" content="#2d89ef" />
                {/* THEME */}
                <meta name="theme-color" content="#317EFB" />
                {/* APPLICATION NAME */}
                <meta name="application-name" content="Strive" />
                <meta name="apple-mobile-web-app-title" content="Strive" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
