import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
function LoginStepTwo() {
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

    const Login = () => {
        Axios.post('http://localhost:3000/login', {
            username: username,
        }).then((response) => {
            if (response.data.message) {               //  When Invalid
                setLoginStatus(response.data.message) /// set this to local storage, btw THIS IS ONLY TEMPORARY HAHAHAHHA, password should be hashed tho
                console.log(response.data.message);
            } else {                        // When True
                setLoginStatus(response.data[0])
                console.log(response);
                console.log(response.data[0].mobile);
                sessionStorage.setItem("Userid", response.data[0].mobile);
                console.log("session Storage Userid: " + sessionStorage.getItem("Userid"));

            }
        });
    }
    return (

        <section>

            <section class="container">
                    <div class="row d-flex justify-content-center align-items-center bg-row">
                        <div class="col-md-5 bg-box p-5">
                            <a href="login.html">
                                <span><i class="fas fa-arrow-left"></i></span>
                        </a>
                        <h3 class="text-center">Login</h3>
                        <div class="mb-0 mt-5">
                            <label for="userid">Enter your 6-digit MPIN</label>
                        </div>
                        <div class="mb-1 mpin">
                            <input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this, 'sec')"/>
                                <input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this, 'third')"/>
                                    <input type="text" id="third" maxlength="1" onkeyup="clickEvent(this, 'fourth')"/>
                                        <input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this, 'fifth')"/>
                                            <input type="text" id="fifth" maxlength="1" onkeyup="clickEvent(this, 'sixth')"/>
                                                <input type="text" id="sixth" maxlength="1"/>
                                                </div>
                                                <div class="text-center forgot">
                                                    <p class="">Forgot MPIN? Call our <a class="CCC" href="">Customer Contact Center</a></p>
                                                </div>
                                                <div class="mt-5 pt-4 d-grid gap-2">
                                                    <button class="btn">Login</button>
                                                </div>
                                                <div class="text-center mt-3 signup">
                                                    <p class="mb-0">Don't have an account yet? <a class="CCC" href="signup.html">Sign Up</a></p>
                                                </div>
                                        </div>
                                    </div>
                            </section>
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
export default Login
