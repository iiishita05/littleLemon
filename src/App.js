import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import MainComponent from "./MainComponent"; 

function App() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
