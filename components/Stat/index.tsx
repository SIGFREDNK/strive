// REACT
import React from 'react';

// NEXT
import Link from 'next/link';

// TYPE
type DefaultProps = {
    className?: string;
    style?: React.CSSProperties;
    title: string;
    value: number | string;
    icon?: React.ReactElement;
    growth?: string | number;
};

type BannerProp = { banner?: true; actionTitle?: string } | { banner?: false; actionTitle?: never };

type ActionProp =
    | { actionType?: 'link'; onClick?: never; path?: string }
    | {
          actionType?: 'click';
          onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => any;
          path?: never;
      };

type Props = DefaultProps & ActionProp & BannerProp;

// STYLES
import styles from './Stat.module.scss';

const Stat: React.FC<Props> = ({
    className,
    style,
    title,
    value,
    icon,
    growth,
    actionType,
    onClick,
    path,
    banner,
    actionTitle
}) => {
    return (
        <div
            className={`${styles.stat} ${className}`}
            style={{ ...style }}
            data-growth={growth}
            onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                if (banner) return null;
                if (onClick) onClick(event);
            }}
        >
            <div className={styles.content}>
                {icon && <div className={styles.icon}>{icon}</div>}
                <div className={styles.text}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.value}>{value}</span>
                </div>
            </div>
            {banner && (
                <div className={styles.action}>
                    {actionType === 'link' && (
                        <Link href={path!}>
                            <a className={styles.clickable}>{actionTitle}</a>
                        </Link>
                    )}
                    {actionType === 'click' && (
                        <button
                            onClick={event => {
                                event.preventDefault();
                                event.stopPropagation();
                                if (onClick) onClick(event);
                            }}
                            className={styles.clickable}
                        >
                            {actionTitle}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

Stat.defaultProps = {
    banner: false
};

export default Stat;
