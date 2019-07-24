import React from 'react';
import './App.css';
import Routers from './router';
import Nav from './components/Nav';
import {BrowserRouter as Router} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routers/>
      </Router>
    </div>
  );
};

export default App;
