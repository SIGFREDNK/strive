// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => any;
};

// ICONS
import Icon from '@mui/icons-material/KeyboardArrowDownRounded';

// STYLES
import styles from './DropdownIcon.module.scss';

const DropdownIcon: React.FC<Props> = ({ className, style, onClick }) => {
    const [open, setOpen] = useState(false);

    return (
        <button
            onClick={() => {
                setOpen(open ? false : true);
                if (onClick) onClick();
            }}
            className={`${styles.dropdown} ${className} ${open ? styles.open : styles.closed}`}
            style={{ ...style }}
        >
            <Icon />
        </button>
    );
};

export default DropdownIcon;
