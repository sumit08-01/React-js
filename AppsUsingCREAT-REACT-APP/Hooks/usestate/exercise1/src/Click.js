import { useState } from 'react';

function Click() {
    const [text, setText] = useState("Click me");
    function click() {
        setText(new Date().toLocaleString());
    }
    return (
        <>
            <button onClick={click}>{text}</button>
        </>
    )

}
export default Click;