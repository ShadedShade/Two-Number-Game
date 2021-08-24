import React, { useState } from "react";
import Axios from 'axios';
function Login() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Register = () => {
        Axios.post('http://localhost:3000/register', {
            username: usernameReg, password: passwordReg,
        }).then(function (response){
            console.log(response);
        }).catch(function (error){
            console.log(error);
        });
    }
    const Login = () => {
        Axios.post('http://localhost:3000/login', {
            username: username, password: password,
        }).then((response) =>{
            console.log(response);
        });
    }
    return (
        <div>
            <div class="form-signin">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input  id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" onChange={(e) => { setUsernameReg(e.target.value) }} />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(e) => { setPasswordReg(e.target.value) }}/>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" onClick={Register}>Sign in</button>
                <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
            </div>
            <div>
                <div class="form-signin">
                    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" onChange={(e) => { setUsername(e.target.value) }} />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(e) => { setPassword(e.target.value) }} />
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" onClick={Login}>Login</button>
                    <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
                </div>
            </div>
        </div>
    );
}
export default Login;