import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.nameref = React.createRef();
        this.emailref = React.createRef();
        this.passref = React.createRef();
        this.handlerSubmit = this.handlerSubmit.bind(this);

    }
    handlerSubmit(e) {
        e.preventDefault();
        alert(`You Type 
    name: ${this.nameref.current.value}
    Email:${this.emailref.current.value}
    PassWord:${this.passref.current.value}
                                    `);
        this.nameref.current.value = "";
        this.emailref.current.value = "";
        this.passref.current.value = "";
    }
    render() {
        return (
            <>
                <h1>Contact Form</h1>
                <form onSubmit={this.handlerSubmit}>
                    <label htmlFor='name'>Name</label>
                    <br />
                    <input id="name" type="text" ref={this.nameref}></input>
                    <br />
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input id="email" type="email" ref={this.emailref}></input>
                    <br />
                    <label htmlFor='pass'>password</label>
                    <br />
                    <input id="pass" type="password" ref={this.passref}></input>
                    <br />
                    <button>submit</button>
                </form>
            </>
        )
    }
}
export default Form;