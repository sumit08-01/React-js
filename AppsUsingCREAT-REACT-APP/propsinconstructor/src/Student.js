import React, { Component } from 'react';
class Student extends Component {
    constructor() {
        super();
        this.state = {
            name: "sumit",
            roll: 43
        };

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
export default Student;