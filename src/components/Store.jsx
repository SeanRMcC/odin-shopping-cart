import { useState, useEffect } from "react";

function Store(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
            .then(response => response.json())
            .then(storeItems => setItems(storeItems))
    },[])

    console.log(items);
    return (
        <p>This is the Store!</p>
    );
}

export default Store;