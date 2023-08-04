import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>farbenmeer code challenge</h3>
      <nav>
        <NavLink className="header__homelink" to="/">
          Home
        </NavLink>
      </nav>
    </header>
  );
}
