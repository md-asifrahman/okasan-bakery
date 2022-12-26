import React from 'react'
import "./AboutUs.css";



export default function AboutUs() {
  return (
    <>
    <section id="features" className="features">
        <div className="container">
            <div className="row">

                <div className="sec-title text-center mb50 wow " >
                    <h2>We Provides</h2>
                    <div className="devider"> <i className="fa-solid fa-burger"></i></div>
                </div>

                
                <div className="col-md-4 wow fadeInLeft">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="fa-solid fa-burger"></i>
                            
                        </div>

                        <div className="service-desc">
                            <h3>Hyginic Food</h3>
                            <p>“By choosing healthy over skinny you are choosing self-love over self-judgement.” – Steve Maraboli.</p>
                        </div>
                    </div>
                </div>
              

                
                <div className="col-md-4 wow fadeInUp">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="fa-solid fa-burger"></i>
                        </div>

                        <div className="service-desc">
                            <h3>Homemade Foods</h3>
                            <p>A recipe has no soul, we bring soul to the recipe</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-md-4 wow fadeInRight ">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="fa-solid fa-truck"></i>
                        </div>

                        <div className="service-desc">
                            <h3>Cash On Delivery</h3>
                            <p>We provide cash on delivery services.</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>

</>
  )
}
