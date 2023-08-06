import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <h1>Sean's Store</h1>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="store"><button>Store</button></Link></li>
            </ul>
        </nav>
        
    );
}

export default Nav;