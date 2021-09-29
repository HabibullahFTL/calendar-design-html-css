import React from "react";

class ClickCounter extends React.Component {

    render(){
        const {count, increament} = this.props;
        return <button onClick={increament}>clicked {count} times</button>
    }
}
export default ClickCounter