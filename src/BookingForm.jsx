import React, { useState } from "react";
import AvailableTimes from "./AvailableTimes";
import api from "./pages/api";


export default function BookingForm({
  availableTimes,
  onDateChange,
  setAvailableTimes,
  submitForm
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("");
const [isFormValid, setIsFormValid] = useState(false);


  const validateForm = () => {
    const isValid = date && time && guest > 0 && occasion;
    setIsFormValid(isValid);
  };

  
  

  // Inside BookingForm.jsx
 const handleMessage = async (e) => {
   e.preventDefault();
   const formData = { date, time, guest, occasion };
  

   // Call the submitForm function from props
   await submitForm(formData); // Make sure to use props to access submitForm

  

   // Reset form fields
   setDate("");
   setTime("");
   setGuest(1);
   setOccasion("");
 };

  const handleDateChange = async (e) => {
    const selectedDate = new Date(e.target.value); // Convert to Date object
    setDate(selectedDate);

    console.log("BookingForm: Date selected", selectedDate); // Log the selected date

    if (typeof onDateChange === "function") {
      await onDateChange(selectedDate); // Pass the Date object to onDateChange
    }

    // Fetch available times based on the selected date using the API
    const times = await api.fetchAPI(selectedDate); // Use the Date object
    setAvailableTimes(times); 
    // Update available times
    validateForm();
  };

  const handleGuestChange = (e) => {
    const value = Number(e.target.value);
    setGuest(value);
    validateForm(); // Revalidate form on field change
  };

  return (
    <form className="form-container-z" onSubmit={handleMessage}>
      <label>Date</label>
      <input
        type="date"
        value={date ? date.toISOString().split("T")[0] : ""}
        required
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        aria-label="Select a date for reservation"
      />

      <AvailableTimes
        time={time}
        setTime={setTime}
        availableTimes={availableTimes}
      />
      <label>Number of Guests</label>
      <input
        type="number"
        value={guest}
        required
        aria-required="true"
        onChange={handleGuestChange}
        min={1}
        max={20}
        aria-label="Enter the number of guests"
      />
      <label>Occasion</label>
      <select
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Select the occasion for your reservation"
      >
        <option value="">Select Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="engagement">Engagement</option>
        <option value="other">Other</option>
      </select>
      <button type="submit" aria-label="Reserve a table on click">
        Reserve
      </button>
    </form>
  );
}
