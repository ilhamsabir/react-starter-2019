import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/store";
import AppRoute from './route';
import './assets/css/index.scss';

ReactDOM.render(
	<Provider store={store}>
		<AppRoute />
	</Provider>
	,document.getElementById('app')
);
