import React, {Component} from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import StartGame from './components/StartGame'
import CreateGame from './components/CreateGame'
import BoardGame from './components/BoardGame'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

//font-family: 'Julius Sans One', sans-serif;
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/StartGame" component={StartGame}/>
            <Route exact path="/CreateGame" component={CreateGame}/>
            <Route exact path="/BoardGame" component={BoardGame}/>
        </Switch>
    </Router>
  );
}

export default App;
