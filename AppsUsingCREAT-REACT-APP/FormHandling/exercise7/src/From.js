import React, { Component } from "react";

import input from "./input";
class From extends Component {
    constructor(props) {
        super(props);
        this.compRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        if (this.compRef.current.hasText()) {
            this.compRef.current.selectText();
        } else {
            alert("No text in textbox");
        }
    }
    render() {
        return (
            <div>
                <input ref={this.compRef} />
                <button onClick={this.handleClick}>Select Text</button>
            </div>
        );
    }
}
export default From;
