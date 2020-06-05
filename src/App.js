import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
