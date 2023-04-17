import React, { Component } from 'react';
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            Email: "",
            Pass: ""
        };
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    handlerSubmit(e) {
        console.log("chala")
        e.preventDefault();
        alert(`you typed:\n
        ${this.state.name}\n
        ${this.state.Email}\n
        ${this.state.Pass}`);
        this.setState({
            name: "",
            Email: "",
            Pass: "",
        });

    }
    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
        // this.setState({ Email: this.state.Email })
        // this.setState({ Pass: this.state.Pass })

    }
    render() {
        return (
            <>
                <h1>Contact Form</h1>
                <form onSubmit={this.handlerSubmit}>
                    <label htmlFor='name'>Name</label><br />
                    <input id="name" type="text" onChange={this.changeHandler} name="name" value={this.state.name} /><span>{this.state.name}</span><br />
                    <label htmlFor='Email'>Email</label><br />
                    <input id="Email" type="Email" onChange={this.changeHandler} name="Email" value={this.state.Email} /><span>{this.state.Email}</span><br />
                    <label htmlFor='Pass'>PassWord</label><br />
                    <input id="Pass" type="password" onChange={this.changeHandler} name="Pass" value={this.state.Pass} /><span>{this.state.Pass}</span><br />
                    <button>submit</button>
                </form>
            </>
        )
    }
}
export default Form;