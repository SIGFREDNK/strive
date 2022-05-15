// REACT
import React, { useContext, useState, useEffect } from 'react';

// NEXT
import Link from 'next/link';

// STYLES
import styles from './Navitem.module.scss';

// TYPES
type Sublist = {
    name: string;
    path: string;
};

type DefaultProps = {
    className?: string;
    style?: React.CSSProperties;
    icon: React.ReactElement;
    title: string;
    path: string;
    selected?: boolean;
};

type DropdownProps =
    | { dropdown?: true; actionIcon?: never; sublist: Sublist[]; isOpen?: boolean }
    | { dropdown?: false; actionIcon?: React.ReactElement; sublist?: never; isOpen?: never };

type Props = DefaultProps & DropdownProps;

// COMPONENTS
import Dropdown from 'components/Dropdown';

// CONTEXT
import { OpenContext } from 'components/Navigation';

const NavItem: React.FC<Props> = ({
    className,
    style,
    icon,
    title,
    path,
    actionIcon,
    selected,
    dropdown,
    sublist,
    isOpen
}) => {
    const open = useContext(OpenContext);
    const [sublistOpen, setSublistOpen] = useState(isOpen);

    useEffect(() => {
        setSublistOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <li
                className={`${styles.item} ${className} ${selected ? styles.selected : ''} ${
                    open ? styles.open : styles.closed
                }`}
                style={style}
            >
                <div className={styles.wrapper}>
                    <Link href={path}>
                        <a className={styles.link}>
                            {icon}
                            <span className={styles.title}>{title}</span>
                        </a>
                    </Link>
                    {actionIcon && <div className={styles.action}>{actionIcon}</div>}
                    {dropdown && (
                        <div className={styles.action}>
                            <Dropdown onClick={() => setSublistOpen(sublistOpen ? false : true)} />
                        </div>
                    )}
                </div>
            </li>
            {dropdown && sublistOpen && (
                <ul className={styles.sublist}>
                    {sublist!.map((listitem, index) => (
                        <li key={index}>
                            <Link href={listitem.path}>
                                <a>
                                    {icon} {listitem.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

NavItem.defaultProps = {
    selected: false,
    dropdown: false
};

export default NavItem;
