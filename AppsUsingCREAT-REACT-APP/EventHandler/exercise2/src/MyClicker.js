import React, { Component } from 'react';
class MyClicker extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 0,
        }
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div style={{ AignItems: "center" }}>
                <h2>Counter : {this.state.count}</h2>
                <button onClick={this.handleClick}>Increment count</button>
            </div>
        );
    }
}
export default MyClicker;