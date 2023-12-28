import { Link } from "react-router-dom";
import { foodSpecials } from "../../data";
import "./Specials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

const Specials = () => {
  return (
    <section className="container specials">
      <div className="specials-menu">
        <h1 className="title">This weeks specials!</h1>
        <Link to={"/order"} className="rounded-button">
          Online Menu
        </Link>
      </div>
      {foodSpecials.map((food, i) => {
        return (
          <div className="food-card">
            <div>
              <img src={food.cardImage} alt={food.title} />
              <div className="food-title">
                <h2>{food.title}</h2>
                <span className="food-price">{food.price}</span>
              </div>
            </div>
            <div className="food-description-container">
              <p className="food-description">{food.description}</p>
              <Link to={"/order"} className="food-order">
                Order a delivery <FontAwesomeIcon icon={faPersonBiking} />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Specials;
