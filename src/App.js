import React from 'react';
import { Route, Switch } from 'react-router-dom';



// Component Imports
import NavBar from './components/nav.js';
import Home from './components/home.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';



function App() {
  console.log("Hello! Thank you for viewing my portfolio! If you would like to talk, please visit the 'contact' page!")

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ Projects } />
        <Route path='/contact' component={ Contact } />

      </Switch>

    </div>
  );
}

export default App;
