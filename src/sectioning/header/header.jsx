import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
        <div className = "y-wrap">
            <nav className="navs">
            <p>Home</p>
              <ul>
              <li>
                <NavLink to="/Search">Search</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>About</li>
              <li>Login</li>
              </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;