import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import BookingPage from "./BookingPage";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
