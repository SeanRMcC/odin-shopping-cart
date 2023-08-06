import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ShopItem from "./ShopItem"

function Store(){
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState({});

    console.log(cart);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
            .then(response => response.json())
            .then(storeItems => setItems(storeItems))
    },[])

    function addToCart(item, num){
        if(num > 0){
            setCart(prevCart => ({
                ...prevCart,
                [item]: prevCart[item] ? prevCart[item] + num : num
            }))
        }
    }

    const storeCards = items.map(item => (
        <ShopItem
            key={uuid()}
            image={item.image}
            title={item.title}
            addToCart={addToCart}
        />
    ));

    const cartList = [];

    for(let cartItem in cart){
        cartList.push(<div>{cartItem}: {cart[cartItem]}</div>)
    }

    console.log(items);
    return (
        <>
            <div>
                {cartList}
            </div>
            <div>
                {storeCards}
            </div>
        </>
    );
}

export default Store;