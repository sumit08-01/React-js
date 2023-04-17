import { useState, useEffect } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((prevcount) => prevcount + 1);
    };
    useEffect(() => {
        document.title = count;
    });
    return (
        <>
            <section>Count is : {count}</section>
            <button onClick={incrementCount}>Increment Count</button>
        </>
    );
}
export default Counter;