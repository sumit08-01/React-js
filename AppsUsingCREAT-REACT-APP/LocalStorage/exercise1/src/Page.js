import React, { Component } from 'react';
class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: ""
        }
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
    }
    handleName(e) {
        this.setState({ name: e.target.value });
    }

    handleAge(e) {
        this.setState({ age: e.target.value });
    }

    save(e) {

        localStorage.setItem("name", String(this.state.name))
        localStorage.setItem("age", String(this.state.age))
        this.setState({
            name: "",
            age: ""
        })
    }
    load() {
        let name = localStorage.getItem("name");
        let age = localStorage.getItem("age");
        console.log(name);
        console.log(age);

    }

    render() {
        return (
            <>
                <h1>You Details</h1>
                <label htmlFor='name' >Name : </label><br />
                <input type="text" id="name" value={this.state.name} onChange={this.handleName}></input><br />
                <label htmlFor='age' >Age : </label><br />
                <input type="number" id="age" value={this.state.age} onChange={this.handleAge} ></input><br />
                <button onClick={this.save} >Save</button>
                <button onClick={this.load} >Load</button>

            </>
        );
    }
}
export default Page;