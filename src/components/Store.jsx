import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ShopItem from "./ShopItem"

function Store(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
            .then(response => response.json())
            .then(storeItems => setItems(storeItems))
    },[])

    const storeCards = items.map(item => (
        <ShopItem
            key={uuid()}
            image={item.image}
            title={item.title}
        />
    ));

    console.log(items);
    return (
        <>
            {storeCards}
        </>
    );
}

export default Store;