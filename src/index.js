import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

import "./assets/fonts/Plantin.woff";
import "./assets/fonts/ProximaNova-Regular.woff";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
