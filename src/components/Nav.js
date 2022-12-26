import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <div>
    <nav className= "navbar navbar-expand-lg  navbar-dark bg-dark  shadow-5-strong py-1  shadow p-3">
        <div className= "container">
            <a className= "navbar-brand d-flex justify-content-between align-items-center order-lg-0" to = "/">
                <span className= "text-uppercase fw-lighter ms-2">OKASAN</span>
            </a>

            <div className= "order-lg-2 nav-btns">
                <button type = "button" className= "btn position-relative">
                    <i className= "fa fa-shopping-cart ccart"></i>
                    <span className= "position-absolute top-0 start-100 translate-middle badge ">5</span>
                </button>
                <button type = "button" className= "btn position-relative ccart">
                    <i className= "fa fa-heart"></i>
                    <span className= "position-absolute top-0 start-100 translate-middle badge ">2</span>
                </button>
               
            </div>

            <button className= "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span className= "navbar-toggler-icon"></span>
            </button>

            <div className= "collapse navbar-collapse order-lg-1" id = "navMenu">
                <ul className= "navbar-nav mx-auto text-center">
                    <li className= "nav-item px-2 py-2">
                    <a className="nav-link active text-uppercase" aria-current="page" to="/">Okasan Bakery</a>
                    </li>
                    <li className= "nav-item px-2 py-2">
                        <a className= "nav-link text-uppercase" to = "/product">Products</a>
                    </li>
                    <li className= "nav-item px-2 py-2">
                    <a className="nav-link text-uppercase" to="/about">About Us</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
 
</div>


  )
}
