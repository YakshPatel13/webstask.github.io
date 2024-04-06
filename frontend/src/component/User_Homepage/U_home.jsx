import React, { useState } from "react";
import './U_home.css';
import Foot from '../Footer/Footer.jsx';
import blog1 from './images/blog-1.jpg';
import logo from './images_Services/logo.png';
import plumber from './images_Services/plumber.jpg';
import  electrician from './images_Services/electrician.jpg';
import acser from  './images_Services/ac_ser.jpg';
// import cleaner from  './images_Services/cleaner.jpg';
import cl2 from  './images_Services/cleaner.png';
import paint from  './images_Services/paint.png';
import pest_ctrl from  './images_Services/pest_ctrl.png';

import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlinePriceCheck } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaComments } from "react-icons/fa";



function User_home() {
    const [searchText, setSearchText] = useState("")
    const handleSearch = (event) => {
      setSearchText(event.target.value)
    }

  return (
  <>
<header class="header" data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>

      <a href="#" class="logo">
        <img src={logo} alt="360 logo" />
      </a>

      <nav class="Usernavbar" data-Usernavbar>
        <ul class="Usernavbar-list">

          <li>
            <a href="#home" class="Usernavbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#featured-car" class="Usernavbar-link" data-nav-link>Services</a>
          </li>

          <li>
            <a href="#" class="Usernavbar-link" data-nav-link>About us</a>
          </li>

          <li>
            <a href="#blog" class="Usernavbar-link" data-nav-link>Blog</a>
          </li>

        </ul>
      </nav>

      <div class="header-actions">

        <div class="header-contact">
          <a href="tel:88002345678" class="contact-link">8 800 234 56 78</a>

          <span class="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
        </div>

        <a href="#featured-car" class="Userbuttons" aria-labelledby="aria-label-txt">
          <ion-icon name="car-outline"></ion-icon>

          <span id="aria-label-txt">Explore Services</span>
        </a>

        <a href="#" class="Userbuttons user-Userbuttons" aria-label="Profile">
          <FaRegUser />
        </a>

        <button class="nav-toggle-Userbuttons" data-nav-toggle-Userbuttons aria-label="Toggle Menu">
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </button>

      </div>

    </div>
  </header>
  <section class="section hero" id="home">
        <div class="container">

          <div class="hero-content">
            <h2 class="h1 hero-title">What do you need?</h2>

            <p class="hero-text">
              We got your services covered
            </p>
          </div>

          <div class="hero-banner"></div>

          <form action="" class="hero-form">

            <div class="input-wrapper">
              <label for="input-1" class="input-label">Search Service</label>

              <input type="text" name="service" id="input-1" class="input-field"
                placeholder="Service"/>
            </div>

            <div class="input-wrapper">
              <label for="input-2" class="input-label">How Much ?</label>

              <input type="text" name="price" id="input-2" class="input-field" placeholder="Amount in INR"/>
            </div>

            <div class="input-wrapper">
              <label for="input-3" class="input-label">Date ?</label>

              <input type="text" name="Date" id="input-3" class="input-field" placeholder="Type in date"/>
            </div>

            <button type="submit" class="Userbuttons">Search</button>

          </form>

        </div>
      </section>





      {/* <!-- 
        - #FEATURED CAR
      --> */}

      <section class="section featured-car" id="featured-car">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="h2 section-title">Featured Services</h2>

            <a href="#" class="featured-car-link">
              <span>View more</span>

              <FaArrowRightLong />

            </a>
          </div>

          <ul class="featured-car-list">
            <li>
              <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={plumber} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Plumber</a>
                    </h3>
                    <data class="verifi" value="2021">Verified</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={electrician} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Electrician</a>
                    </h3>
                    <data class="verifi" value="2021">Verified</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={acser} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">AC service</a>
                    </h3>
                    <data class="verifi" value="2021">Verified</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={cl2} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Cleaner</a>
                    </h3>
                    <data class="verifi" value="2021">Verified</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={paint} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Painter</a>
                    </h3>
                    <data class="nverifi" value="2021">Pending</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="featured-car-card">
                <figure class="card-banner">
                  <img src={pest_ctrl} loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>
                <div class="card-content">
                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Pest Control</a>
                    </h3>
                    <data class="verifi" value="2021">Verified</data>
                  </div>
                  <ul class="card-list">
                    <li class="card-list-item">
                      <span class="card-item-text">Ahemdabad</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Naroda</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">Timings :</span>
                    </li>
                    <li class="card-list-item">
                      <span class="card-item-text">8 AM - 7 PM</span>
                    </li>
                  </ul>
                  <div class="card-price-wrapper">
                    <p class="card-price">
                      <strong>500</strong> / visit
                    </p>
                    <button class="Userbuttons fav-Userbuttons" aria-label="Add to favourite list">
                      <FaShoppingCart />
                    </button>
                    <button class="Userbuttons">Hire Now</button>
                  </div>
                </div>
              </div>
            </li>

          </ul>

        </div>
      </section>





      {/* <!-- 
        - #GET START
      --> */}

      <section class="section get-start">
        <div class="container">

          <h2 class="h2 section-title">Get started with 4 simple steps</h2>

          <ul class="get-start-list">

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-1">
                  <IoPersonCircle />
                </div>

                <h3 class="card-title">Create a profile</h3>

                <p class="card-text">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure.
                </p>

                <a href="#" class="card-link">Get started</a>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-2">
                  <FaSearch />
                </div>

                <h3 class="card-title">Tell us what service you want</h3>

                <p class="card-text">
                  Various services are provided by us. Your comfort is what we value.
                </p>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-3">
                  <MdOutlinePriceCheck />
                </div>

                <h3 class="card-title">Match the price</h3>

                <p class="card-text">
                 Affordable services at lower pricing right at your door step. one click and we are there for you.
                </p>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-4">
                <AiOutlineSelect/> 
                </div>

                <h3 class="card-title">Make a deal</h3>

                <p class="card-text">
                 Hire our professioanl and verified helpers. At your local pricing. You need help we are here  for you!
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>





      {/* <!-- 
        - #BLOG
      --> */}

      <section class="section blog" id="blog">
        <div class="container">

          <h2 class="h2 section-title">Our Blog</h2>

          <ul class="blog-list has-scrollbar">

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog1} alt="Opening of new offices of the company" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="Userbuttons card-badge">Business</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">Top services in your area  for a successful business opening.</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                    <CiCalendarDate />

                      <time datetime="2022-01-14">Date</time>
                    </div>

                    <div class="comments">
                      <FaComments />

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog1} alt="What cars are most vulnerable" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="Userbuttons card-badge">Service</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">What did kantaben do to be so effective?</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                    <CiCalendarDate />

                      <time datetime="2022-01-14">Date</time>
                    </div>

                    <div class="comments">
                      <FaComments />

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog1} alt="Statistics showed which average age" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="Userbuttons card-badge">Service</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">How to fix pipes? Dont know? here is how you can fix it</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                    <CiCalendarDate />

                      <time datetime="2022-01-14">Date</time>
                    </div>

                    <div class="comments">
                    <FaComments />

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog1} alt="What´s required when renting a car?" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="Userbuttons card-badge">Questions</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">Is our helpers verified ? Read to know how we do it!</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                    <CiCalendarDate />

                      <time datetime="2022-01-14">Date</time>
                    </div>

                    <div class="comments">
                    <FaComments />

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog1} alt="New rules for handling our cars" loading="lazy" 
                      class="w-100"/>
                  </a>

                  <a href="#" class="Userbuttons card-badge">Opportunity</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">What are most visited services in your area ?</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                    <CiCalendarDate />

                      <time datetime="2022-01-14">Date</time>
                    </div>

                    <div class="comments">
                    <FaComments />

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <section>
        <Foot />
      </section>
  </>

)
}

export default User_home;