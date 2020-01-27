import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home, About, Contact, Navigation } from './components';
import './App.css';

const App = () => (
<div>
    <Navigation />
    Output:
    <Route exact path= "/">
      <Home />
    </Route>
    <Route path= "/about">
      <About />
    </Route>
    <Route path= "/contact">
      <Contact />
    </Route>
  </div>

);

export default App;
