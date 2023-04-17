class Greetings extends React.Component {
    render() {
        return (
            <h3>
                Good Evening {this.props.who} from {this.props.from} !
            </h3>
        );
    }
}