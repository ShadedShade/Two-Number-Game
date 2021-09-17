import React, { useEffect, useState } from 'react';
import aboutimg from '../img/aboutus.jpg';
import Sidebar from './Sidebar.js'
import HomeNav from './HomeNav.js'


function Mechanics() {
    return (
        <div>
            <HomeNav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2" style={{ padding: "0px", paddingRight: "304px" }}>
                        <Sidebar />
                    </div>
                    <div className="col-sm-9">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 mx-auto pt-5">
                                    <img src={aboutimg} alt="" />
                                </div>
                                <div class="col-md-6 mx-auto pt-4">
                                    <h5 class="mt-4 mb-2">Welcome to <span style={{ color: "#f36e23;" }}>Website Name</span></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo asperiores
                                        perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo asperiores
                                        perferendis. Lorem ipsum dolor sit amet. </p>
                                    <a href="#" class="shadow btn btn-primary mt-3 seemore">SEE MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mechanics;