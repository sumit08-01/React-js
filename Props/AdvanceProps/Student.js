class Student extends React.Component {
    studentStyle = {
        backgroundColor: "yellow", // ===>>>Style using Object
    };
    result = {
        backgroundColor: "green",
    };
    resultf = {
        backgroundColor: "red",
    };

    render() {
        let sum = 0;
        for (let e of this.props.marks)
            sum += e;
        return (
            <div style={this.studentStyle}>
                {/* // <div className="Student" style={{  ====>>>INLINE CSS/STYLE
            //     backgroundColor: "green"
            // }}> */}


                <p>Name : {this.props.name}</p>
                <p>age : {this.props.age}</p>
                <p> Subject :</p>
                <ul>
                    {this.props.subject.map((m) => (
                        <li>{m}</li>
                    ))}
                </ul>
                <p> Marks :</p>
                <ul>
                    {this.props.marks.map((m) => (
                        <li>{m}</li>
                    ))}
                </ul>
                <p>Total :{sum} </p>
                <span >Result : {(sum >= 150) ? <span style={this.result}>"Pass"</span> : <span style={this.resultf}>"Fail"</span>}</span>
            </div>
        );
    }
}
// Student.propTypes = { // ===>>> aFOR USING STRICT RULE TO PASS
//     age: PropTypes.number
// }
