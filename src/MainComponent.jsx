
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom"; 
import api from "./pages/api";

const initialTimes = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];


function availableTimesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      
      return state; 

    default:
      return state;
  }
}



export default function MainComponent() {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initialTimes
  );
 const navigate = useNavigate(); 
  
  const handleDateChange = (date) => {
    console.log("MainComponent: Updated Date", date);
    dispatch({ type: "UPDATE_TIMES", payload: date });
  };
  console.log("MainComponent props:", {
    availableTimes,
    onDateChange: handleDateChange,
  });

  
 const submitForm =  async(formData) => {
   const isSuccess =  await api.submitAPI(formData); 
   if (isSuccess) {
     alert("Reservation submitted successfully!"); 
     navigate("/confirmed"); 
   } else {
     alert("Failed to submit the reservation."); 
   }
 };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes} 
        onDateChange={handleDateChange} 
        submitForm={submitForm}
      />
    </>
  );
}
