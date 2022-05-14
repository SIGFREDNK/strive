// REACT
import React, { useRef, useEffect, useState, useContext } from 'react';

// TYPES
type Props = {
    name: string;
    tag: string;
    onClick?: () => void;
};

// ICONS
import ArrowIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// CONTEXT
import { OpenContext } from 'components/Navigation';

// STYLES
import styles from './Profile.module.scss';

const Profile: React.FC<Props> = ({ name, tag, onClick }) => {
    const icon = useRef<HTMLDivElement>(null);
    const [initials, setInitials] = useState('');

    const open = useContext(OpenContext);

    useEffect(() => {
        const initials = name
            .split(' ')
            .map(word => word[0])
            .join('');

        setInitials(initials);

        const red = Math.pow(initials.charCodeAt(0), 7) % 200;
        const green = Math.pow(initials.charCodeAt(1) || initials.charCodeAt(0), 7) % 200;
        const blue = (red + green) % 200;

        icon.current!.style.background = `rgb(${red}, ${green}, ${blue})`;
    }, [name]); // eslint-disable-line

    return (
        <div className={`${styles.profile} ${open ? styles.open : styles.closed}`}>
            <div className={styles.icon} ref={icon} data-initials={initials}></div>
            <div className={styles.info}>
                <h4 className={styles.name}>{name}</h4>
                <span className={styles.tag}>{tag}</span>
            </div>
            <div className={styles.arrow} onClick={onClick}>
                <ArrowIcon />
            </div>
        </div>
    );
};

Profile.defaultProps = {
    onClick: () => null
};

export default Profile;
