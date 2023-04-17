import React, { Component } from 'react';
import App from './App';
class Ball extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Ball'>
                {this.props.nums}
            </div>
        );
    }
}
export default Ball;