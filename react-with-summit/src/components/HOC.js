import React from "react";

const withCounter = (OriginalCounter) => {
    class NewComponent extends React.Component {
        state = {
            count: 0
        }
        increament =()=>{
            this.setState((prevState)=>({count: prevState.count + 1}))
        }
        render() {
            const {count} = this.state;
            return <OriginalCounter  count={count} increament={this.increament} />
        }
    }
    return NewComponent
}
export default withCounter;