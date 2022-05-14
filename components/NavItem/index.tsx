// REACT
import React, { useContext } from 'react';

// NEXT
import Link from 'next/link';

// STYLES
import styles from './Navitem.module.scss';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    icon: React.ReactElement;
    title: string;
    path: string;
    action?: React.ReactElement;
    selected?: boolean;
};

// CONTEXT
import { OpenContext } from 'components/Navigation';

const NavItem: React.FC<Props> = ({ className, style, icon, title, path, action, selected }) => {
    const open = useContext(OpenContext);

    return (
        <li
            className={`${styles.item} ${className} ${selected ? styles.selected : ''} ${
                open ? styles.open : styles.closed
            }`}
            style={style}
        >
            <Link href={path}>
                <a className={styles.link}>
                    {icon}
                    <span className={styles.title}>{title}</span>
                </a>
            </Link>
            {action && <div className={styles.action}>{action}</div>}
        </li>
    );
};

NavItem.defaultProps = {
    selected: false
};

export default NavItem;
