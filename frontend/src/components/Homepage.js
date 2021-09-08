import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js'
import HomeNav from './HomeNav.js';
import HomepageContent from './HomepageContent.js';
import '../styles/homepage.css'


function Homepage() {
    return (
        <div>
            <HomeNav />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2" style={{padding: "0px", paddingRight: "304px"}}>
                  <Sidebar />
                </div>
                <div className="col-sm-9">
                  <HomepageContent />
                </div>
              </div>
            </div>     
        </div>
        
    );
}

export default Homepage;