import React, { useEffect, useState } from 'react';

function Footer() {
    return (
        <div>
            <footer>
                <div class="footer-top">
                    <div class="container">
                        <div class="row gy-4">
                            <div class="col-lg-4">
                                <img class="logo" src="" alt="" />
                                <h1 style={{ color: "#f36e23" }}>logohere</h1>
                            </div>
                            <div class="col-lg-2">
                                <h5 class="text-white">Products</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Mechanics</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2">
                                <h5 class="text-white">More</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">FAQ's</a></li>
                                    <li><a href="#">Privacy AND Policy</a></li>
                                    <li><a href="#">Insert Here</a></li>
                                    <li><a href="#">Insert Here</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h5 class="text-white">Contact</h5>
                                <ul class="list-unstyled">
                                    <li>Address: 123 Input Your Address Here 234</li>
                                    <li>Email: thisismy.email@example.com</li>
                                    <li>Phone: 0923456891</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom py-1">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-0">
                                <p class="mb-0 text-center">© 2021 copyright all right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;