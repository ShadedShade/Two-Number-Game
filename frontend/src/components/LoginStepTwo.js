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
        history.push('/Login');
    }
    const handleGoToSignUpClick = () => {
        history.push('/SignUp');
    }
    const handleLoginStepTwoClick = () => {
        history.push('/logintwo'); // go to step 2
    }





    const CheckMpin = (val) => {
        setPassword(val);
        console.log("From Value: "+val);
        console.log(password);
        console.log("Set Password Length: "+password.length);
        Axios.post('http://localhost:3000/loginMpin', {
            username: username, password: val
        }).then((response) => {
            if (response.data.message) {               //  When Invalid
                // setLoginStatus(response.data.message) /// set this to local storage, btw THIS IS ONLY TEMPORARY HAHAHAHHA, password should be hashed tho
                console.log(response.data.message);
            } else {                        // When True
                // setLoginStatus(response.data[0])
                console.log(response);
                console.log(response.data[0].mobile);
                sessionStorage.setItem("mPin", response.data[0].mpin);
                console.log("session Storage Userid: " + sessionStorage.getItem("Userid"));
                console.log("session Storage Mpin: " + sessionStorage.getItem("mPin"));

            }
        });
    }
    return (

        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center bg-row vh-100 w3-animate-right">
                <div className="col-md-5 bg-box">
                    {/* <!-- TITLE AND BACKBTN SECTION--> */}
                    <div>
                        <a type="button" onClick={handleBackClick}>
                            <span><i className="fas fa-arrow-left back"></i></span>
                        </a>
                        <h2 className="text-center">Login</h2>
                    </div>
                    {/* <!-- =========================== -->
                <!-- === FORM SECTION ===== --> */}
                    <form action="">
                        <div className="col-md-12 bg-box width-100">
                            <div className="mb-0 mt-5 mb-3">
                                <label for="userid">Enter your 6-digit MPIN</label>
                            </div>

                            <div className="col-md-12 mb-3 gap-1 mpin">
                                <PinInput length={6}
                                    initialValue={password}
                                    secret={true}
                                    onKeyUp={(value, index) => {setPassword(value);}}
                                    type="numeric"
                                    inputMode="number"
                                    style={{ padding: '5px' }}
                                    inputStyle={{ borderColor: "#f36e23" }}
                                    inputFocusStyle={{ borderColor: '#f7931e' }}
                                    onComplete={(value, index) => {console.log("On Complete: "+value); console.log("On Complete: "+password); CheckMpin(value)}}

                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/} />
                            </div>

                            <div className="text-center forgot">
                                <p className="">Forgot MPIN? Contact our <a className="CCC" href="">Customer Center</a></p>
                            </div>
                            <div className="mt-5 pt-4 d-grid gap-2">
                                <button className="btn" onClick={CheckMpin}>Login</button>
                            </div>
                            <div className="text-center mt-3 signup">
                                <p className="mb-0">Don't have an account yet? <a className="CCC" type="button" onClick={handleGoToSignUpClick}>Sign Up</a></p>
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
        </div>

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
