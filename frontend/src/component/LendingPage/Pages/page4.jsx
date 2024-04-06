import React from 'react'
import './css/style.css';
import './css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const page4 = () => {
  return (
    <div>
     <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h1 class="mb-4">Our Services</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/download (1).jpg" width="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">Electrician Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/download.jpg" width="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">Plumber Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/carpenter2.jpg" width="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">Carpenter Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/ac_service.jpg" width="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">Ac Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/pest_control.png" width="100%" height="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">Pest Control Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/house_paint_service.png" width="100%" alt=""/>
                        <div class="position-relative p-4 pt-0"><br/>
                            <h4 class="mb-3">House Paint Service</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <NavLink class="small fw-medium">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page4
