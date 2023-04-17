import { useState } from 'react';
function Myapp() {
    // const [FirstName, setfirstName] = useState("");
    // const [LastName, setlastName] = useState("");

    //with the use of state (EX---->>>>4)
    const [FullName, setFullName] = useState({
        FirstName: "",
        LastName: ""
    });


    function FirstN(e) {
        // setfirstName(e.target.value);
        setFullName({ ...FullName, FirstName: e.target.value })
    }
    function LastN(e) {
        // setlastName(e.target.value);
        setFullName({ ...FullName, LastName: e.target.value })
    }
    return (
        <>
            <label >Name : </label><br />
            {/* <input type='text' onChange={FirstN} value={FirstName}></input><br /><br /> */}
            <input type='text' onChange={FirstN} value={FullName.FullName}></input><br /><br />
            <label>Last : </label><br />
            {/* <input type='text' onChange={LastN} value={LastName}></input><br /><br /> */}
            <input type='text' onChange={LastN} value={FullName.FullName}></input><br /><br />
            {/* {(FirstName.length > 0 || LastName.length > 0) && (<span>Hello {FirstName} {LastName}</span>)} */}
            {(FullName.FirstName.length > 0 || FullName.LastName.length > 0) && (<span>Hello {FullName.FirstName} {FullName.LastName}</span>)}
        </>
    )
}
export default Myapp;