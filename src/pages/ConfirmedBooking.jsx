import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const location = useLocation(); // To retrieve passed state
  const { date, time } = location.state || {}; // Extract date and time from state
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-page-wrapper">
      <div className="confirmation-container">
        <h1>Booking Confirmed</h1>
        <p>
          Your booking has been successfully confirmed for{" "}
          {date ? date.toLocaleDateString() : "N/A"} at {time || "N/A"}. We look
          forward to seeing you!
        </p>
        <button onClick={navigateToHome}>Go to Homepage</button>
      </div>
    </div>
  );
}
