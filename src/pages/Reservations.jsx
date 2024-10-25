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
      console.log("Fetching times for date:", date); 
      const times = await api.fetchAPI(date); 
      setAvailableTimes(times); 
    };

    
    const today = new Date();
    fetchTimes(today); 
  }, []);

  const handleDateChange = async (selectedDate) => {
    console.log("Selected date in Reservations:", selectedDate); 
    const newAvailableTimes = await api.fetchAPI(selectedDate); 
    setAvailableTimes(newAvailableTimes); 
  };
  const submitForm = async (formData) => {
    const isSuccess = await api.submitAPI(formData);
    if (isSuccess) {
      alert("Reservation submitted successfully!");
      navigate("/confirmed"); 
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
            submitForm={submitForm}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
