import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getUser } from './state';
import { getUsers } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter 
  // basename='/shop'
  >
    <App users={{key_getUser: getUser, key_getUsers: getUsers}} />
  </BrowserRouter>
);
