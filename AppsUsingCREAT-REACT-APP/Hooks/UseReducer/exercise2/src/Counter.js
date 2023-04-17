import React, { useReducer } from "react";
const count = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(count, 0);
    const handlerInc = () => {
        dispatch("increment");
    };
    const handlerDec = () => {
        dispatch("decrement");
    };
    const handlerReset = () => {
        dispatch("reset");
    };
    return (
        <>
            <h1>Counter App</h1>
            <p>Count is : {state}</p>
            <button onClick={handlerInc} >Increment</button>
            <button onClick={handlerDec} >Decrement</button>
            <button onClick={handlerReset} >Reset</button>
        </>
    );
}
export default Counter;