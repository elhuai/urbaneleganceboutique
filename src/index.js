import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/react-bootstrap/dist/react-bootstrap';
// import '../node_modules/bootstrap/scss/bootstrap.scss';
// import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
