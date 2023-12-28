import { Link } from "react-router-dom";
import "./Hero.css";
import HeroFood from "../../icons_assets/restaurant_food.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container main">
        <div className="hero-data">
          <h1 className="title">Little Lemon</h1>
          <h2 className="location">Chicago</h2>
          <div className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
          <Link to={"/booking"} className="rounded-button reservation-button">
            Reserve a table
          </Link>
        </div>
        <img src={HeroFood} className="food-image" alt="Hero food" />
      </div>
    </section>
  );
};

export default Hero;
