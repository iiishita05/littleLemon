import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Menu.css"; 

export default function Menu() {
  return (
    <>
      <Header />
      <div className="menu-container">
        <h1 style={{ textAlign: "center" }}>Menu</h1>{" "}
     
        <div className="menu-section">
          <h2>Appetizers</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Fried Calamari</span>
              <span className="item-price">$12</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Mozzarella Sticks</span>
              <span className="item-price">$8</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Bruschetta</span>
              <span className="item-price">$9</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Spinach and Artichoke Dip</span>
              <span className="item-price">$10</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Wings (6 pc)</span>
              <span className="item-price">$8</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Onion Rings</span>
              <span className="item-price">$6</span>
            </li>
          </ul>
        </div>
        {/* Salads Section */}
        <div className="menu-section">
          <h2>Salads</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Caesar Salad</span>
              <span className="item-price">$10</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Greek Salad</span>
              <span className="item-price">$11</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Spinach Salad</span>
              <span className="item-price">$9</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Chicken Caesar Salad</span>
              <span className="item-price">$12</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Taco Salad</span>
              <span className="item-price">$13</span>
            </li>
          </ul>
        </div>
        {/* Pizza Section */}
        <div className="menu-section">
          <h2>Pizza</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Margherita Pizza</span>
              <span className="item-price">$10</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Pepperoni Pizza</span>
              <span className="item-price">$12</span>
            </li>
            <li className="menu-item">
              <span className="item-name">BBQ Chicken Pizza</span>
              <span className="item-price">$14</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Meat Lover's Pizza</span>
              <span className="item-price">$16</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Veggie Pizza</span>
              <span className="item-price">$13</span>
            </li>
          </ul>
        </div>
        {/* Seafood Section */}
        <div className="menu-section">
          <h2>Seafood</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Grilled Salmon</span>
              <span className="item-price">$18</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Shrimp Scampi</span>
              <span className="item-price">$16</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Fish Tacos</span>
              <span className="item-price">$14</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Crab Legs</span>
              <span className="item-price">$20</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Lobster Roll</span>
              <span className="item-price">$25</span>
            </li>
          </ul>
        </div>
        {/* Burgers Section */}
        <div className="menu-section">
          <h2>Burgers</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Classic Burger</span>
              <span className="item-price">$8</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Cheeseburger</span>
              <span className="item-price">$9</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Veggie Burger</span>
              <span className="item-price">$7</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Bacon Cheeseburger</span>
              <span className="item-price">$11</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Mushroom Swiss Burger</span>
              <span className="item-price">$12</span>
            </li>
          </ul>
        </div>
        {/* Sandwiches Section */}
        <div className="menu-section">
          <h2>Sandwiches</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Club Sandwich</span>
              <span className="item-price">$12</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Turkey Sandwich</span>
              <span className="item-price">$10</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Ham and Cheese Sandwich</span>
              <span className="item-price">$9</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Grilled Chicken Sandwich</span>
              <span className="item-price">$11</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Reuben Sandwich</span>
              <span className="item-price">$13</span>
            </li>
          </ul>
        </div>
        {/* Drinks Section */}
        <div className="menu-section">
          <h2>Drinks</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Soda</span>
              <span className="item-price">$2</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Iced Tea</span>
              <span className="item-price">$3</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Lemonade</span>
              <span className="item-price">$3</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Coffee</span>
              <span className="item-price">$2</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Juice</span>
              <span className="item-price">$4</span>
            </li>
          </ul>
        </div>
        {/* Desserts Section */}
        <div className="menu-section">
          <h2>Desserts</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <span className="item-name">Cheesecake</span>
              <span className="item-price">$6</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Chocolate Cake</span>
              <span className="item-price">$7</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Tiramisu</span>
              <span className="item-price">$8</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Ice Cream</span>
              <span className="item-price">$5</span>
            </li>
            <li className="menu-item">
              <span className="item-name">Brownie Sundae</span>
              <span className="item-price">$7</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
