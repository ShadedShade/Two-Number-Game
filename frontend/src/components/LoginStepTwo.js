import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
function LoginStepTwo() {
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleBackClick = () =>
        {
            history.push('/');
        }
        const handleGoToSignUpClick = () =>
        {
            history.push('/SignUp');
        }
        const handleLoginStepTwoClick = () =>
        {
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
                sessionStorage.setItem("Userid",response.data[0].mobile);
               console.log("session Storage Userid: " +  sessionStorage.getItem("Userid"));

            }
        });
    }
    return (
        <section class="container">
            <a href="" onClick={handleBackClick}>
                <span><i class="fas fa-arrow-left back"> Back</i></span>
            </a>
            <div class="row d-flex justify-content-center align-items-center bg-row">
                <div class="col-md-5 bg-box p-5">
                    <h3 class="text-center">Login</h3>
                    <form>
                        <div class="mb-4 pb-2 mt-5">
                            <label for="userid">Enter User ID / Mobile Number</label>
                            <input type="text" name="userid" class="form-control" id="userid" onChange={(e) => { setUsername(e.target.value) }}/>
                        </div>
                        <div class="mt-4 mb-3 d-grid gap-2">
                            {/* GO TO STEP TWO */}
                            <a class="btn" onClick={Login}>NEXT</a>
                        </div>
                        <div class="text-center forgot">
                            {/* AHH WAT TO DO HERE? */}
                            <p class="mb-0">Forgot UserID / Mobile Number? Call our <br /></p>
                            <a class="CCC" href="">Customer Contact Center</a>
                        </div>
                        <div class="col-md-12 mt-4">
                            <div class="login-or">
                                <hr class="hr-or" />
                                <span class="span-or">or login in with</span>
                            </div>
                        </div>
                        <div class="col-md-12 mt-4 text-center">
                            <span><i class="fab fa-facebook-square px-2"></i></span>
                            <span><i class="fab fa-google-plus-square px-2"></i></span>
                        </div>
                        <div class="text-center mt-3 signup">
                            <p class="mb-0">Don't have an account yet? <a class="CCC" onClick={handleGoToSignUpClick}>Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login
