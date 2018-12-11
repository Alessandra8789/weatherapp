import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Home from './views/home';
import Data from './views/data';
import {Switch, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
          <Route exact path='/' render={()=> <Home />}/>


          <Route exact path='/data' render={()=> <Data />}/>

          </Switch>
        </div>


      </div>
    );
  }
}

export default App;
