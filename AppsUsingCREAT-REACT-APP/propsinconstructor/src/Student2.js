import React, { Component } from 'react';

class Student2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            roll: this.props.roll,
        }
    }
    render() {
        return (
            <>
                <p>Name is : {this.state.name}</p>
                <p>Roll is : {this.state.roll}</p>
            </>
        );
    }
}
export default Student2;