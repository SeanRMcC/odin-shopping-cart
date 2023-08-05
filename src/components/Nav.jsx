import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <h1>Sean's Store</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="store">Store</Link></li>
            </ul>
        </nav>
        
    );
}

export default Nav;