class App extends React.Component {
    render() {
        return (
            <div>
                <Greetings who='Varun' from='Deepak' />
            </div>
        );
    }
}
// let myDiv = document.querySelector('#root');
// let root = ReactDOM.createRoot(myDiv);
// root.render(<App />);
ReactDOM.render(<App />, document.getElementById('root'));