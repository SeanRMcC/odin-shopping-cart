import bunnyImage from "./../assets/bunny.jpeg";

function Home(){
    return (
        <>
            <h1>Welcome to Sean's store!</h1>
            <p>We sell products at the lowest prices and the highest qualitiites! Our products range from clothing, to jewelry, to weapons of mass destruction!</p>
            <h2>Meet the man behind the store:</h2>
            <img src={bunnyImage} alt="Sean McCarty" />
            <p>This is Sean, a 19 year old computer science study who sells goods at criminally low prices! His secret: theft! Sean and his team steal the items on this store from warehouses across the world, allowing 100% profits and low prices for everyone! It truly is a win-win!</p>
        </>
    );
}

export default Home;