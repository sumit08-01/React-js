import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.inc = this.inc.bind(this);
        this.clr = this.clr.bind(this);

        this.state = {
            count: 0,
        }
    }
    inc(e) {
        e.preventDefault();
        this.setState({
            count: this.state.count + 1
        })
        localStorage.setItem('count', String(this.state.count));
    }
    clr() {
        localStorage.clear();
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.clr}>Clear</button>

            </>
        )
    }
}
export default Counter;