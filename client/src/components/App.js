import React, { useEffect } from 'react';

import Navbar from './navbar/Navbar';
import store from '../store';
import setAuthToken from '../util/setAuthToken';
import RegisterModal from './navbar/register/RegisterModal';
import LoginModal from './navbar/login/LoginModal';
import LogoutModal from './navbar/logout/logoutModal';
import ResultModal from './util/ResultModal';
import Footer from './footer';
import { loadUser } from '../actions/auth';
import './app.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ children }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <div className="wrapperApp">
        <div className="wrapperNavbar">
          <Navbar />
        </div>
        <div className="wrapperBody">
          <RegisterModal />
          <LoginModal />
          <LogoutModal />
          <ResultModal />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
