// REACT
import React, { useState, useEffect } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    icon: React.ReactElement;
    shape?: 'square' | 'round';
    onClick?: (event: React.MouseEvent) => any;
    disabled?: boolean;
    onChange?: (state: boolean) => any;
};

// DEPENDENCIES
import { motion } from 'framer-motion';

// STYLES
import styles from './IconButton.module.scss';

const IconButton: React.FC<Props> = ({ className, style, icon, shape, onClick, disabled, onChange }) => {
    const [active, setActive] = useState(false);

    return (
        <motion.button
            className={`${styles.button} ${styles[shape!]} ${className}`}
            style={{ ...style }}
            onClick={
                disabled
                    ? () => null
                    : event => {
                          onClick!(event);
                          onChange!(!active);
                          setActive(!active);
                      }
            }
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.05 }}
            button-disabled={`${disabled}`}
            button-active-state={`${active}`}
        >
            {icon}
        </motion.button>
    );
};

IconButton.defaultProps = {
    className: '',
    shape: 'square',
    onClick: () => null,
    disabled: false,
    onChange: () => null
};

export default IconButton;
