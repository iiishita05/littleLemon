import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './App.css'


import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Orderonline from "./pages/Orderonline";
import Reservations from "./pages/Reservations";
import ConfirmedBooking from "./pages/ConfirmedBooking";


const root = ReactDOM.createRoot(document.getElementById("root"));

let allroutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order-online",
    element: <Orderonline />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/confirmed",
    element: <ConfirmedBooking />, // Add route for confirmed booking
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
