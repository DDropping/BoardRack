import React, { useEffect } from 'react';
import Navbar from './navbar/Navbar';
import setAuthToken from '../util/setAuthToken';
import { loadUser } from '../actions/auth';
import store from '../store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ children }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default App;
