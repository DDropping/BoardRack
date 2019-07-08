import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
      </Fragment>
    </Router>
  );
};

export default App;
