import '../Component/css/stylecreative.css'
import { Link } from 'react-router-dom';
function Navbar() {
    return ( <>
      <div style={{margin:'10px'}}>
      <nav>
    <div className="logo-container">
        <h1>WANDERLUST DIARIES</h1>

    </div>
    <ul>
        <li><Link to={"/login"}>GALLERY</Link></li>
        <li><Link to={"/login"}>MAIN FEATURES</Link></li>
        <li><Link to={"/login"}>USER</Link></li>
        <li><Link >CONTACT</Link></li>
    </ul>
    </nav>
      </div>
    </> );
}

export default Navbar;