import React, { Component } from 'react';

class ClassClock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[this.state.time.getDay()];
        const date = this.state.time.getDate();
        const month = this.state.time.getMonth() + 1;
        const year = this.state.time.getFullYear();
        const hours = this.state.time.getHours();
        const minutes = this.state.time.getMinutes();
        const seconds = this.state.time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        return (
            <div>
                <h1>Clock</h1>
                <h2>{day}, {date}/{month}/{year}</h2>
                <h2>{hours % 12 || 12}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} {ampm}</h2>
            </div>
        );
    }
}

export default ClassClock;
