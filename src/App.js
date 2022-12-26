import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Nav";
import React from "react";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
