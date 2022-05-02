// NEXT
import type { AppProps } from 'next/app';

// GLOBAL STYLES
import 'globals.css';

// MATERIAL UI
import { ThemeProvider } from '@mui/material';

// THEME
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
