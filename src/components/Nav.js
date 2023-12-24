import { Link, useLocation } from "react-router-dom";
import logo from "../icons_assets/Logo.svg";
import "./Nav.css";
import { menuLinks } from "../data";

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="container nav">
      <Link to={"/"} className="header-logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul className={"links"}>
        {menuLinks.map((link, i) => (
          <li key={i}>
            <Link
              className={pathname === link.src ? "selected" : ""}
              to={link.src}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
