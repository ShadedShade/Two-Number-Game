import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import '../styles/login-style.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const history = useHistory();
    const handleBackClick = () => {
        history.push('/');
    }
    const handleGoToSignUpClick = () => {
        history.push('/SignUp');
    }
    const handleLoginStepTwoClick = () => {
        console.log("w");
        history.push('/LoginStepTwo'); // go to step 2
    }

    const Login = () => {
        Axios.post('http://localhost:3000/login', {
            username: username,
        }).then((response) => {
            if (response.data.message) {               //  When Invalid
                setLoginStatus(response.data.message) /// set this to local storage, btw THIS IS ONLY TEMPORARY HAHAHAHHA, password should be hashed tho
                console.log(response.data.message);
            } else {                        // When True
               // setLoginStatus(response.data[0])
               // console.log(response);
              //  console.log(response.data[0].mobile);
                sessionStorage.setItem("Userid", response.data[0].mobile);
                console.log("session Storage Userid: " + sessionStorage.getItem("Userid"));
                handleLoginStepTwoClick();

            }
        });
    }
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center bg-row vh-100 w3-animate-zoom">
                <div className="col-md-5 bg-box p-5">
                    {/* <!-- TITLE AND BACKBTN SECTION--> */}
                    <div>
                        <a href="" onClick={handleBackClick}>
                            <span><i className="fas fa-arrow-left back"></i></span>
                        </a>
                        <h2 className="text-center">Login</h2>
                    </div>
                    {/* <!-- =============================== -->
                    <!-- === FORM SECTION === --> */}

                        <div className="mb-4 pb-2 mt-5">
                            <label for="userid">Enter User ID / Mobile Number</label>
                            <input type="text" name="userid" className="form-control" id="userid" onChange={(e) => { setUsername(e.target.value) }}/>
                            <label >{loginStatus}</label>
                        </div>
                        <div className="mt-4 mb-3 d-grid gap-2">
                            <a className="btn" onClick={Login}>NEXT</a>
                        </div>
                        <div className="text-center forgot">
                            <p className="mb-0">Forgot UserID / Mobile Number? Contact our <br/></p>
                            <a className="CCC" href="">Customer Center</a>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="login-or">
                               <hr className="hr-or"/>
                               <span className="span-or">or login in with</span>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4 text-center"> 
                            <span><i className="fab fa-facebook-square px-2"></i></span>
                            <span><i className="fab fa-google-plus-square px-2"></i></span>
                        </div>
                        <div className="text-center mt-3 signup">
                            <p className="mb-0">Don't have an account yet? <a className="CCC" href=""  onClick={handleGoToSignUpClick}>Sign Up</a></p>
                        </div>

                    {/* <!-- =================================== --> */}
                </div>
            </div>
            {/* <!-- == --> */}
        </div>
    );
}

export default Login
