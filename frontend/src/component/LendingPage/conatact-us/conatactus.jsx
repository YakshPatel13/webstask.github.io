import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import Nav from '../../Nav/Nav';
import Footer from '../../Footer/Footer';

const ContactUs = () => {
  const [f_name, setf_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [subject, setsubject] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [number, setnumber] = useState(""); 
  const navigate = useNavigate();

  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8089/contactus', { f_name,l_name,subject,email,city,number });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div>
        <Nav />
        <div className="contact-container shadow">
          <div className="row">
            <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="d-flex mt-2">
                    <i className="bi bi-geo-alt"></i>
                    <p className="mt-3 ms-3">Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-telephone-forward"></i>
                    <p className="mt-4 ms-3">Phone : 8888888888</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-envelope"></i>
                    <p className="mt-4 ms-3">Email : contactform@gmail.com</p>
                </div>
            </div>
            <div className="col-md-8 p-5 ">
                <h2>Get in touch</h2>
                <form className="row g-3 contactForm mt-4" onSubmit={handleSubmitContactForm}>
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" value={f_name} onChange={(e) => setf_name(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" value={l_name} onChange={(e) => setl_name(e.target.value)} required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" className="form-control" value={subject} onChange={(e) => setsubject(e.target.value)} required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email Id</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" className="form-control" value={city} onChange={(e) => setcity(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="number" className="form-label">Contact Number</label>
                        <input type="text" className="form-control" value={number} onChange={(e) => setnumber(e.target.value)} required/>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="contact-btn contact-btn-primary mt-3">Submit</button>
                    </div>
                  </form>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default ContactUs;
