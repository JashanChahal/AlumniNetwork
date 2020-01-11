import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarhandler from './Components/Navbar/Navbarhandler';
import Register from './Components/Auth/Register';
import LoginType from './Components/Auth/LoginType';
import Login from './Components/Auth/Login'
import StartingComponent from './Components/Dashboard/Dashboard';
import {AuthProvider} from './Context/AuthContext.js';
import Dashboard from './Components/Dashboard/Dashboard';
import { PostProvider } from './Context/PostContext';
import Profile from './Components/Profile/Profile';
class App extends Component {

  render() {
    return (
      <AuthProvider>
        <PostProvider>
        <div className="App" style={{ height: '100%' }}>
          <Router>
            <Navbarhandler />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={LoginType} />
            <Route exact path='/login/:type' component={Login} />
            <Route exact path='/showprofile' component={Profile}/>
            <Route path='/register' component={Register} />
          </Router>
        </div>
        </PostProvider>
      </AuthProvider>

    );
  }
}

export default App;
