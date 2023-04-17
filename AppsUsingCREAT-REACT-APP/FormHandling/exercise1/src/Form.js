import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: ""
        }
    }
    handleChange(e) {
        e.preventDefault();
        this.setState = ({
            name: e.target.value
        });
    }
    render() {
        return (
            <>
                <h1>Contact Form</h1>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" placeholder="Type your name" onChange={this.handleChange} value={this.state.name} />

                    <p>You typed :<b>{this.state.name}</b> </p>
                </form>

            </>
        );
    }
}
export default Form;