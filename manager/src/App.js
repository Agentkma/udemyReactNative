import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
//redux-thunk is middleware
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router.js';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyDByilpZYlDN8cUfojLgOYEUH1PP8oZ-jE',
			authDomain: 'reactnativemanager-8d9a9.firebaseapp.com',
			databaseURL: 'https://reactnativemanager-8d9a9.firebaseio.com',
			projectId: 'reactnativemanager-8d9a9',
			storageBucket: 'reactnativemanager-8d9a9.appspot.com',
			messagingSenderId: '230459759370'
		};
		firebase.initializeApp(config);
	}

	render() {
		//applyMiddleware(ReduxThunk) is a store 'enhancer'
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
