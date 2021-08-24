import React from 'react';

function Header() {
    return (
        <header className="text-center text-white masthead" style={{ backgroundImage: `url('/bootstrap/assets/img/bg-masthead.jpg')` }}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto position-relative">
                    <h1 className="mb-5">Build a landing page for your business or project and generate more leads!</h1>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-9 mb-2 mb-md-0"><input className="form-control form-control-lg" type="email" placeholder="Enter your email..."></input></div>
                            <div className="col-12 col-md-3"><button className="btn btn-primary btn-lg" type="submit">Sign up!</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
    );
}

export default  Header;