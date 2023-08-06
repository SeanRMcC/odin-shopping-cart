import { useState } from "react";

function ShopItem(props){

    const [numBuy, setNumBuy] = useState(0);

    function decrementCount(){
        if(numBuy > 0){
            setNumBuy(prevNumBuy => prevNumBuy - 1);
        }
    }
    
    function incrementCount(){
        setNumBuy(prevNumBuy => prevNumBuy + 1);
    }

    return (
        <div>
            <img src={props.image} style={{
                width: "100px",
                height: "auto"
            }}/>
            <div>{props.title}</div>
            <div>
                <button onClick={decrementCount}>-</button>
                <span>{numBuy}</span>
                <button onClick={incrementCount}>+</button>
                <button onClick={() => props.addToCart(props.title, numBuy)}>Add to cart</button>
            </div>
        </div>
    );
}

export default ShopItem;