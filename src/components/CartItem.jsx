function CartItem(props){
    return (
        <div>
            <span>{props.title}: {props.numItems}</span>
            <button onClick={() => props.removeFromCart(props.title)}>Remove</button>
        </div>
    );   
}

export default CartItem