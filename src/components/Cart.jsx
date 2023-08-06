import CartItem from "./CartItem";
import { v4 as uuid } from "uuid";

function Cart(props){

    const cartItems = [];

    for(let cartItemTitle in props.cart){
        cartItems.push((
            <CartItem
                key={uuid()}
                title={cartItemTitle}
                numItems={props.cart[cartItemTitle]}
                removeFromCart={props.removeFromCart}
            />
        ));
    }
    

    return (
        <div>
            {cartItems}
        </div>
    );
}

export default Cart;