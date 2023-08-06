import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ShopItem from "./ShopItem";
import Cart from "./Cart";
import cartIcon from "./../assets/cart.svg";

function Store(){
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);

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

    function removeFromCart(item){
        setCart(prevCart => {
            const newCart = {...prevCart};
            delete newCart[item];
            return newCart;
        });
    }

    const storeCards = items.map(item => (
        <ShopItem
            key={uuid()}
            image={item.image}
            title={item.title}
            price={item.price}
            addToCart={addToCart}
        />
    ));

    return (
        <>
            <div className="cart-with-button">
                <button onClick={() => setShowCart(p => !p)}>
                    <img src={cartIcon} style={{
                        width: "25px",
                        height: "auto"
                    }}/>
                </button>
                <div>
                    {showCart && <Cart
                        cart={cart}
                        removeFromCart={removeFromCart}
                    />}
                </div>
            </div>
            <div className="store-cards">
                {storeCards}
            </div>
        </>
    );
}

export default Store;