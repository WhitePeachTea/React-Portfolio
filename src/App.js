import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav.js';
import Front from './components/front.js'
import About from './components/about.js';
import Project from './components/project.js';
import Contact from './components/contact.js';

class App extends Component {
  render() {
    return (
      <main>
      <Nav/>
      <Switch>
          <Route path="/" component={Front} exact />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
      </Switch>
      </main>
    );
  }
}

export default App;
