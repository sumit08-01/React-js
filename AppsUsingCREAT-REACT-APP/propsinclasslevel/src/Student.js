import React, { Component } from 'react';
class Student extends React.Component {
    state = {
        name: "Amit",
        roll: 101
    }

    render() {
        return (
            <>
                <h3>Name is : {this.state.name}</h3>
                <h3>Roll is : {this.state.roll}</h3>
            </>
        );
    }
}

export default Student;