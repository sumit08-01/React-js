import React, { Component } from 'react';
import Helper from './Helper';
class Food extends React.Component {
    render() {
        let foods = ["🍌", "🥕", "🥒", "🍍", "🍋", "🍎"];
        return (
            <h1>
                {this.props.len ? foods.length : <Helper arr={foods} />}
            </h1>
        );
    }
}
export default Food;