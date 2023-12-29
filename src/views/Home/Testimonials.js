import { testimonials } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const renderStars = (stars) => {
    let x = Array(stars).fill(<FontAwesomeIcon icon={faStar} />);

    return x.map((icon, i) => {
      return <span key={i}>{icon}</span>;
    });
  };

  return (
    <section className="testimonial-section">
      <div className="container main">
        <h2>What people say about us!</h2>
        {testimonials.map((testimonial, i) => {
          return (
            <div className="testimonial-card" key={i}>
              <img src={testimonial.image} alt={testimonial.name} />
              <span>{testimonial.name}</span>
              <div className="stars-container">
                {renderStars(testimonial.stars)}
              </div>
              <div className="testimonial-description">
                <p>{testimonial.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
