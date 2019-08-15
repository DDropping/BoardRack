import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import App from './components/App';
import Home from './components/Home';

import TestComponent from './components/navbar/RegisterModal';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={TestComponent} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
