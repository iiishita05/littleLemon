import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Date label in BookingForm", () => {
  render(<BookingForm availableTimes={[]} submitForm={jest.fn()} />);
  screen.debug(); // Check what is rendered
  const dateLabel = screen.getByLabelText("Select a date for reservation");
  expect(dateLabel).toBeInTheDocument();
});

test("Renders the Number of Guests label in BookingForm", () => {
  render(<BookingForm availableTimes={[]} submitForm={jest.fn()} />);
  screen.debug(); // Check what is rendered
  const guestLabel = screen.getByText("Number of Guests"); // Correct label text
  expect(guestLabel).toBeInTheDocument();
});

test("Renders the Occasion label in BookingForm", () => {
  render(<BookingForm availableTimes={[]} submitForm={jest.fn()} />);
  screen.debug(); // Check what is rendered
  const occasionLabel = screen.getByLabelText(
    "Select the occasion for your reservation"
  );
  expect(occasionLabel).toBeInTheDocument();
});
