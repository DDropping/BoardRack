import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
