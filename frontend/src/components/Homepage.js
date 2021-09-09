import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
                  <Switch>
                    { // 
                      <Route path="/Home" exact component={HomepageContent} />
                    }
                    </Switch>

                </div>
              </div>
            </div>     
        </div>
        
    );
}

export default Homepage;