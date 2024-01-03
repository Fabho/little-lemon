import { useState } from "react";
import moment from "moment";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitData }) => {
  const events = ["Birthday", "Anniversary"];
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [eventType, setEventType] = useState(events[0]);

  // Error state
  const [errorDate, setErrorDate] = useState(false);
  const [errorGuests, setErrorGuests] = useState(false);

  const changeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    dispatch(e.target.value);

    const today = moment().format("YYYY-MM-DD");
    const userSelection = moment(e.target.value).format("YYYY-MM-DD");

    userSelection < today ? setErrorDate(true) : setErrorDate(false);
  };

  const changeTime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const changeGuests = (e) => {
    e.preventDefault();
    setGuests(e.target.value);

    const val = parseInt(e.target.value);

    typeof val === "number" && val > 0 && val <= 10
      ? setErrorGuests(false)
      : setErrorGuests(true);
  };

  const changeEventType = (e) => {
    e.preventDefault();
    setEventType(e.target.value);
  };

  const sendReservation = (e) => {
    e.preventDefault();

    if (errorDate || errorGuests || availableTimes.length <= 0) return;

    submitData({ date, time, guests, eventType });
  };

  return (
    <>
      <form onSubmit={sendReservation} className="container booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          required={true}
          onChange={changeDate}
        />
        {errorDate ? <span id="error-date">Choose a valid date</span> : null}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          required={true}
          onChange={changeTime}
        >
          {availableTimes.map((time, i) => (
            <option key={i}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          required={true}
          onChange={changeGuests}
        />
        {errorGuests ? (
          <span id="error-guests">
            Guests must be greater than 0 and less or equal than 10
          </span>
        ) : null}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={eventType}
          required={true}
          onChange={changeEventType}
        >
          {events.map((ev) => (
            <option key={ev}>{ev}</option>
          ))}
        </select>
        <button
          aria-label="On Click"
          onClick={sendReservation}
          className="rounded-button"
        >
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
