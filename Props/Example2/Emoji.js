class Emoji extends React.Component {
    render() {
        const result = this.props.e1 == this.props.e2 && this.props.e2 == this.props.e3;
        return (
            <div>
                <span>{this.props.e1}</span>
                <span>{this.props.e2}</span>
                <span>{this.props.e3}</span>
                <p>{result ? "You won" : "You lose"}</p>
            </div>
        );
    }
}