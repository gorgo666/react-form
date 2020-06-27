/** @format */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Hobby from './pages/Hobby';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Contact1 from './pages/Contact1';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/courses' component={Courses} />
          <Route path='/hobby' component={Hobby} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
          <Route path='/contact2' component={Contact1} />
        </Switch>
      </Router>
    );
  }
}

export default App;
