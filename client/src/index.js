import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import App from './components/App';
import Home from './components/home/Home';
import AccountOverview from './components/account/AccountOverview';
import CreatePost from './components/createPost/CreatePost';
import TestComponent from './components/Test';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={TestComponent} />
        <Route path="/Account" exact component={AccountOverview} />
        <Route path="/CreatePost" component={CreatePost} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
