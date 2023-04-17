import React, { useContext } from "react";
import { EmpContext } from "./Parent";
import SubChild from "./SubChild";

function Child() {
    let Context = useContext(EmpContext);
    return (
        <>
            <h2>This is a child component</h2>
            <p>
                <label>
                    Employee ID : <b>{Context.data.id}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Name : <b>{Context.data.name}</b>
                </label>
            </p>
            <p>
                <label>
                    Employee Salary : <b>{Context.data.sal}</b>
                </label>
            </p>
            <SubChild />
        </>
    );
}
export default Child;