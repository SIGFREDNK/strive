// NEXT
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

// TYPES
type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export default NextPageWithLayout;
