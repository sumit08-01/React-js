import React, { Component } from 'react';

class KeyDetector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "",
            code: ""
        }
        this.handleykey = this.handleykey.bind(this);
    }
    handleykey(e) {
        this.setState({
            key: e.key,
            code: e.code
        })
    }
    render() {
        return (
            <>
                <h1>Key Detector</h1>
                <h2>Key : {this.state.key}, code : {this.state.code}</h2>
                <input type="text" placeholder='Type here' onKeyPress={this.handleykey}></input>
            </>
        );
    }
}
export default KeyDetector;