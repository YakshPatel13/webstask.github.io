import React from 'react'
import './css/style.css';
import './css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const page6 = () => {
  return (
    <div>
       <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <h6 class="text-primary">Team Member</h6>
                <h1 class="mb-4">Experienced Team Members</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-1.jpg" alt=""/>
                            <div class="team-social w-25">
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-facebook-f"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-twitter"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-instagram"></i></a></NavLink>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.3s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-2.jpg" alt=""/>
                            <div class="team-social w-25">
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-facebook-f"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-twitter"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-instagram"></i></a></NavLink>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-3.jpg" alt=""/>
                            <div class="team-social w-25">
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-facebook-f"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-twitter"></i></a></NavLink>
                                <NavLink><a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"><i class="fab fa-instagram"></i></a></NavLink>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page6
