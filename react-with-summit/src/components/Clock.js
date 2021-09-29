import React from "react";

class Custom extends React.PureComponent {

    state = { date: new Date() }


    componentDidMount() {
        this.clockTimerss = setInterval(() => this.tickss(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimerss)
    }

    tickss() {
        this.setState({ date: new Date() })
    }

    render() {
        const { date } = this.state;
        return (
            <div> Now {date.toLocaleTimeString()} </div >
        )
    }
}

export default Custom