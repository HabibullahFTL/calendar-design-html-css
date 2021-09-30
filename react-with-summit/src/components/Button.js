import React from 'react';

const Button = ({handleClick,counterName}) => {
    console.log(`Button of ${counterName} is rendered`);
    return (
        <button onClick={handleClick}>Increament {counterName}</button>
    );
};

export default React.memo(Button);