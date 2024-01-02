import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";
import Bookings from "../views/Bookings";
import ConfirmedBooking from "../views/Bookings/ConfirmedBooking";
import ComingSoon from "./ComingSoon";
import Error from "./Error";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/menu" element={<ComingSoon />} />
          <Route path="/order" element={<ComingSoon />} />
          <Route path="/login" element={<ComingSoon />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
