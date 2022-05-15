// NEXT
import NextPageWithLayout from './NextPageWIthLayout';
import type { AppProps } from 'next/app';

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default AppPropsWithLayout;
