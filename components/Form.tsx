// REACT
import React from 'react';

// TYPES
type props = {
    onSubmit?: (arg0?: React.FormEvent) => void;
    children?: React.ReactNode;
};

const Form: React.FC<props> = ({ onSubmit, children }) => {
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit!(event);
            }}
            noValidate
            autoComplete="off"
        >
            {children}
        </form>
    );
};

Form.defaultProps = {
    onSubmit: () => null
};

export default Form;
