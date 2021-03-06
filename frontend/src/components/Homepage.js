import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js'
import HomeNav from './HomeNav.js';
import Mechanics from './Mechanics.js';
import HomepageContent from './HomepageContent.js';
import '../styles/homepage.css'


function Homepage() {
  return (
    <div>
      <HomeNav />
      <div className="container-fluid">
        <div className="row">
          <Router>
            <div className="col-sm-12">
              <Switch>
                <Route path="/Home" exact component={HomepageContent} />
                <Route path="/Home/Mechanics" exact component={Mechanics} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Homepage;