// REACT
import React from 'react';

// TYPES
type Props = {
    onSubmit?: (arg0?: React.FormEvent) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const Form: React.FC<Props> = ({ onSubmit, children, className, style }) => {
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit!(event);
            }}
            noValidate
            autoComplete="off"
            className={className}
            style={style}
        >
            {children}
        </form>
    );
};

Form.defaultProps = {
    onSubmit: () => null
};

export default Form;
