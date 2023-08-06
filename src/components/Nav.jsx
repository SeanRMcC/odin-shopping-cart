import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <h1>Sean's Store</h1>
            <ul>
                <button><li><Link to="/">Home</Link></li></button>
                <button><li><Link to="store">Store</Link></li></button>
            </ul>
        </nav>
        
    );
}

export default Nav;