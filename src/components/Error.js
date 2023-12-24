import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faTriangleExclamation} size="5x" />
      <h1>Not Found!</h1>
    </div>
  );
};

export default Error;
