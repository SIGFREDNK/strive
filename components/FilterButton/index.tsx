// REACT
import React, { useState } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    weekMode: boolean;
};

// UI COMPONENTS
import IconButton from 'library/IconButton';
import Flyout from 'library/Flyout';
import Folder from 'library/Folder';
import Checkbox from 'library/Checkbox';

// ICONS
import FilterIcon from '@mui/icons-material/FilterAltRounded';

// STYLES
import styles from './FilterButton.module.scss';

const FilterButton: React.FC<Props> = ({ className, style, weekMode }) => {
    const [menu, setMenu] = useState(false);
    const [values, setValues] = useState([true, true, true, true, true, true, true, true, true, true, true]);
    const [active, setActive] = useState(false);

    const handleChange: (checked: boolean, index: number) => void = (checked, index) => {
        let currentValues = values;
        currentValues[index] = checked;
        setValues(currentValues);
        setActive(currentValues.filter(value => value === false).length > 0);
    };

    return (
        <div className={styles.wrapper}>
            <IconButton
                className={`${styles.filter} ${active ? styles.active : styles.inactive}`}
                icon={<FilterIcon />}
                disabled={weekMode}
                onClick={() => setMenu(!menu)}
            />
            <Flyout className={`${styles.menu}`} toggle={menu}>
                <Folder title="Category">
                    <Checkbox title="Tasks" checked={values[0]} onChange={checked => handleChange(checked, 0)} />
                    <Checkbox title="Habits" checked={values[1]} onChange={checked => handleChange(checked, 1)} />
                    <Checkbox title="Skills" checked={values[2]} onChange={checked => handleChange(checked, 2)} />
                    <Checkbox title="Lesson" checked={values[3]} onChange={checked => handleChange(checked, 3)} />
                </Folder>
                <Folder title="Deadline">
                    <Checkbox title="Expired" checked={values[4]} onChange={checked => handleChange(checked, 4)} />
                    <Checkbox title="Today" checked={values[5]} onChange={checked => handleChange(checked, 5)} />
                    <Checkbox title="Tomorrow" checked={values[6]} onChange={checked => handleChange(checked, 6)} />
                    <Checkbox title="This Week" checked={values[7]} onChange={checked => handleChange(checked, 7)} />
                    <Checkbox title="This Month" checked={values[8]} onChange={checked => handleChange(checked, 8)} />
                    <Checkbox title="Later" checked={values[9]} onChange={checked => handleChange(checked, 9)} />
                </Folder>
            </Flyout>
        </div>
    );
};

FilterButton.defaultProps = {
    className: ''
};

export default FilterButton;
