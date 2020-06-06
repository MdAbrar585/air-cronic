import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LocationView from './Component/LocationView/LocationView';
import LocationNavbar from './Component/LocationNavbar/LocationNavbar';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/location">
            <LocationNavbar></LocationNavbar>
            <LocationView></LocationView>
          </Route>
          <Route path="/">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
          </Route>


        </Switch>

      </div>
    </Router>

  );
}

export default App;
