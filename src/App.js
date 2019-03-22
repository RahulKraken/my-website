import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Layout/Header';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import ContaceMe from './Components/Pages/ContactMe';
import MyWork from './Components/Pages/MyWork';
import Resume from './Components/Pages/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path = "/" component = {About} />
          <Route exact path = "/blog" component = {Blog} />
          <Route exact path = "/contact" component = {ContaceMe} />
          <Route exact path = "/mywork" component = {MyWork} />
          <Route exact path = "/resume" component = {Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
