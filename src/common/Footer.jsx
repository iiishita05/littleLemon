import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXb59PaR-ycKvI44CuNiDGriUjLwHjO9AFyA&s"
            alt=""
          />
        </div>
        <div className="footer-container-item">
          <h5>DoorMat Navigation</h5>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
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
