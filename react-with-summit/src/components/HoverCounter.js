import React from "react";
import withCounter from "./HOC";

class HoverCounter extends React.Component {
    render(){
        const {count,increament} = this.props;
        return <h1 onMouseOver={increament}>clicked {count} times</h1>
    }
}
export default withCounter(HoverCounter)