import React from 'react';

const Counter = ({value,counterName}) => {
    console.log(`Value of ${counterName} is rendered`);
    return (
        <p>Value is: {value}</p>
    );
};

export default React.memo(Counter);