import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../api";

const Bookings = () => {
  const navigate = useNavigate();

  const initializeTimes = () => {
    const data = fetchAPI(new Date());
    return data;
  };

  const updateTimes = (availableTimes, date) => {
    const times = fetchAPI(new Date(date));
    if (times) return times;
    else return availableTimes;
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitData = (formData) => {
    const submitted = submitAPI(formData);

    if (submitted) navigate("/confirmed");
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitData={submitData}
      />
    </>
  );
};

export default Bookings;
