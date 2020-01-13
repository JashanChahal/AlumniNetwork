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
import Profile from './Components/Dashboard/Profile';
import UpdateForm from './Components/Dashboard/UpdateForm.js'
import DefaultHome from './Components/Dashboard/DefaultHome';
import PageNotFound from './Components/Dashboard/PageNotFound'

class App extends Component {

  render() {
    return (
      <AuthProvider>
        <PostProvider>
        <div className="App" style={{ height: '100%' }}>
          <Router>
            <Navbarhandler />
            <Switch>
              <Route exact path='/' component={DefaultHome} />
              <Route exact path='/login' component={LoginType} />
              <Route exact path='/login/:type' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/UpdateForm' component={UpdateForm} />
              <Route path='/Dashboard' component={Dashboard} />
              <Route path='/Profile' component={Profile} />
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
        </div>
        </PostProvider>
      </AuthProvider>

    );
  }
}

export default App;
