import React, { Component } from 'react';
import './App.css';
import {login} from './pages/Login.js' 
import {Register} from './pages/Register.js' 
import {Places} from './pages/Places.js';
import {TrailGuide} from './pages/TrailGuide.js';
import {Forum} from './pages/Forum.js';
import {Main} from './pages/Main.js';
import {Content} from './pages/Content.js';

import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";

import Menu from './components/Menu'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router>
          <div>
            <Menu/>
            <div className="content">
              <Route exact path = '/' component={Main}/>    
              <Route path = '/login'  component={login}/>
              <Route path = '/registration' component={Register}/> 
              <Route path = '/places'  component={Places}/>
              <Route path = '/forum' component={Forum}/> 
              <Route path = '/trailGuide'  component={TrailGuide}/>
              <Route path = '/placeInfo/:id' component={Content}/>
            </div>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App;
