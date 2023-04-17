import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0)
    function incCount() {
        setCounter((prevcount) => prevcount + 1)
    }
    return (
        <>
            <h1>Count : {counter}</h1>
            <button onClick={incCount}>increase count</button>
        </>
    )
}
export default Counter;