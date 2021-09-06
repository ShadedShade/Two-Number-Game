import React, { useState } from "react";
import Axios from 'axios';
/// TODO: Styles
function Signup() {

    const [passwordReg, setPasswordReg] = useState('');


    return (
        <section>
                <a href="landingpage.html">
                    <span><i class="fas fa-arrow-left back"> Back</i></span>
                </a>
                <section class="container">
            <div class="row d-flex justify-content-center align-items-center bg-row">
                <div class="col-12 bg-box">
                    <h3>Sign Up</h3>
                    <form>
                        <div class="form-content">
                            <div class="row pb-4">
                                <div class="col-md-6">
                                    <div class="form-group pb-4">
                                        <label for="email">Email Address (Optional)</label>
                                        <input type="email" id="email" class="form-control" value=""/>
                                    </div>
                                    <div class="form-group pb-4">
                                        <label for="mobilenum">Mobile Number <span style={{color: "#FD0000"}}>*</span></label>
                                        <div class="input-group mb-0">
                                            <input type="tel" id="mobilenum" class="form-control" aria-describedby="basic-addon2" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}" required/>
                                            <div class="input-group-append">
                                              <button class="btn1 btn-outline-secondary" type="button">SEND CODE</button>
                                            </div>
                                        </div>
                                        <small id="mobsmalllabel" class="form-text text-muted">Your mobile number will be your <b>UserID</b>.</small>
                                    </div>
                                    <div class="form-group pb-4">
                                        
                                        <label for="mpin">6-Digit MPIN <span style={{color: "#270a0a"}}>*</span></label>
                                        <input type="password" pattern="[0-9]{6}" id="mpin" class="form-control" maxlength="6" minlength="6" value="" onChange={(e) => 
                                            { 
                                                const re = /^[0-9\b]+$/;
                                                if (e.target.value === '' || re.test(e.target.value)) {
                                                    setPasswordReg(e.target.value)                                                        
                                                 }

                                            }} 
                                            required/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group pb-4">
                                        <label for="name">Full Name (Optional)</label>
                                        <input type="text" id="name" class="form-control" value=""/>
                                    </div>
                                    <div class="form-group">
                                        <label for="auth">Authentication Code <span style={{color: "#FD0000;"}}>*</span></label>
                                        <input type="text" id="auth" class="form-control" onkeypress="return onlyNumberKey(event)" maxlength="6" minlength="6" value="" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="grp-btn">
                                <button type="submit" class="btn">SIGN UP</button>
                                <div class = "vertical"></div>
                                <button class="btnfb facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                                <button class="btnggle google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google</span> </button>
                            </div>
                            <div class="mt-5 signup">
                                <p class="mb-0">Already Registered? <a class="CCC" href="login.html">Login</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </section>
    );
}
export default Signup;