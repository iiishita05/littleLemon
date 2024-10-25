import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const navigateToHome = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="confirmation-page-wrapper">
      <div className="confirmation-container">
        <h1>Booking Confirmed</h1>
        <p>
          Your booking has been successfully confirmed. We look forward to
          seeing you!
        </p>
        <button onClick={navigateToHome}>Go to Homepage</button>
      </div>
    </div>
  );
}
