import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {GlobalStyle} from './styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);