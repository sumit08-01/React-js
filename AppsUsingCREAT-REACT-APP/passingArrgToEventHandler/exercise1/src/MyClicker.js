import React, { Component } from 'react';

class MyClicker extends Component {
    constructor(props) {
        super(props);
        this.event = 0;

        this.state = {
            counter: 0,
            event: 0
        }

        this.Increment = this.Increment.bind(this);
    }

    Increment(e) {
        if (e.target.name === "inc1") {
            this.setState((prevState) => {
                return { counter: prevState.counter + 1 }
            });
        }
        else if (e.target.name === "inc2") {
            this.setState((prevState) => {
                return { counter: prevState.counter + 2 }
            });
        }
        else {
            this.setState((prevState) => {
                return { counter: prevState.counter + 3 }
            });
        }
    }


    render() {
        return (
            <>
                <h2>Counter : {this.state.counter}</h2>
                <button name="inc1" onClick={this.Increment}>Increment 1</button>
                <button name="inc2" onClick={this.Increment} >Increment 2</button>
                <button name="inc3" onClick={this.Increment} >Increment 3</button>
            </>
        );
    }
}
export default MyClicker;