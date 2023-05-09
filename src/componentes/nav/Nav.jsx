import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
  return (
    <nav>
      <ul>
       <li> <Link to="">Home</Link></li>
        <li><Link to="/Galeria">Galeria</Link></li>
        <li><Link to="/Historia">Historia</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
