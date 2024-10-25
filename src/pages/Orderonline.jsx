import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Orderonline.css"; // Importing the CSS file for styling

export default function Orderonline() {
  return (
    <>
      <Header />
      <div className="order-online-container">
        <h1 style={{ textAlign: "center" }}>Order Online</h1>
        {/* Appetizers Section */}
        <div className="order-section">
          <h2>Appetizers</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Fried Calamari</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Mozzarella Sticks</span>
              <span className="item-price">$8</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Bruschetta</span>
              <span className="item-price">$9</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Spinach and Artichoke Dip</span>
              <span className="item-price">$10</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Wings (6 pc)</span>
              <span className="item-price">$8</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Onion Rings</span>
              <span className="item-price">$6</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
        {/* Salads Section */}
        <div className="order-section">
          <h2>Salads</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Caesar Salad</span>
              <span className="item-price">$10</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Greek Salad</span>
              <span className="item-price">$11</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Spinach Salad</span>
              <span className="item-price">$9</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Chicken Caesar Salad</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Taco Salad</span>
              <span className="item-price">$13</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
        {/* Pizza Section */}
        <div className="order-section">
          <h2>Pizza</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Margherita Pizza</span>
              <span className="item-price">$10</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Pepperoni Pizza</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">BBQ Chicken Pizza</span>
              <span className="item-price">$14</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Meat Lover's Pizza</span>
              <span className="item-price">$16</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Veggie Pizza</span>
              <span className="item-price">$13</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
        {/* Seafood Section */}
        <div className="order-section">
          <h2>Seafood</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Grilled Salmon</span>
              <span className="item-price">$18</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Shrimp Scampi</span>
              <span className="item-price">$16</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Fish Tacos</span>
              <span className="item-price">$14</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Crab Legs</span>
              <span className="item-price">$20</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Lobster Roll</span>
              <span className="item-price">$25</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
        {/* Burgers Section */}
        <div className="order-section">
          <h2>Burgers</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Classic Burger</span>
              <span className="item-price">$8</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Cheeseburger</span>
              <span className="item-price">$9</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Veggie Burger</span>
              <span className="item-price">$7</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Bacon Cheeseburger</span>
              <span className="item-price">$11</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Mushroom Swiss Burger</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
        {/* Sandwiches Section */}
        <div className="order-section">
          <h2>Sandwiches</h2>
          <ul className="order-list">
            <li className="order-item">
              <span className="item-name">Club Sandwich</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Turkey Sandwich</span>
              <span className="item-price">$10</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Ham and Cheese Sandwich</span>
              <span className="item-price">$9</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Grilled Chicken Sandwich</span>
              <span className="item-price">$11</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">BLT Sandwich</span>
              <span className="item-price">$8</span>
              <button className="order-button">Order Now</button>
            </li>
            <li className="order-item">
              <span className="item-name">Roast Beef Sandwich</span>
              <span className="item-price">$12</span>
              <button className="order-button">Order Now</button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
