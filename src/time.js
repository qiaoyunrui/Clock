import React from "react";

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString()};
    }

    updateTime() {
        this.setState({time: new Date().toLocaleTimeString()})
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (<div>
            <h1 className="App-intro">{this.state.time}</h1>
        </div>);
    }

}

export default Time