import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from "./redux/store";

import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

import "./assets/fonts/Plantin.woff";
import "./assets/fonts/ProximaNova-Regular.woff";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
