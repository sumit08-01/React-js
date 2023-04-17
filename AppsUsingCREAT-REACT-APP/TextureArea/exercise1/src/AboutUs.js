import React, { Component } from 'react';
class AboutUs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "my name is sumit"
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        alert("A review is submited : " + this.state.text);
        // e.preventDefault();

    }
    change(e) {
        this.setState({ text: e.target.value })
    }
    render() {
        return (
            <>
                <form onSubmit={this.submit} >
                    <label name="review">Review Us</label><br />
                    <textarea onChange={this.change} value={this.state.text} id="review">
                    </textarea><br />
                    <button>submit</button>
                </form>

            </>
        );
    }
}
export default AboutUs;