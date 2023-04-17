import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();
function Parent() {
    const [emp, setEmp] = useState({
        id: 101,
        name: "sumit",
        sal: 20000
    })
    return (
        <>
            <h2>This is a parent Component</h2>
            <hr />
            <EmpContext.Provider value={emp}>
                <Child />
            </EmpContext.Provider>
        </>
    );
}
export default Parent;