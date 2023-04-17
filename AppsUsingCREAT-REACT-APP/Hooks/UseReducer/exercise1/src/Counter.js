import React, { useReducer } from "react";
const count = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(count, 0);
    const handlerClick = () => {
        dispatch("increment");
    };
    return (
        <>
            <h1>Counter is : {state}</h1>
            <button onClick={handlerClick} >Increment Count</button>
        </>
    );
}
export default Counter;