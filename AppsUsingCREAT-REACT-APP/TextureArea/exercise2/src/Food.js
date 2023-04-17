import React, { Component } from 'react';
class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "Indian"
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        alert("Your favourate food is : " + this.state.value);
        // e.preventDefault();

    }
    change(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <>
                <form onSubmit={this.submit} >
                    <h1>Pick Your faviorate food</h1>
                    <select onChange={this.change} value={this.state.text} id="review">
                        <option id="indian">Indian </option>
                        <option id="chines">Chines </option>
                        <option id="american">American </option>

                    </select><br />
                    <button>submit</button>
                </form>

            </>
        );
    }
}
export default Food;