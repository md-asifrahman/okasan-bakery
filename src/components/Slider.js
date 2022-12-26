import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img className="d-block w-100" src="images/home.jpg" alt="First slide" />
          <div className="carousel-caption mx-auto ">
            <h5>When you eat food with your family and friends, it always tastes better and everything tastes good when you're hungry.</h5>
            <button type="button" className="btn btn-success">Order Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
