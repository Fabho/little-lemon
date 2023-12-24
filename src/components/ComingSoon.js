import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <FontAwesomeIcon icon={faWrench} size="5x" />
      <h1>Coming soon!</h1>
    </div>
  );
};

export default ComingSoon;
