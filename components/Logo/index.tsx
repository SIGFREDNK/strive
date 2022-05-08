// REACT
import React from 'react';

// NEXT
import Image from 'next/image';

// STYLES
import styles from './Logo.module.scss';

// CONFIG
import { applicationName } from 'config';

const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <Image src="/icons/logo.png" width={25} height={25} alt="" />
            <h4 className={styles.company}>{applicationName}</h4>
        </div>
    );
};

export default Logo;
