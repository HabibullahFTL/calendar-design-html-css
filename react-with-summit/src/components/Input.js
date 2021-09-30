import React from 'react';

const Input = ({type},ref) => {
    return <input ref={ref} type={type} />
};

export default React.forwardRef(Input);