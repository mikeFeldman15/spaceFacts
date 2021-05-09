import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

render (
  <BrowserRouter>
    {/* <h1>In index</h1> */}
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)