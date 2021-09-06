import React, { useEffect, useState } from 'react';
import contactimg from '../img/contact.jpg';



function Contact() {
    return (
        <section id="contact">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-6"> 
                        <div class="col-md-10 mx-auto mt-1 mb-3 contactus">
                            <h5>Contact <span style={{color: "#f36e23"}}>Us</span></h5>
                            <p>Your email address will not be published. Required fieldes are marked as <span style={{color: "#FD0000"}}>*</span> </p>
                        </div>
                        <form action="" class="row g-3 justify-content-center">
                            <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="Enter Email" required/>
                            </div>
                            <div class="col-md-10">
                                <textarea name="" id="" cols="30" rows="5" class="form-control"
                                    placeholder="Enter Message"></textarea>
                            </div>
                            <div class="col-md-10">
                                <button class="shadow btn btn-primary contactbtn">PUBLISH</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <img src={contactimg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;