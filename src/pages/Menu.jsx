import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";


export default function Menu() {
  return (
    <>
      <Header />

      <h1>Menu Page</h1>
      <div className="menu-container">
        {/* Menu items */}
        <div className="menu-item">
          <tr>
            <th>Items</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Burger</td>
            <td>$5</td>
          </tr>
          <tr>
            <td>Pizza</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Fries</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Soda</td>
            <td>$2</td>
          </tr>
        </div>
      </div>
      <Footer />
    </>
  );
}
