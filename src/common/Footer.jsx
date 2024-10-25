import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-item">
          <img
            src="https://r2.erweima.ai/imgcompressed/img/compressed_f4adc66aa03b9e3a0b7726e9f52318d9.webp"
            alt=""
          />
        </div>
        <div className="footer-container-item">
          <h5>DoorMat Navigation</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-container-item">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
        <div className="footer-container-item">
          <h5>Social Media</h5>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">FaceBook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
