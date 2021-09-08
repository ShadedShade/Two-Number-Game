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
import Homepage from './components/Homepage';
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
        <div>
            <div><Homepage /></div>
        </div>
        {/* <Login /> */}


      </div>
    </Router>
  );
}

export default App;