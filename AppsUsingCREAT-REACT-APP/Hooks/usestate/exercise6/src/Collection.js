import { useState } from 'react';

function Collection() {

    const [item, setitem] = useState("");
    function setitems(e) {
        setitem(e.target.value);
    };

    const [data, setdata] = useState([]);
    function added(e) {
        e.preventDefault();
        setdata([...data, item]);
        setitem("");
    }

    return (
        <>
            <form onSubmit={added}>
                <h1>Shopping App</h1>
                <label>Type item name</label><br />

                <input type="text" value={item} onChange={setitems} ></input><br />

                <button>Add Item</button>

                <h3>Your Shopping Cart : {item.length === 0 ? "Empty" : ""}</h3>
                <ul>
                    {data.map((i, index) => (<li key={index}>{i}</li>))}
                </ul>
            </form>
        </>
    )
}
export default Collection;