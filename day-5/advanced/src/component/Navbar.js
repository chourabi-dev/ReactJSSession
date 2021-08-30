import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <Link to="/home" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/users" >Users</Link>
            
          
            
            
        </nav>
    );
}


export default Navbar;