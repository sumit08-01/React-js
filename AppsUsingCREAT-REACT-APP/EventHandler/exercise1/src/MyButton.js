import React, { Component } from 'react';

class MyButton extends Component {
    handleClick() {
        let date = new Date();
        date = alert(date);
    }
    render() {
        return (
            <>
                <h1>Todat Date and Time : { }</h1>
                <button onClick={this.handleClick}> Click me</button>
            </>
        );
    }
}
export default MyButton;