import React, { Component } from "react";
import Input from "./Input";
class From extends Component {
    constructor(props) {
        super(props);
        this.compRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        this.compRef.current.setFocus();
    }
    render() {
        return (
            <div>
                <Input ref={this.compRef} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
export default From;
