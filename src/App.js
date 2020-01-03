import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarhandler from './Components/Navbar/Navbarhandler';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import StartingComponent from './Components/Dashboard/StartingComponent';
class App extends Component {

  render() {
    return (
        <Fragment>
        <div className="App" style={{ height: '100%' }}>
          <Router>
            <Navbarhandler />
            <Route exact path='/' component={StartingComponent} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;
