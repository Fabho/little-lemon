import { Link } from "react-router-dom";
import { menuLinks, contact, socialMedia } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLogo from "../icons_assets/footer_square_lemon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container main">
        <img className="logo" src={FooterLogo} alt="Little Lemon" />
        <nav className="nav">
          <div>
            <h4>Sitemap</h4>
            <ul>
              {menuLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.src}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="contact">
          <h4>Contact us</h4>
          <address>
            <div>{contact.address}</div>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>
          </address>
        </div>
        <div className="social">
          <h4>Connect with us</h4>
          {socialMedia.map((media, i) => {
            return (
              <div key={i}>
                <a href={media.url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={media.icon} />
                  {media.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
