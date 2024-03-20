import './Navigation.css';
import { Link, Route, Routes } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <a className="logo" href="" />
      <span className="mob">Menu</span>
      <ul className="menu">
        <li> <Link to="/">CRYPTO Homepage</Link> </li>
        <li> <Link to="/about">Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
