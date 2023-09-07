// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Greeting} />    
    </Router>
  );
}

export default App;