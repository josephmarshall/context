import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, } from 'react-router-dom'
import UserProvider from './providers/UserProvider'

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />  
    </Router>
  </UserProvider>,
document.getElementById('root'));

