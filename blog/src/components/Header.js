import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>farbenmeer coding challenge</h3>
      <NavLink className="header__homelink" to="/">
        Home
      </NavLink>
    </header>
  );
}
