import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e) {
        e.preventDefault();
        this.setState({ name: e.target.value });

    }
    // submitHandler(e) {
    //     e.preventDefault();
    //     alert(`you type ${e.target.value}`);
    //     this.setState({ name: "" });
    // }
    submitHandler(e) {
        console.log(9);
        e.preventDefault();
        const a = e.target.va
    }
    render() {
        return (
            <>
                <h1>Contact Form</h1>
                <form onSubmit={this.submitHandler} value={this.state.name}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" onChange={this.changeHandler} />
                    <button>Submit</button>
                    <p>You type : { }</p>
                </form>

            </>
        )
    }
}
export default Form;