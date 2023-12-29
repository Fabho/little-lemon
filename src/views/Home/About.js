import { faker } from "@faker-js/faker";
import MarioAndAdrianOne from "../../icons_assets/Mario and Adrian A.jpg";
import MarioAndAdrianTwo from "../../icons_assets/Mario and Adrian b.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="container about-main">
      <div className="about-info">
        <h1 className="title">Little Lemon</h1>
        <h2 className="location">Chicago</h2>
        <p>{faker.lorem.paragraph(20)}</p>
      </div>
      <div className="about-images">
        <img src={MarioAndAdrianOne} alt="Mario and Adrian A" />
        <img src={MarioAndAdrianTwo} alt="Mario and Adrian B" />
      </div>
    </section>
  );
};

export default About;
