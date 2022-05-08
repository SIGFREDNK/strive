// NEXT
import type { AppProps } from 'next/app';

// GLOBAL STYLES
import 'globals.scss';

// FRAMER MOTION
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, type: 'linear' }}
                key={router.route}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
