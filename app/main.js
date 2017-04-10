import React from 'react';
import ReactDOM from 'react-dom';
//import hashHistory from 'react-router/lib/hashHistory';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Main from './components/main.component';
import Row from './components/row';
import Table from './components/table';
import App from './components/mainScript';

import store from './store/store';
console.log(store);
var router = (
		<Provider store={store}>
			<Router  history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Table}></IndexRoute>
				</Route>
			</Router>
		</Provider>
	);

ReactDOM.render(router, document.getElementById('root'));