// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    weekMode: boolean;
};

// ICONS
import SortIcon from '@mui/icons-material/CategoryRounded';

// UI COMPONENTS
import IconButton from 'library/IconButton';
import Flyout from 'library/Flyout';
import ButtonGroup from 'library/ButtonGroup';
import ButtonGroupElement from 'library/ButtonGroupElement';

// STYLES
import styles from './SortButton.module.scss';
import { setValues } from 'framer-motion/types/render/utils/setters';

const SortButton: React.FC<Props> = ({ className, style, weekMode }) => {
    const [menu, setMenu] = useState(false);
    const [value, setValue] = useState<number | null>(null);

    const handleSortChange: (index: number | null) => void = index => {
        setMenu(false);
        setValue(index);
    };

    return (
        <div className={styles.wrapper}>
            <IconButton
                className={`${styles.sort} ${value !== null ? styles.active : styles.inactive}`}
                icon={<SortIcon />}
                disabled={weekMode}
                onClick={() => setMenu(!menu)}
            />
            <Flyout className={`${styles.menu}`} toggle={menu}>
                <ButtonGroup className={styles.group} onChange={index => handleSortChange(index)}>
                    <ButtonGroupElement value="Alphabetically" index={0} className={styles.button} />
                    <ButtonGroupElement value="Deadline" index={1} className={styles.button} />
                </ButtonGroup>
            </Flyout>
        </div>
    );
};

SortButton.defaultProps = {
    className: ''
};

export default SortButton;
