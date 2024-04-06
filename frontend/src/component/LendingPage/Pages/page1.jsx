import React from 'react';
import './css/style.css';
import './css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
const Page1 = () => {
  return (
    <div>
    <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative" >
                <img class="img-fluid" src="img/hero-banner.jpg" width="100%" alt=""/>
                <div class="owl-carousel-inner">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h1 class="display-2 text-white animated slideInDown">Provide The Service To The Client</h1>
                                <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <NavLink to="/" > <a class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a></NavLink> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Page1;
