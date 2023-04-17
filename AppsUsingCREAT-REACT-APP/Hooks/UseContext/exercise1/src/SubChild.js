import React, { useContext, useState } from "react";
import { EmpContext } from "./Parent";
function SubChild() {
    return (
        <>
            <h2>This is a subchild Component</h2>
            <EmpContext.Consumer>
                {
                    (emp) => {
                        return (
                            <>
                                Employee ID : <b>{emp.id}</b>
                                <br />
                                Employee ID : <b>{emp.name}</b>
                                <br />
                                Employee ID : <b>{emp.sal}</b>
                            </>
                        );
                    }
                }
            </EmpContext.Consumer>
        </>
    );
}
export default SubChild;

// -------------------------Improve Version --------------import React, { useState } from "react";
// import { EmpContext } from "./Parent";
// function SubChild() {
//     let emp = useContext(EmpContext);
//     return (
//         <>
//             <h2>This is a subchild Component</h2>
//             Employee ID : <b>{emp.id}</b>
//             <br />
//             Employee ID : <b>{emp.name}</b>
//             <br />
//             Employee ID : <b>{emp.sal}</b>
//         </>
//     );
// }
// export default SubChild;