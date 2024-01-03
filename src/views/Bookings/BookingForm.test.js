import { render, screen, fireEvent } from "@testing-library/react";
import moment from "moment";
import BookingForm from "./BookingForm";

describe("Booking tests", () => {
  const availableTimes = ["17:00", "17:30", "18:00", "18:30"];
  const dispatch = jest.fn();
  const submitData = jest.fn();

  test("Should render all form fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitData={submitData}
      />
    );

    const dateField = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsField = screen.getByLabelText("Number of guests");
    const occasionField = screen.getByLabelText("Occasion");

    expect(dateField).toBeInTheDocument();
    expect(dateField).toHaveAttribute("type", "date");

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "res-time");

    expect(guestsField).toBeInTheDocument();
    expect(guestsField).toHaveAttribute("type", "number");

    expect(occasionField).toBeInTheDocument();
    expect(occasionField).toHaveAttribute("id", "occasion");
  });

  test("Should send default form values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitData={submitData}
      />
    );

    const reservationButton = screen.getByRole("button");
    fireEvent.click(reservationButton);

    expect(reservationButton).toBeInTheDocument();
    expect(submitData).toHaveBeenCalledWith({
      date: moment().format("YYYY-MM-DD"),
      time: availableTimes[0],
      guests: 1,
      eventType: "Birthday",
    });
  });
});
