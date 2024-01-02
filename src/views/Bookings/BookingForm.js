import { useState } from "react";
import moment from "moment";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitData }) => {
  const events = ["Birthday", "Anniversary"];
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [eventType, setEventType] = useState(events[0]);

  const changeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    dispatch(e.target.value);
  };

  const changeTime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const changeGuests = (e) => {
    e.preventDefault();
    setGuests(e.target.value);
  };

  const changeEventType = (e) => {
    e.preventDefault();
    setEventType(e.target.value);
  };

  const sendReservation = (e) => {
    e.preventDefault();
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
        <button onClick={sendReservation}>Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
