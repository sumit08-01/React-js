// import Helper from './Helper';
import Food from './Food';
import React, { Component } from 'react'
class Fruits extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Total fruits : <Food len={true} /></p>
                <p>They are : <Food len={false} /></p>
                <p>Chosen fruit : { }</p>
                <p>Remaining fruits : { }</p>
                <p>They are : { }</p>

            </div>
        );
    }
}
export default Fruits;