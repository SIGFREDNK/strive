// TYPES
import AppPropsWithLayout from 'interfaces/AppPropsWithLayout';

// GLOBAL STYLES
import 'styles/globals.scss';

// FRAMER MOTION
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);
    return getLayout(
        <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} />
        </AnimatePresence>
    );
}

export default MyApp;
