function ShopItem(props){
    return (
        <div>
            <img src={props.image} style={{
                width: "100px",
                height: "auto"
            }}/>
            <div>{props.title}</div>
        </div>
    );
}

export default ShopItem;