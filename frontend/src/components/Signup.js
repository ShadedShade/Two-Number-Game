import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import '../styles/signup-style.css'

/// TODO: Styles
function Signup() {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [nameReg, setNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [status, setStatus] = useState('');
    const history = useHistory();
    const handleBackClick = () => {
        history.push('/');
    }
    const handleRegisterClick = () => {
        history.push('/login');
    }
    const handleGoToLogInClick = () => {
        history.push('/Login');
    }

    const Register = () => {
        Axios.post('http://localhost:3000/register', {
            username: usernameReg, password: passwordReg,email:emailReg,name:nameReg
        }).then(function (response) {
            if(authCode == "")
            {
                
                console.log("Invalid AuthCode");
                setStatus("Invalid AuthCode");
                return;
            }
            if(response.message)
            {
                console.log("Account already Exists")
            }

            if(response.result)
            {
                handleRegisterClick();
            }

            console.log(response); // Should Redirect to the login or Pop a Alert box, or Alert that alerts IIIIIIIFFFFFFF user already exist
        }).catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center bg-row vh-100 w3-animate-top">
                <div className="col-12 bg-box">
                    {/* <!-- TITLE AND BACKBTN SECTION--> */}
                    <div>
                        <a href="" onClick={handleBackClick}>
                            <span><i className="fas fa-arrow-left back pb-3"></i></span>
                        </a>
                        <h2 className="pb-4">Sign Up</h2>
                    </div>
                    {/* <!-- =============================== -->
                    <!-- FORM SECTION --> */}
                    <form className="w3-animate-opacity " style={{ opacity: "1.5s" }}>
                        <div className="form-content">
                            <div className="row pb-4">
                                <div className="col-md-6">
                                    <div className="form-group pb-4">
                                        <label for="email">Email Address (Optional)</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                    <div className="form-group pb-4">
                                        <label for="mobilenum">Mobile Number <span style={{ color: "#FD0000" }}>*</span></label>
                                        <div className="input-group mb-0">
                                            <input type="tel" id="mobilenum" className="form-control" aria-describedby="basic-addon2" minlength="11" maxlength="11" placeholder="09XXXXXXXXX" pattern="[0-9]{2}[0-9]{9}" value={usernameReg}
                                                onChange={(e) => {
                                                    const re = /^[0-9\b]+$/;
                                                    //  console.log(e.target.value);
                                                    if (re.test(e.target.value) || e.target.value === '') {
                                                        setUsernameReg(e.target.value)
                                                        console.log(e.target.value)
                                                    }
                                                    else {

                                                    }
                                                }}

                                                required />
                                            <div className="input-group-append">
                                                <button className="btn1 btn-outline-secondary" type="button">SEND CODE</button>
                                            </div>
                                        </div>
                                        <small id="mobsmalllabel" className="form-text text-muted">Your mobile number will be your <b>UserID</b>.</small>
                                    </div>
                                    <div className="form-group pb-4">
                                        <label for="mpin">6-Digit MPIN <span style={{ color: "#FD0000;" }}>*</span></label>
                                        <input type="password" pattern="[0-9]{6}" id="mpin" className="form-control" maxlength="6" minlength="6" value={passwordReg} onChange={(e) => {
                                        
                                            const re = /^[0-9\b]+$/;
                                            //  console.log(e.target.value);
                                            if (re.test(e.target.value) || e.target.value === '') {
                                                setPasswordReg(e.target.value)
                                                console.log(e.target.value)
                                            }
                                            else {

                                            }

                                        }}
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group pb-4">
                                        <label for="name">Full Name (Optional)</label>
                                        <input type="text" id="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="auth">Authentication Code <span style={{ color: "#FD0000;" }}>*</span></label>
                                        <input type="text" id="auth" className="form-control" onChange={(e) => {
                                            const re = /^[0-9\b]+$/;
                                            //  console.log(e.target.value);
                                            if (re.test(e.target.value) || e.target.value === '') {
                                                setAuthCode(e.target.value)
                                                console.log(e.target.value)
                                            }
                                            else {

                                            }
                                        }} maxlength="6" minlength="6" value={authCode} required />
                                        <label >{status} </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 gap-2 grp-btn">
                                <button type="button" onClick={Register} className="btn">SIGN UP</button>
                                <div className="vertical"></div>
                                <button className="btnfb facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                                <button className="btnggle google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google</span> </button>
                            </div>
                            <div className="mt-5 login">
                                <p className="mb-0">Already Registered? <a className="CCC" type="button" onClick={handleGoToLogInClick}>Login</a></p>
                            </div>
                        </div>
                    </form>
                    {/* <!-- =============== --> */}
                </div>
            </div>
        </div>
    );
}
export default Signup;