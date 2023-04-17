import { useState, useEffect } from "react";
function Collection() {
    const [data, setData] = useState({ name: "", price: 0 });
    const handleNameChange = (event) => {
        setData({ ...data, name: event.target.value });
    };
    const handlePriceChange = (event) => {
        setData({ ...data, price: event.target.value });
    };
    const [items, setItems] = useState([]);
    const addItem = (event) => {
        event.preventDefault();
        setItems([...items, data]);
        setData({ name: "", price: 0 });
    };
    useEffect(() => {
        let total = 0;
        for (let item of items) {
            total += Number(item.price);
        }
        document.querySelectorAll("b")[0].innerHTML = `${items.length}`;
        document.querySelectorAll("b")[1].innerHTML = `${total}`;
    }, [items]);
    // useEffect(() => {
    //     document.title = count;
    //     return function cleanup() {
    //         console.log("count is", count);
    //     };
    // }, [count])
    return (
        <>
            <form onSubmit={addItem}>
                Type item name:
                <br />
                <input type="text" value={data.name} onChange={handleNameChange} />
                <br />
                Type item price:
                <br />
                <input type="number" value={data.price} onChange={handlePriceChange} />
                <br />
                <button>Add Item</button>
            </form>
            <table border="2">
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span>
                Total Items : <b>0</b>
            </span>
            &nbsp; &nbsp;
            <span>
                Cart Total : <b>0</b>
            </span>
        </>
    );
}
export default Collection;