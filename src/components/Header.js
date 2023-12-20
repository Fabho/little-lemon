import Nav from "./Nav";
import logo from "../icons_assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
