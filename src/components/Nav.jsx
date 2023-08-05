import { Link } from "react-router-dom";

function Nav(){
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="store">Store</Link></li>
        </ul>
    );
}

export default Nav;