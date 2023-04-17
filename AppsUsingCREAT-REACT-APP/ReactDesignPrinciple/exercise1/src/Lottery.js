import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultprops = {
        name: "Lotto",
        numBalls: 6,
        maxValue: 50
    };

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);

    };

    handleClick() {
        let arr = [];
        for (let i = 1; i <= this.props.numBalls; i++) {
            let x = Math.floor(Math.random() * this.props.maxValue) + 1;
            arr.push(x);
        }
        this.setState(currState => (
            { nums: arr }
        ));
    }
    render() {
        return (
            <div className='Lottery'>
                <h2>{this.props.name}</h2>
                <div>
                    {this.state.nums.map(n =>
                        <Ball num={n} />
                    )}
                </div>
                <button onClick={this.handleClick}>Generate Nums</button>
            </div>
        )
    }
}
export default Lottery;