import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.js';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  state = {
    sideDrawerOpen : false
  }
  drawerToggleHandler = () =>{
    this.setState((prevState)=>{
      return{
        sideDrawerOpen : !prevState.sideDrawerOpen
      }
    })

  }
  backDropClickHandler=()=>{
    this.setState({sideDrawerOpen :false})
  }
  
  
  render(){
    let Back;
    if(this.state.sideDrawerOpen){
      Back = <Backdrop backdrophandler ={this.backDropClickHandler}/>
    }
  return (
    <div className="App">
      <div style={{height : '100%'}}>
   <Navbar drawerClickHandler ={this.drawerToggleHandler}/>
   <SideDrawer show={this.state.sideDrawerOpen}/>
   {Back}   
   </div>
    </div>
  );
}
}

export default App;
