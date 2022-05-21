// REACT
import React, { useContext } from 'react';

// TYPES
type Props = {
    className?: string;
    style?: React.CSSProperties;
    value: string;
    index: number;
};

// CONTEXT
import { SelectedButton } from 'library/ButtonGroup';

// STYLES
import styles from './ButtonGroupElement.module.scss';

const ButtonGroupElement: React.FC<Props> = ({ className, style, value, index }) => {
    const { selected, setSelected } = useContext(SelectedButton);

    return (
        <button
            className={`${className} ${styles.element}`}
            style={{ ...style }}
            onClick={() => setSelected(selected === index ? null : index)}
            selected-state={`${selected === index}`}
        >
            {value}
        </button>
    );
};

ButtonGroupElement.defaultProps = {
    className: ''
};

export default ButtonGroupElement;
