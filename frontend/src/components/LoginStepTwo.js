import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import PinInput from "react-pin-input";

import Axios from 'axios';
import '../styles/login-step2-style.css'


sessionStorage.setItem("mpins", "");
function LoginStepTwo() {
    const username = sessionStorage.getItem("Userid");
    const [password, setPassword] = useState('');
    const history = useHistory();



    const handleBackClick = () => {
        history.push('/');
    }
    const handleGoToSignUpClick = () => {
        history.push('/SignUp');
    }
    const handleLoginStepTwoClick = () => {
        history.push('/logintwo'); // go to step 2
    }
    function clickEvent(first, last) {
        if (first.value.length) {
            document.getElementById(last).focus();
        }
    }
    let addPin = (val) => {
        let currPin = sessionStorage.getItem("mpins");
        currPin.concat(val);
        sessionStorage.setItem("mpins", currPin);

        console.log(currPin);
        currPin.concat(val);
        setPassword(currPin);
        console.log("Pin: " + val);
    }

    const handleFocus = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        if (e.target.nextSibling)
            e.target.nextSibling.focus();
    }

    const Login = () => {
        Axios.post('http://localhost:3000/login', {
            username: username, password: password
        }).then((response) => {
            if (response.data.message) {               //  When Invalid
                // setLoginStatus(response.data.message) /// set this to local storage, btw THIS IS ONLY TEMPORARY HAHAHAHHA, password should be hashed tho
                console.log(response.data.message);
            } else {                        // When True
                // setLoginStatus(response.data[0])
                console.log(response);
                console.log(response.data[0].mobile);
                sessionStorage.setItem("Userid", response.data[0].mobile);
                console.log("session Storage Userid: " + sessionStorage.getItem("Userid"));

            }
        });
    }
    return (

        <section class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center bg-row vh-100 w3-animate-right">
                <div class="col-md-5 bg-box">
                    {/* <!-- TITLE AND BACKBTN SECTION--> */}
                    <div>
                        <a type="button" onClick={handleBackClick}>
                            <span><i class="fas fa-arrow-left back"></i></span>
                        </a>
                        <h2 class="text-center">Login</h2>
                    </div>
                    {/* <!-- =========================== -->
                <!-- === FORM SECTION ===== --> */}
                    <form action="">
                        <div class="col-md-12 bg-box width-100">
                            <div class="mb-0 mt-5 mb-3">
                                <label for="userid">Enter your 6-digit MPIN</label>
                            </div>

                            <div class="col-md-12 mb-3 gap-1 mpin">
                                <PinInput length={6}
                                    initialValue=""
                                    secret
                                    onChange={(value, index) => {console.log(value) }}
                                    type="numeric"
                                    inputMode="number"
                                    style={{ padding: '5px' }}
                                    inputStyle={{ borderColor: "#f36e23" }}
                                    inputFocusStyle={{ borderColor: '#f7931e' }}
                                    onComplete={(value, index) => { }}
                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/} />
                            </div>

                            <div class="text-center forgot">
                                <p class="">Forgot MPIN? Contact our <a class="CCC" href="">Customer Center</a></p>
                            </div>
                            <div class="mt-5 pt-4 d-grid gap-2">
                                <button class="btn" onClick={Login}>Login</button>
                            </div>
                            <div class="text-center mt-3 signup">
                                <p class="mb-0">Don't have an account yet? <a class="CCC" type="button" onClick={handleGoToSignUpClick}>Sign Up</a></p>
                            </div>
                        </div>
                    </form>
                    {/* <!-- ====================== --> */}
                </div>

            </div>


            {/* <!-- MPIN -->
        <script type="text/javascript">
            function clickEvent(first, last){
                if(first.value.length){
                    document.getElementById(last).focus();
                }
            }
        </script>
        <!-- == --> */}
        </section>

    );

    // //        {/* <!-- MPIN --> */}
    //   //      {/* <script type="text/javascript">
    //             function clickEvent(first, last){
    //                 if(first.value.length){
    //                     document.getElementById(last).focus();
    //                 }
    //             }
    //         </script> */}

}
export default LoginStepTwo
