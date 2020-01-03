import React, { Component } from 'react';
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
      <div className="App">
        <div style={{ height: '100%' }}>

          <Router>
            <Navbarhandler /> 
            <Route exact path='/' component={StartingComponent} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
