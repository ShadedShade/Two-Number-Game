import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
<Router>
<div>
  {/* TOP NAV */}
  <HomeNav />
  {/* Below NAV need two Columns for Sidebar and Main Content */}
  <div>
    <div className="row align-items-start">
      <div className="col">
        <Sidebar />
      </div>
      <div className="col">
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
  </div>
  {/* <Login /> */}


</div>
</Router>