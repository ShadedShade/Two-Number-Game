import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
/// TODO: Styles
function Signup() {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [nameReg, setNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const history = useHistory();
    const handleBackClick = () => {
        history.push('/tweets');
    }
    const handleRegisterClick = () => {
        history.push('/login');
    }
    const handleGoToLogInClick = () => {
        history.push('/Login');
    }

    const Register = () => {
        Axios.post('http://localhost:3000/register', {
            username: usernameReg, password: passwordReg,
        }).then(function (response) {
            console.log(response); // Should Redirect to the login or Pop a Alert box
        }).catch(function (error) {
            console.log(error);
        });
    }


    return (
        <section class="container">
            <div class="row d-flex justify-content-center align-items-center bg-row vh-100 w3-animate-top">
                <div class="col-12 bg-box">
                    {/* <!-- TITLE AND BACKBTN SECTION--> */}
                    <div>
                        <a href="" onClick={handleBackClick}>
                            <span><i class="fas fa-arrow-left back pb-3"></i></span>
                        </a>
                        <h2 class="pb-4">Sign Up</h2>
                    </div>
                    {/* <!-- =============================== -->
                    <!-- FORM SECTION --> */}
                    <form class="w3-animate-opacity " style={{opacity: "1.5s"}}>
                        <div class="form-content">
                            <div class="row pb-4">
                                <div class="col-md-6">
                                    <div class="form-group pb-4">
                                        <label for="email">Email Address (Optional)</label>
                                        <input type="email" id="email" class="form-control" value="" />
                                    </div>
                                    <div class="form-group pb-4">
                                        <label for="mobilenum">Mobile Number <span style={{color: "#FD0000"}}>*</span></label>
                                        <div class="input-group mb-0">
                                            <input type="tel" id="mobilenum" class="form-control" aria-describedby="basic-addon2" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}" required />
                                            <div class="input-group-append">
                                                <button class="btn1 btn-outline-secondary" type="button">SEND CODE</button>
                                            </div>
                                        </div>
                                        <small id="mobsmalllabel" class="form-text text-muted">Your mobile number will be your <b>UserID</b>.</small>
                                    </div>
                                    <div class="form-group pb-4">
                                        <label for="mpin">6-Digit MPIN <span style={{color: "#FD0000;"}}>*</span></label>
                                        <input type="password" pattern="[0-9]{6}" id="mpin" class="form-control" maxlength="6" minlength="6" value="" onChange={(e) => {
                                            const re = /^[0-9\b]+$/;
                                            if (e.target.value === '' || re.test(e.target.value)) {
                                                setPasswordReg(e.target.value)
                                            }

                                        }}
                                            required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group pb-4">
                                        <label for="name">Full Name (Optional)</label>
                                        <input type="text" id="name" class="form-control" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="auth">Authentication Code <span style={{color: "#FD0000;"}}>*</span></label>
                                        <input type="text" id="auth" class="form-control" onChange={(e) => {}} onkeypress={(e) =>
                                        {
                                            var ASCIICode = (e.which) ? e.which : e.keyCode
                                            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
                                                return false;
                                            return true;
                                        }} maxlength="6" minlength="6" value="" required />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 gap-2 grp-btn">
                                <button type="submit" class="btn">SIGN UP</button>
                                <div class="vertical"></div>
                                <button class="btnfb facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                                <button class="btnggle google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google</span> </button>
                            </div>
                            <div class="mt-5 login">
                                <p class="mb-0">Already Registered? <a class="CCC" href="login.html">Login</a></p>
                            </div>
                        </div>
                    </form>
                    {/* <!-- =============== --> */}
                </div>
            </div>
        </section>
    );
}
export default Signup;