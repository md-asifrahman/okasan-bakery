import React from "react";
import "./Products.css";



export default function Products() {
  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Our Collection</h2>
        </div>
        <div className="row g-0" >
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
            <button
              type="button"
              className="btn m-2 text-dark active-filter-btn mx-3"
              data-filter="*"
            >
              ALL
            </button>
            <button type="button" className="btn m-2  mx-3" data-filter=".best">
              CAKE
            </button>
            <button type="button" className="btn m-2  mx-3" data-filter=".best2">
              SWEETS
            </button>
            <button type="button" className="btn m-2  mx-3" data-filter=".best3">
              COOKIES
            </button>
          </div>

          <div className="collection-list mt-4 row gx-0 gy-3">
            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best ">
              <div className="collection-img position-relative">
                <img src="images/cake.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Chocolate Cake</p>
                <span className="fw-bold">100৳</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best">
              <div className="collection-img position-relative">
                <img src="images/cheez.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Cheez</p>
                <span className="fw-bold">120৳</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best3">
              <div className="collection-img position-relative">
                <img src="images/burbon.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Burbon</p>
                <span className="fw-bold">৳ 200</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best2">
              <div className="collection-img position-relative">
                <img src="images/chocoicecreame.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Icecream</p>
                <span className="fw-bold">৳ 70</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best">
              <div className="collection-img position-relative">
                <img src="images/cheezcake.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Cheez Cake</p>
                <span className="fw-bold">৳ 120</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best2">
              <div className="collection-img position-relative">
                <img src="images/1.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">cake</p>
                <span className="fw-bold">100tk</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best2">
              <div className="collection-img position-relative">
                <img src="images/2.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">cake</p>
                <span className="fw-bold">tk500</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best3">
              <div className="collection-img position-relative">
                <img src="images/3.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">cake</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best">
              <div className="collection-img position-relative">
                <img src="images/4.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">fruit</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best3">
              <div className="collection-img position-relative">
                <img src="images/6.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">cake</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best">
              <div className="collection-img position-relative">
                <img src="images/5.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Egg cake</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2 box-shadow best3">
              <div className="collection-img position-relative">
                <img src="images/2.jpg" className="w-100" />
                
              </div>
              <div className="text-center">
                <div className="rating mt-3">
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-primary">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-capitalize my-1">Ice cake</p>
                <span className="fw-bold">$ 45.50</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
