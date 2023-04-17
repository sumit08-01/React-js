import React, { useContext } from "react";
import { EmpContext } from "./Parent";

function SubChild() {
    let context = useContext(EmpContext);

    function updateSalary() {
        let newsal = context.data.sal + context.data.sal * 0.1;
        context.updateEmp({ ...context.data, sal: newsal })
    }
    return (
        <>
            <h2>This is a subchild Component</h2>
            Employee ID : <b>{context.data.id}</b>
            <br />
            Employee ID : <b>{context.data.name}</b>
            <br />
            Employee ID : <b>{context.data.sal}</b>
            <br />
            <button onClick={updateSalary}>Increment sal</button>
        </>
    );
}
export default SubChild;