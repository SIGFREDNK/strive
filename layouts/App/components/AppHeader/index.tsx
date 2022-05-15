// REACT
import React from 'react';

// TYPES
type Props = {
    open: boolean;
    title: string;
};

// COMPONENTS
import Header from 'components/Header';

// STYLES
import styles from './AppHeader.module.scss';

const AppHeader: React.FC<Props> = ({ open, title }) => {
    return <Header open={open} title={title} />;
};

export default AppHeader;
