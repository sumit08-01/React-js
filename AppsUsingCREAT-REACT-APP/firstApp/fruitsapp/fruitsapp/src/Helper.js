import React, { Component } from 'react';
class Helper extends Component {

    remove(random) {
        let newArr = this.props.arr.filter((e) => this.props.arr[random] !== e);
        return newArr;
    }

    choice() {
        let random = Math.floor(Math.random() * this.props.arr.length);
        return this.remove(random);
    }

    render() {

        return (
            <h1>
                {this.choice().join()}
            </h1>
        );
    }
}
export default Helper;