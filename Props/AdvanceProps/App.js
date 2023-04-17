class App extends React.Component {
    render() {
        return (
            <div >
                <h1>Student Details</h1>
                <Student name="sumit" age={23} subject={["maths", "science", "english"]} marks={[190, 50, 34]} />
                {/* <Student name="varun" age="22" subject={[Maths, science, english]} marks={[10, 50, 34]} /> */}

            </div>
        );
    }
}
// let myDiv = document.querySelector('#root');
let root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
