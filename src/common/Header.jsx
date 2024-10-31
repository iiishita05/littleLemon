import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVy0S0XxcWUagIpu2oy8Pn3PlsrkBQ9lQAQA&s"
          alt="Little Lemon Logo"
        />
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <ul className={`nav-list ${isSidebarOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="nav-link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order-online" className="nav-link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
