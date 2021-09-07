//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import Tweet from './components/Tweet';
import LoginTest from './components/LoginTest';
import Login from './components/Login';
import LoginStepTwo from './components/LoginStepTwo';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import HomeNav from './components/HomeNav';
import HomepageContent from './components/HomepageContent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//setter
//localStorage.setItem('myData', "User TITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTLE");

// getter
// localStorage.getItem('myData');

// remove
// localStorage.removeItem('myData');

// remove all
// localStorage.clear();


/**
 * Session Storage:
 *  Userid
 *  Password
 *  Mobile
 *  sMoney
 */

function App() {

  // OK WHAT  TO DO?
  // IF LOGGED IN, GET PROFILE
  return (
    <Router>
      <div>
        {/* TOP NAV */}
        <HomeNav />
        {/* Below NAV need two Columns for Sidebar and Main Content */}
        <div>
            
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3 p-0">
                  <Sidebar />
                </div>
                <div className="col-sm-9">
                  <HomepageContent />
                </div>
              </div>
            </div>

            {/* <div className="row ">
            <Sidebar />
              <div className="col-md-9">
                <div className="col-md-12">
                  <HomepageContent />
                </div>
              </div>
              
            </div> */}
            
            <div>
              <Switch>
                {/* This switch is Below  the Navigation bar meaning that if you changed routes, it will render under routes so what we need to do is to create a page that HAS THIS NAV and A SEPARATE SWITCH THAT SHOWS THE LOGIN AND LANDING PAGE MEAING ROUTE TO SIGN UP LOGIN AND LANDING PAGE AND HOME PAGE */}
                <Route path="/" exact component={Landing} />
                <Route path="/Home" exact component={Home} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/LoginStepTwo" exact component={LoginStepTwo} />
                <Route path="/Login" exact component={Login} />
                <Route path="/tweets" exact component={Tweet} />
              </Switch>
            </div>



        </div>
        {/* <Login /> */}


      </div>
    </Router>
  );
}

export default App;