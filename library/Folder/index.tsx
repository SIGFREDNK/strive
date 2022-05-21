// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    title?: string;
};

// UI COMPONENTS
import DropdownIcon from 'library/DropdownIcon';

// STYLES
import styles from './Folder.module.scss';

const Folder: React.FC<Props> = ({ className, style, children, title }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${className} ${styles.folder}`} style={{ ...style }}>
            <h4 className={styles.title}>
                <span>{title}</span>
                <DropdownIcon onClick={() => setOpen(!open)} />
            </h4>
            <div style={{ display: open ? 'grid' : 'none' }}>{children}</div>
        </div>
    );
};

export default Folder;
