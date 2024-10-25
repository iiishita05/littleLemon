// AvailableTimes.jsx
import React from "react";

export default function AvailableTimes({ availableTimes, time, setTime }) {
  return (
    <>
      <label>Time</label>
      <select required value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        {availableTimes && availableTimes.length > 0 ? (
          availableTimes.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No available times
          </option>
        )}
      </select>
    </>
  );
}
