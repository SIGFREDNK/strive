// NEXT
import type { NextPage } from 'next';

// COMPONENTS
import AppLayout from 'layouts/AppLayout';

const Businesses: NextPage = () => {
    return (
        <div>
            <AppLayout title="Businesses" selected={0}></AppLayout>
        </div>
    );
};

export default Businesses;
