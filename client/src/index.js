import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import App from './components/App';
import Home from './components/home/Home';
import AccountOverview from './components/account/AccountOverview';
import CreatePost from './components/createPost/CreatePost';
import AddDetails from './components/createPost/AddDetails';
import AdditionalDetails from './components/createPost/AdditionalDetails';
import ConfirmPost from './components/createPost/ConfirmPost';

import TestComponent from './components/navbar/register/RegisterModal';

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
