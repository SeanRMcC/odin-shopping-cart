import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Store(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
            .then(response => response.json())
            .then(storeItems => setItems(storeItems))
    },[])

    const storeCards = items.map(item => (
        <div key={uuid()}>
            <img src={item.image} style={{
                width: "100px",
                height: "auto"
            }}/>
            <div>{item.title}</div>
        </div>
    ));

    console.log(items);
    return (
        <>
            {storeCards}
        </>
    );
}

export default Store;