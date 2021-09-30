import React from 'react';

const Title = ({counterName}) => {
    console.log(`Title of ${counterName} rendered`);
    return (
        <h5>{counterName}</h5>
    );
};

export default React.memo(Title);