import React from 'react';
import { View } from 'react-native';
// react-redux is what allows react to communicate to redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';

//import child components
import { Header } from './components/common/';
import LibraryList from './components/LibraryList.js';

const App = () => (
	// reducer passed to createStore, createStore passed to Provider
	<Provider store={createStore(reducers)}>
		<View style={{ flex: 1 }}>
			<Header headerText="Tech Stack" />
			<LibraryList />
		</View>
	</Provider>
);

export default App;
