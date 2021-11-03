import { useState, useEffect } from "react";
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import HomeProducts from './HomeProducts';
import {Route, Switch, Link } from 'react-router-dom';
 import './App.css';
function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home">
          <HomeProducts />
          </Route>
        <Route exact path="/">
      <LandingPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
