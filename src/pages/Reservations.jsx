import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Reservation.css";
import BookingForm from "../BookingForm";
import api from "./api";
import { useNavigate } from "react-router-dom";


export default function Reservations() {
  const [availableTimes, setAvailableTimes] = useState([]);

   const navigate = useNavigate();
  useEffect(() => {
    const fetchTimes = async (date) => {
      console.log("Fetching times for date:", date); // Log the date being fetched
      const times = await api.fetchAPI(date); // Pass the Date object directly
      setAvailableTimes(times); // Set the available times in state
    };

    // Fetch times for today's date on component mount
    const today = new Date();
    fetchTimes(today); // Ensure to call the fetchTimes function with a Date object
  }, []);

  const handleDateChange = async (selectedDate) => {
    console.log("Selected date in Reservations:", selectedDate); // Log the selected date
    const newAvailableTimes = await api.fetchAPI(selectedDate); // Fetch available times for the selected date
    setAvailableTimes(newAvailableTimes); // Update available times
  };
  const submitForm = async (formData) => {
    const isSuccess = await api.submitAPI(formData);
    if (isSuccess) {
      alert("Reservation submitted successfully!");
      navigate("/confirmed"); // Call navigate to redirect to the booking confirmed page
    } else {
      alert("Failed to submit the reservation.");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="form-container">
          <h1>Reserve A Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            onDateChange={handleDateChange}
            setAvailableTimes={setAvailableTimes} 
            submitForm={submitForm}// Pass down setAvailableTimes
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
