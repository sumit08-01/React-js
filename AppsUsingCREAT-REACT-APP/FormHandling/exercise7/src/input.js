import React, { Component } from "react";
class input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    selectText() {
        this.inputRef.current.select();
    }
    hasText() {
        return this.inputRef.current.value.length > 0;
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}
export default input;
