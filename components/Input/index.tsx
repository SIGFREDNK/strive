// REACT
import React, { ChangeEvent, useState } from 'react';

// TYPES
import InputType from 'interfaces/InputType';

interface CommonProps {
    children?: React.ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
    type: InputType;
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

type TypeProps = { type?: 'password'; toggleVisibility?: boolean } | { type?: string; toggleVisibility?: never };

type Props = CommonProps & TypeProps;

// ICONS
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// STYLES
import styles from './Input.module.scss';

const Input: React.FC<Props> = ({
    onChange,
    type,
    label,
    name,
    placeholder,
    required,
    toggleVisibility,
    children,
    className,
    style
}) => {
    const [visible, setVisible] = useState(false);
    let toggleType = visible ? 'text' : 'password';

    return (
        <div className={`${styles.group} ${className}`} style={{ ...style }}>
            <label htmlFor={name} className={styles.label}>
                {`${label} ${required ? '*' : ''}`}
            </label>
            <input
                type={type === 'password' && toggleVisibility ? toggleType : type}
                placeholder={placeholder}
                name={name}
                className={styles.input}
                onChange={event => onChange!(event)}
                required={required}
            />
            {toggleVisibility && visible && (
                <VisibilityIcon onClick={() => setVisible(false)} className={styles.visibility} fontSize="small" />
            )}
            {toggleVisibility && !visible && (
                <VisibilityOffIcon onClick={() => setVisible(true)} className={styles.visibility} fontSize="small" />
            )}
            {children}
        </div>
    );
};

Input.defaultProps = {
    required: false,
    onChange: () => null,
    toggleVisibility: false
};

export default Input;
