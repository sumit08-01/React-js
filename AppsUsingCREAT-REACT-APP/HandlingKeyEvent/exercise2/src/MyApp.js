import React, { Component } from 'react';
class MyApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Type Your message",
        }
        this.handler = this.handler.bind(this);
    }
    handler(e) {
        if (e.code === "Enter") {
            alert(`you type\n ${e.target.value}`);
        } else if (e.code === "Escape") {
            let answer = window.confirm("Are you sure");
            if (answer) {
                e.target.value = "";
            }
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <input type="text" onKeyUp={this.handler} placeholder="type here"></input>
            </>
        );
    }
}

export default MyApp;