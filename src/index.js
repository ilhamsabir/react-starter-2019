import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/store";
import AppRoute from './route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/sbadmin2.css';
import './assets/css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>
  ,document.getElementById('app')
);
