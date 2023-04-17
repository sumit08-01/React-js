class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Bye />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));