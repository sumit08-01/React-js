import { useState } from 'react';
function Number() {
    const [Number, setNumber] = useState([]);

    function GenerateNum(e) {
        let newNum = Math.floor(Math.random() * 10) + 1;
        setNumber([...Number, newNum]);

    }
    return (
        <>
            <button onClick={GenerateNum}>Generate Random Number</button>
            <ul>
                {Number.map((n, index) =>
                    (<li key={index}> {n} </li>))}

                {/* // (<li key={index}> {n} </li>))} */}
            </ul>



        </>
    )
}
export default Number;