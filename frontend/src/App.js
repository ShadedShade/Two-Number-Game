//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import LoginTest from './components/LoginTest';
import Login from './components/Login';
import LoginStepTwo from './components/LoginStepTwo';
import Signup from './components/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
          {/* <Nav /> */}
          <Switch>
            {/* This switch is Below  the Navigation bar meaning that if you changed routes, it will render under routes so what we need to do is to create a page that HAS THIS NAV and A SEPARATE SWITCH THAT SHOWS THE LOGIN AND LANDING PAGE MEAING ROUTE TO SIGN UP LOGIN AND LANDING PAGE AND HOME PAGE */}
            <Route path="/" exact component={Home} /> 
            <Route path="/Login" exact component={Login} /> 
            <Route path="/LoginStepTwo" exact component={LoginStepTwo} /> 
            <Route path="/Signup" exact component={Signup} /> 
            <Route path="/tweets" exact component={Tweet} />
         </Switch>
     </div>
   </Router>
  );
}

export default App;
