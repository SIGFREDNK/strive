// NEXT
import dynamic from 'next/dynamic';

// REACT
import React from 'react';

// TYPES
import Props from './props';

// DYNAMIC
const DynamicDraggable = dynamic(() => import('components/Draggable/draggable'), { ssr: false });

const Draggable: React.FC<Props> = ({ children, style, className, id }) => {
    return (
        <DynamicDraggable id={id} style={style} className={className}>
            {children}
        </DynamicDraggable>
    );
};

export default Draggable;
