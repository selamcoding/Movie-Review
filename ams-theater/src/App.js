import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../src/container/NavBar/nav';
import { loadUser } from './Store/actions/auth';
import { Store } from './index';
import setAuthToken from './util/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  componentDidMount() {
    Store.dispatch(loadUser());
  }
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
