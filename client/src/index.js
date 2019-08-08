import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import App from './components/App';
import Home from './components/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
